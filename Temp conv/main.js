const celciusInput=document.querySelector('#celcius > input');
const fahrenInput=document.querySelector('#fahrenheit > input');
const kelvinInput=document.querySelector('#kelvin > input');

function roundNum(num)
{
  return Math.round(num*100)/100;
}

//CELCIUS
celciusInput.addEventListener('input',function(){
const cTemp=parseFloat(celciusInput.value);
const fTemp=(cTemp*(9/5))+32;
const kTemp=cTemp+273.15;

fahrenInput.value=roundNum(fTemp);
kelvinInput.value=roundNum(kTemp);
});

//Fahrenheit
fahrenInput.addEventListener('input',function(){
const fTemp=parseFloat(fahrenInput.value);
const cTemp=(fTemp-32)*5/9;
const kTemp=(fTemp+459.67)*5/9;

celciusInput.value=roundNum(cTemp);
kelvinInput.value=roundNum(kTemp);
});


//KELVIN
kelvinInput.addEventListener('input',function(){
const kTemp=parseFloat(kelvinInput.value);
const fTemp=(kTemp*9/5)-459.67;
const cTemp=kTemp-273.15;

fahrenInput.value=roundNum(fTemp);
celciusInput.value=roundNum(cTemp);
});
