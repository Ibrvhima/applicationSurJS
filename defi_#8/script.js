"use strict";

//N°1 parcourir un tableau à l'inverse

const jours = [
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
  "Dimanche",
];

for (let i = jours.length - 1; i >= 0; i--) {
  console.log(jours[i]);
}

//N°2 Produit des matrices

const matriceA = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const matriceB = [
  [9, 8, 7],
  [6, 5, 4],
  [3, 2, 1],
];
const prodMatrice = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    for (let pcl = 0; pcl < 3; pcl++)
      prodMatrice[i][j] = matriceA[i][j] * matriceB[i][j];
  }
}
console.log(prodMatrice);

//N°4 Calcul du Produit de Deux Tableaux

const tableau1 = [2, 4, 6];
const tableau2 = [1, 3, 5];
const produitTableaux = [];

for (let i = 0; i <= tableau1.length; i++) {
  produitTableaux[i] = tableau1[i] * tableau2[i];
}
console.log(produitTableaux);
