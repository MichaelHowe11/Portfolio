function opac1(num, islow, id) {
    if (islow) {
        document.getElementById(id).classList.remove("opacitynorm")
        document.getElementById(id).classList.add("opacitylow")
    } else {
        document.getElementById(id).classList.remove("opacitylow")
        document.getElementById(id).classList.add("opacitynorm")
    }
}
document.addEventListener("DOMContentLoaded", function () {
    console.log(document.getElementById("showc").style.height)
    console.log(document.getElementById("thanks").offsetHeight)

    document.getElementById("showc").style.height = document.getElementById("thanks").offsetHeight + "px";
    function heightchange(params) {
        document.getElementById("showc").style.height = document.getElementById("thanks").offsetHeight + "px"
    }
    window.addEventListener('resize', heightchange);

})