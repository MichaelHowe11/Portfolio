document.addEventListener("DOMContentLoaded", function () {
    text = document.getElementById("typer").innerHTML
    document.getElementById("typer").innerHTML = ""

    let i =0
    if (text != document.getElementById("typer").innerHTML) {
        document.getElementById("typer").innerHTML += text.charAt(i)
        i++
        setTimeout()
    }
});