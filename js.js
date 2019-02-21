// KALKULATOR

var firstNum=document.querySelector('#firstNum');
var secondNum=document.querySelector('#secondNum');
var hasil = null;

function tambah(){
  hasil = parseFloat(firstNum.value) + parseFloat(secondNum.value);
  document.querySelector('#hasil').innerHTML=hasil;
}
function kali(){
  hasil= parseFloat(firstNum.value) * parseFloat(secondNum.value);
  document.querySelector('#hasil').innerHTML=hasil;
}
function bagi(){
  hasil= parseFloat(firstNum.value) / parseFloat(secondNum.value);
  document.querySelector('#hasil').innerHTML=hasil;
}
function pangkat(){
  hasil= Math.pow(parseFloat(firstNum.value),parseFloat(secondNum.value))
  document.querySelector('#hasil').innerHTML=hasil;
}
