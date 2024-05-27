document.addEventListener("DOMContentLoaded", function () {

    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
    let elements = document.querySelectorAll('.slide')
    // console.log(elements)
    let x = 0;
    let istyping = false;

    window.addEventListener('scroll', scrollfunc)
    window.addEventListener('touchmove', scrollfunc)

    scrollfunc()
    function scrollfunc() {
        const height = (window.innerHeight / 5 * 3.5);

        elements.forEach((slide) => {
            const elementstop = slide.getBoundingClientRect().top;

            if (elementstop < height) {

                if (istyping === false) {
                    istyping = true;
                    delayedGreeting();

                }

            }
        });

    }


    let text = document.getElementById("typer").innerHTML + " the awesomest place ever."

    let text2 = document.getElementById("typer").innerHTML + " The Center for Advanced Research and Technology."
    let origtext = document.getElementById("typer").innerHTML;
    document.getElementById("typer").innerHTML = ""
    let i = 0
    let i2 = 32
    // console.log(text2.substring(origtext.length + i - 1, origtext.length + i))

    function typing() {
        let istyping = true

        if (text != document.getElementById("typer").innerHTML && istyping === true) {
            document.getElementById("typer").innerHTML += text.charAt(i)
            setTimeout(typing, 50)
        } else {
            istyping = false
            clearTimeout(typing)
        }
        i++
    }
    let isorig = false;
    function correction() {
        if (document.getElementById("typer").innerHTML != origtext && !isorig) {
            let htmltext = document.getElementById("typer").innerHTML;
            htmltext = htmltext.slice(0, origtext.length + i - 1) + htmltext.slice(origtext.length + i);
            document.getElementById("typer").innerHTML = htmltext;
            // console.log(htmltext);
            setTimeout(correction, 50);
        } else if (document.getElementById("typer").innerHTML === origtext) {
            isorig = true
        }
        if (isorig === true) {
            // console.log("bruh")
            if (document.getElementById("typer").innerHTML != text2) {
                document.getElementById("typer").innerHTML += text2.charAt(i2)
                setTimeout(correction, 50)
            } else {
                clearTimeout(correction)
            }
        }
        i2++
        i--
        // console.log("e");
    }


    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function delayedGreeting() {
        await sleep(100);
        typing();
        await sleep(6500);
        i = 26
        correction();
    }

})