document.addEventListener("DOMContentLoaded", function () {

    console.log("e")

    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
    let elements = document.querySelectorAll('.slide')
    // console.log(elements)
    let x = 0;
    let istyping = false;

    function scrollfunc() {
        const height = (window.innerHeight / 5 * 3.5);
        console.log(height)

        elements.forEach((slide) => {
            const elementstop = slide.getBoundingClientRect().top;
            console.log(elementstop)
            if (elementstop < height) {
                slide.classList.add('show');
                slide.classList.remove('slide');

            } else {
                slide.classList.remove('show');

                slide.classList.add('slide');

            }
        });

    }
    window.addEventListener('wheel', scrollfunc)
    window.addEventListener('touchmove', scrollfunc)




})
