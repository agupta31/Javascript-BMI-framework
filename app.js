
var inputHeight=prompt('enter your height');
var inputWeight=prompt('enter your weight');
var x=bmiObj(inputHeight,inputWeight);
 var myClick=document.getElementById('myButtn');
  myClick.addEventListener("click",x.calculateBmi);
 

