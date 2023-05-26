let buttonStart=document.getElementById("display-button")
let displayText=document.getElementById("counter-display")
let arrayofNumbers=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
i=0

buttonStart.addEventListener("click",function(){
if(i==15){
i=0
}
displayText.innerHTML=arrayofNumbers[i++]
});
console.log(arrayofNumbers);
