const textbox = document.getElementById("textbox");
const toForehnheat = document.getElementById("toForehnheat");
const tocelsiusheat= document.getElementById("tocelsiusheat");
const result = document.getElementById("result");

let temp;

function convert() {

    if ( toForehnheat.checked){
        temp = Number(textbox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "°F";
    }
    else if (tocelsiusheat.checked){
        temp = Number(textbox.value);
        temp = (temp - 32) * (5 /9) ;
        result.textContent = temp.toFixed(1) + "°C";
       
    }
    else{
       result.textContent = "select a unit";
    }
}