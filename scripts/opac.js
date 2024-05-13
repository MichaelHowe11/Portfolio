function opac1(num, islow, id) {
    if (islow) {
        document.getElementById(id).classList.remove("opacitynorm")
        document.getElementById(id).classList.add("opacitylow")
    } else {
        document.getElementById(id).classList.remove("opacitylow")
        document.getElementById(id).classList.add("opacitynorm")
    }
}

