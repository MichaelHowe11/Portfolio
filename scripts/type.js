document.addEventListener("DOMContentLoaded", function () {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }

    let elements = document.querySelectorAll('.slide');
    let isTyping = false;

    window.addEventListener('scroll', scrollfunc);
    scrollfunc();

    function scrollfunc() {
        const height = (window.innerHeight / 5 * 3.5);

        elements.forEach((slide) => {
            const elementTop = slide.getBoundingClientRect().top;

            if (elementTop < height) {
                if (!isTyping) {
                    isTyping = true;
                    delayedGreeting();
                }
            }
        });
    }

    const typerElement = document.getElementById("typer");
    const originalText = typerElement.innerHTML;
    const additionalText1 = " the awesomest place ever.";
    const fullText1 = originalText + additionalText1;
    const additionalText2 = " The Center for Advanced Research and Technology.";
    const fullText2 = originalText + additionalText2;

    typerElement.innerHTML = "";
    let i = 0;
    let j = originalText.length;
    let k = fullText1.length;

    function typing() {
        if (i <= fullText1.length) {
            typerElement.innerHTML = fullText1.substring(0, i) + "●";
            i++;
            setTimeout(typing, 50);
        } else {
            isTyping = false;
            setTimeout(startCorrection, 1000);
        }
    }

    function startCorrection() {
        if (k >= originalText.length) {
            typerElement.innerHTML = fullText1.substring(0, k) + "●";
            k--;
            setTimeout(startCorrection, 50);
        } else {
            isTyping = true;
            correction();
        }
    }

    function correction() {
        if (j <= fullText2.length) {
            typerElement.innerHTML = fullText2.substring(0, j) + "●";
            j++;
            setTimeout(correction, 50);
        } else {
            typerElement.innerHTML = fullText2;
        }
    }

    async function delayedGreeting() {
        typing();
    }
});
