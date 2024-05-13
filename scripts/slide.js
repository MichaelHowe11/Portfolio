document.addEventListener("DOMContentLoaded", function () {



    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
    let elements = document.querySelectorAll('.slide')
    // console.log(elements)
    let x = 0;
    let istyping = false;

    window.addEventListener('scroll', scrollfunc)
    scrollfunc()
    function scrollfunc() {
        const height = (window.innerHeight / 5 * 3.5);

        elements.forEach((slide) => {
            const elementstop = slide.getBoundingClientRect().top;

            if (elementstop < height) {
                slide.classList.add('show');
                slide.classList.remove('slide');

            } else {
                slide.classList.remove('show');

                slide.classList.add('slide');

            }
        });

    }

})