var num = document.querySelectorAll(".num");
var calDisplay = document.querySelector("#upper h1");
var equal = document.querySelector("#equal");
var clear = document.querySelector(".clear");
var allclear = document.querySelector(".allclear");
var result = document.querySelector("#upper h2");
var clutter = "";
num.forEach(function(elem){
    // clutter = `<div class="numbe">${elem}</div>`

    elem.addEventListener("click", function(e){
        calDisplay.innerText += elem.innerText; 
        var resul = eval(calDisplay.innerText);
    result.innerText = resul;
    });
});
// document.querySelector("#lower").innerHTML = clutter;

equal.addEventListener("click", function(){
    var resul = eval(calDisplay.innerText);
    result.innerText = resul;
    // console.log(document.querySelector("#upper h1").innerText.length);
});

allclear.addEventListener("click",function(){
    calDisplay.innerText = "";
    result.innerText = "";
});

clear.addEventListener("click",function(){
    calDisplay.innerText = calDisplay.innerText.slice(0,-1);
    var resul = eval(calDisplay.innerText);
    result.innerText = resul;
    // console.log(calDisplay.innerText-1)
    
});

if(calDisplay.innerHTML.length === 0){
    result.innerText = "";
}
