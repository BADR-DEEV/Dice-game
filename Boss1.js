
const dices= ["dice1.png","dice2.png","dice3.png","dice4.png","dice5.png","dice6.png"]
const dicess= ["dice1.png","dice2.png","dice3.png","dice4.png","dice5.png","dice6.png"]
random1 = Math.floor(Math.random()*6);
random2 = Math.floor(Math.random()*6);

var c = document.querySelector(".img1");
c.setAttribute("src",dices[random1]);

var c = document.querySelector(".img2");
c.setAttribute("src",dicess[random2]);
if (random1 === random2){

	document.querySelector("h1").textContent = "draw"
}
if (random1 > random2){
	document.querySelector("h1").textContent = "Player1 won"
}
if (random2 >random1) {
	document.querySelector("h1").textContent = "player2 won"
}