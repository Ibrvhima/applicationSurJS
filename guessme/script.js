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

//creation d'un nombre aleatoir entre 0 ET 20

const number = Math.trunc(Math.random() * 20 + 1);
console.log(number);
document.querySelector(".number").textContent = number;


const message = document.querySelector(".message");
const check = document.querySelector(".check");
check.addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess && guess !== 0)
    document.querySelector(".message").textContent = "VOUS AVEZ JUST🎈";
});

const again = document.querySelector(".again");
again.addEventListener("click", function () {
  document.querySelector(".message").textContent = "Commencez à deviner...";
  document.querySelector(".guess").value = "";
});
