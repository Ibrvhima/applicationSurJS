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
  odds: {
    equipe1: 1.5,
    x: 3.75,
    equipe2: 5.0,
  },

  // Méthode pour afficher les buteurs
  afficherScorers() {
    match.scorers.forEach((scorer, index) => {
      console.log(`But ${index + 1} : ${scorer}`);
    });
  },
};

// 1. Parcours du tableau scorers
match.scorers.forEach((scorer, index) => {
  console.log(`But ${index + 1} : ${scorer}`);
});

