const pswd1 = document.getElementById("inp");

const alphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const digits = "0123456789";
const symbol= "+=-/<>{}[]?:;_)(*&^%$#@!~|";
const totchar=alphabet+digits+symbol;

function generatepassword(){
    let pswd2="";
    pswd2 +=symbol[Math.floor(Math.random()*symbol.length)];
    pswd2 +=alphabet[Math.floor(Math.random()*alphabet.length)];
    pswd2 +=digits[Math.floor(Math.random()*digits.length)];
    for(i=0; i<5;i++){
        pswd2 +=totchar[Math.floor(Math.random()*totchar.length)];
    }
    pswd1.value=pswd2;
}
function copy(){
    pswd1.select();
    document.execCommand("copy");
}