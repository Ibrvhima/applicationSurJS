"use strict";

//cet exercice est un programme informatique  qui nous permet de faire une gestion de recettes

//declaration du tableau des recette
const tabRecettes = [
  {
    title: "Omelette",
    ingrediants: ["eggs", "oil", "tomato", "oignons"],
    instruction: [
      "chauffer l'huile",
      "casser les oeufs",
      "battre les oeufs",
      "mettre sur l'huile",
    ],
    time: 7,
    difficult: "very easy",
  },
  {
    title: "Pastas",
    ingrediants: ["pasta", "oil", "tomato", "oignons"],
    instruction: [
      "bouillir les spaghetis",
      "chauffer l'huile",
      "mettre sur l'huile",
    ],
    time: 10,
    difficult: "easy",
  },
  {
    title: "rice",
    ingrediants: ["rice", "water", "pot", "fire"],
    instruction: [
      "laver le riz",
      "metre de l'eau dans la marmite",
      "ajouter le riz dans la marmite ",
      "mettre la marmite sur le feu",
    ],
    time: 15,
    difficult: "easy",
  },
];

//CREATION DE LA FONCTION AJOUTER UNE RECETTE

function addRecette(title, ingrediants, instruction, time, difficult) {
  const newRecette = tabRecettes.find(
    (newRecette) => newRecette.title === title
  );
  if (newRecette) {
    console.log(`la recette "${title}" exist deja`);
  } else {
    tabRecettes.push({
      title: title,
      ingrediants: ingrediants,
      instruction: instruction,
      time: time,
      difficult: difficult,
    });
  }
}

//CREATION DE LA FONCTION QUI VA NOUS PERMET DE RECHERCHER UN ELEMENT DANS UN TAB

function searchRecette(recetteTitle, ingrediants) {
  const search = tabRecettes.find(
    (search = ingrediants) => search.title === recetteTitle
  );
  if (search) {
    const index = tabRecettes.indexOf(search);
    console.log(
      `la recette recherchée est ${recetteTitle} et voici sa prepartion ${tabRecettes[index]}`
    );
  } else {
    console.log(`Recette indisponnible`);
  }
}



//CREATION DE LA FONCTION QUI PERMET DE MODIFIER UNE RECETTE

function updateRecette(title, ingrediants, instruction, time, difficult) {
  const recette = tabRecettes.find((recette) => recette.title) === title;
  if (recette) {
    const index = tabRecettes.indexOf(recette);
    tabRecettes.splice();
    console.log(recette[index]);
  } else {
    `la recette ${title} est introuvalbe`;
  }
}

//CREATION DE LA FUNCION QUI PERMET DE RETIRER UNE RECETTE

function removeRecette(recetteTitle) {
  const recette = tabRecettes.find((recette) => recette.title) === recetteTitle;
  if (recette) {
    const index = tabRecettes.indexOf(recette);
    tabRecettes.splice(index, 1);
    console.log(`la recette ${recetteTitle} a été retirer avec success`);
  } else {
    console.log(`la recette ${recetteTitle} est indisponnible`);
  }
}

//CREATION DE LA FONCTION QUI NOUS PERMET DE FILTER LES RECETTE

function filterRecette(time) {
  const recette = tabRecettes.find((recette) => recette.time === time);
  if (recette) {
    console.log("****************************************");
    console.log(`les recettes qui ont une durée de ${time}min sont ${recette}`);
    console.log("****************************************");
  } else {
    console.log("a nothing recette");
  }
}

function filterRecette(difficult) {
  const recette = tabRecettes.find((recette) => recette.difficult === difficult);
  if (recette) {
    console.log("***********************************************");
    console.log(`les recettes qui ont une difficulté de préparation ${difficult} sont: ${recette}`);
    console.log("***********************************************");
  } else {
    console.log("a nothing recette");
  }
}
