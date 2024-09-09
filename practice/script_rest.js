"use strict";
const heroescoffee = {
  name: "Heroes Coffee",
  location: "Kipe Plaza, Ratoma Conakry Guinee",
  categories: ["Americaine", "Indienne", "Italienne", "Guineenne"],
  startMenu: ["Salade cesar", "Nem", "Soupe au poisson"],
  mainMenu: ["Pizza Americaine", "Burger Heroes", "Maffe Poulet"],
};
//Operateur spread
const heroescoffeeMatam = {...heroescoffee}
console.log(heroescoffeeMatam);

//The rest pattern
const array =[1,2,3,4,5,8]
array