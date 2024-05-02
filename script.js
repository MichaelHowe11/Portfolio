
let hellolang = ["Hello", "Hola", "你好", "नमस्ते", "Bonjour", "مرحبًا", "Привіт", "Olá"]
console.log(hellolang)
let langnum = 0;
let inanimation = false;
const delay = ms => new Promise(res => setTimeout(res, ms));


document.addEventListener("DOMContentLoaded", function () {
    let element = document.getElementById("hello")

    function fadeout() {
        let op = 1;
        let timer = setInterval(function () {

            element.style.opacity = op;
            element.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op -= op * 0.1;
            console.log(op)
            inanimation = true
            if (op <= 0.01) {
                clearInterval(timer);
                op = 1
            }
        }, 20);



    }

    function fadein() {
        document.getElementById("hello").innerHTML = hellolang[langnum]
        langnum++;

        if (langnum >= hellolang.length) {
            langnum = 0;
        }
        let op2 = 0.1;

        element.style.filter = 'alpha(opacity=0)';
        let timer2 = setInterval(function () {
            element.style.opacity = op2;
            element.style.filter = 'alpha(opacity=' + op2 * 100 + ")";
            op2 += op2 * 0.1;
            console.log(op2)
            inanimation = true
            if (op2 >= 1) {
                clearInterval(timer2);
                op2 = 0.1
            }
        }, 20);
        inanimation = false
    }
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function delayedGreeting() {
        fadein()
        await sleep(4000);
        fadeout()
    }
    let time = setInterval(() => {
        delayedGreeting()
    }, 6000);





});