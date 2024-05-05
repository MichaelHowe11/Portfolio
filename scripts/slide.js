document.addEventListener("DOMContentLoaded", function () {



    let elements = document.querySelectorAll('.slide')
    console.log(elements)
    let x = 0;


    window.addEventListener('scroll', scrollfunc)
    scrollfunc()
    function scrollfunc() {
        const height = (window.innerHeight / 5 * 3.5);
        const width = (window.innerWidth);
        console.log(width)

        elements.forEach((slide) => {
            const elementstop = slide.getBoundingClientRect().top;
            console.log(elementstop);

            if (elementstop < height) {
                slide.classList.add('show');
                slide.classList.remove('slide');

            } else {
                slide.classList.remove('show');

                slide.classList.add('slide');

            }
        });
    }


});