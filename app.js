var num1 = 1;
var num2 = 2;
var img = document.querySelector("img")
var h1 =  document.querySelector("#result");
function toss(value){
    var randomNumber = Math.ceil(Math.random() *2)
    if(value === 'Head' && randomNumber === num1 || value === 'Tails' && randomNumber === num2){
        h1.innerHTML = "";
        // console.log("You win the toss");
        h1.innerHTML += "You win the toss";
    }
    else{
        h1.innerHTML = "";
        // console.log("you loose the toss");
        h1.innerHTML += "you loose the toss";
    }
    if(randomNumber === num1){
        img.src = "./images/head.png"
    }
    else if(randomNumber === num2){
        img.src = "./images/tails.png"
    }
}