let calInput = document.querySelector('#celcius > input');
let FehrenheitInput = document.querySelector('#Fehrenheit > input');
let KelvinInput = document.querySelector('#Kelvin > input');

let btn = document.querySelector(".button");

function roundNumber(number){
    return Math.round(number*100)/100
}

calInput.addEventListener('input',function(){
    let CTemp = parseFloat(calInput.value);
    let fTemp = (CTemp*(9/5))+32;
    let kTemp = CTemp +273.15;


    FehrenheitInput.value = roundNumber(fTemp)
    KelvinInput.value= roundNumber(kTemp)

})

FehrenheitInput.addEventListener('input',function(){
    let fTemp = parseFloat(FehrenheitInput.value);
    let CTemp = (fTemp-32) *(5/9);
    let kTemp = (fTemp-32) *(5/9) +273.15;


    calInput.value = roundNumber(CTemp)
    KelvinInput.value= roundNumber(kTemp)

})

KelvinInput.addEventListener('input',function(){
    let kTemp = parseFloat(KelvinInput.value);
    let CTemp = kTemp-273.15;
    let fTemp = (kTemp-273.15)*(9/5)+32;


    calInput.value = roundNumber(CTemp)
    FehrenheitInput.value= roundNumber(fTemp)

})

btn.addEventListener('click',()=>{
    calInput.value =" "
    FehrenheitInput.value=" "
    KelvinInput.value =" "
})