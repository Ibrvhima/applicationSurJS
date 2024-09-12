"use strict";
const match = {
  equipe1: "FC Barcelone",
  equipe2: "Real Madrid",
  joueurs: [
    [
      "Ter Stegen",
      "Dest",
      "Pique",
      "Araujo",
      "Alba",
      "Busquets",
      "De Jong",
      "Pedri",
      "Dembele",
      "Depay",
      "Fati",
    ],
    [
      "Courtois",
      "Carvajal",
      "Militao",
      "Alaba",
      "Mendy",
      "Casemiro",
      "Kroos",
      "Modric",
      "Vinicius",
      "Benzema",
      "Rodrygo",
    ],
  ],
  score: "3:2",
  scorers: ["Fati", "Depay", "Fati", "Benzema", "Vinicius"],
  date: "12 septembte 2024",
  cotes: {
    equipe1: 1.5,
    x: 3.75,
    equipe2: 5.0,
  },
};

//Parcours du tableau scorers
match.scorers.forEach((scorer, index) => {
  console.log(`But ${index+1} : ${scorer}`);
});

//Calcul de la moyenne des cotes
const cotes = Object.values(match.cotes);
const averagecotes =
  cotes.reduce((sum, cotes) => sum + cotes, 0) / cotes.length;
console.log(`Moyenne des cotes : ${averagecotes.toFixed(2)}`);

//Affichage des cotes
console.log(`Cote de victoire du ${match.equipe1} : ${match.cotes.equipe1}`);
console.log(`Cote du match nul : ${match.cotes.x}`);
console.log(`Cote de victoire du ${match.equipe2} : ${match.cotes.equipe2}`);

//Création de l'objet buteurs
const buteurs = {};
match.scorers.forEach((scorer) => {
  buteurs[scorer] = (buteurs[scorer] || 0) + 1;
});
console.log(buteurs);

//Propriété calculée pour l'équipe favorite
const faveurTeam = function (equipe1, equipe2,x) {
  return match.cotes.equipe1 < match.cotes.equipe2 ? match.equipe1 : match.equipe2;
};

console.log(`L'équipe favorite est : ${faveurTeam(match.cotes.equipe1, match.cotes.equipe2equipe2)}`);
