let result = document.getElementById("result");
let buttons = document.querySelectorAll("button");
// let preview =document.getElementById("preview")

let displayValue = ""; // 10


updateDisplay()
function updateDisplay(){
    result.value = displayValue;
}


for(let button of buttons){
    button.addEventListener("click",function(e){
        let userInput = e.target.value;
        if(userInput == "AC"){
            displayValue = "";
            updateDisplay()
            return; // aşağıdaki kodları çalıştırma diyoruz, return demez isek ekrana AC değerini basar
        }
        if(userInput == "="){
            //10 + 10 + 120 + 120    / 3.5           = 4.67
            const evalConvert = eval(displayValue)//= 4.67
            displayValue  = evalConvert;
            updateDisplay()
            return;
        }
        displayValue = displayValue + userInput // 10 // 20
        updateDisplay()
    });
}

