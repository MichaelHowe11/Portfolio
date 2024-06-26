

document.addEventListener("DOMContentLoaded", function () {
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    let id = document.getElementById("emailcopied")
    let id2 = document.getElementById("emailButton")
    function copy() {
        navigator.clipboard.writeText("jimmy@record7.com");
        if (id == document.getElementById("emailcopied")) {
            id.classList.add("invisspan")
        }
    }

    async function delay() {
        id.classList.add("invisspan")
        await sleep(3000)
        id.classList.remove("invisspan")
    }

    id2.addEventListener("click", function (e) {
        copy()
        delay()
    })
})