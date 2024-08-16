"use strict";

///SELECTIONNER UN ELEMENT EN UTILISE la proprieté "querySelector"
//document.querySelector(".message").textContent = "vous avez gagner🏆";
//SECTIONNER LE CONTENU D'UN ELEMENT ON UTILISE
// on utilis [nom de l'element].[contenu]
//const score = document.querySelector(".score");
//score.textContent = "0";
//const secretNumber = document.querySelector(".number");
//secretNumber.textContent = "18";
// On utilise .value pour acceder aux contenu des 'INPUT'
//const guess = document.querySelector(".guess");
//guess.value = 20;

const message = document.querySelector(".message");
const check = document.querySelector(".check");
//creation d'un nombre aleatoir entre 0 ET 20
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let heightScore = 0;
//document.querySelector(".number").textContent = secretNumber;

// Evenement sur le height score
 


check.addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    message.textContent = "Pas de nombre 🙄";
  } else if (guess === secretNumber) {
    message.textContent = "🤗 Numbre Correct";
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;
    if( score > heightScore){
      heightScore = score;
      document.querySelector(".highscore").textContent = heightScore; 
    }
  } else if (guess > secretNumber) {
    if (score > 0) {
      message.textContent = "📈 Trop grand!";
      score--;
      document.querySelector(".guess").value = "";
      document.querySelector(".score").textContent = score;
    } else {
      message.textContent = "🤦‍♂️OUPS! vous avez perdu";
      document.querySelector("body").style.backgroundColor = "red";
    }

    document.querySelector(".score").textContent = score;
  } 
});
// EVENEMENT SUR LE BOUTON "AGAIN"

const again = document.querySelector(".again");
again.addEventListener("click", function () {
  document.querySelector(".guess").value = "";
  document.querySelector(".message").textContent = "Commencez à deviner...";
  document.querySelector(".score").textContent = score;
  document.querySelector('body').style.backgroundColor = '';
  document.querySelector('.number').style.width = ""
  document.querySelector(".number").textContent = '?';
  secretNumber = Math.trunc(Math.random() * 20 + 1);
   score = 20;

});
