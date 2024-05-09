
document.addEventListener("DOMContentLoaded", function () {
    let inputkey = "";
    let isenable = false;
    document.addEventListener('keypress', function (event) {

        inputkey += event.key
        // console.log(inputkey)
        if (inputkey.includes("wwssadadbaEnter")) {
            alert("Shoutout to Gianna and RJ. Also to my Mom and Dad :)")
            inputkey = ""
        }
    });
});
