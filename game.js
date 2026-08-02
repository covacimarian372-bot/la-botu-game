const startBtn = document.getElementById("startBtn");

const menu = document.getElementById("menu");
const gameArea = document.getElementById("gameArea");

const shaorma = document.getElementById("shaorma");
const moneyText = document.getElementById("money");


let money = 0;
let ingredients = [];


startBtn.onclick = function(){

    menu.style.display = "none";
    gameArea.style.display = "block";

};



function addIngredient(item){

    ingredients.push(item);

    shaorma.innerHTML = "🫓<br>";

    ingredients.forEach(i=>{

        shaorma.innerHTML += i + "<br>";

    });

}



function finish(){

    if(ingredients.length < 3){

        alert("Clientul vrea o shaorma completă!");

        return;

    }


    money += 10;

    moneyText.innerHTML = money;


    alert(
        "🌯 Shaorma servită! +10 lei"
    );


    ingredients=[];

    shaorma.innerHTML="🫓";

}
