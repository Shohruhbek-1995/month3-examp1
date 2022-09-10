let sum = [];
function sumImput() {
    for (;;) {
        let sonEl = prompt(" son kiriting ");
        if (sonEl == '' || sonEl === null || isNaN(sonEl) || sonEl.substring(0,1) == " " ) {
            break;
        } else {
            sum.push(sonEl - 0);
        }
    }
}

sumImput();
let result = sum.reduce((a,b) => a + b);
alert(`jami summa: ${result}`);
document.querySelector(".value").innerHTML = "Jami summa: " + result;