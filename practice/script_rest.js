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

//BOUCLE FOR OF
const menu = [...heroescoffee.mainMenu, ...heroescoffee.startMenu]
for(const item of menu)
  console.log(item);
 for(const item of menu.entries()){
  console.log(item);

}

const students =[
  {nameStudent:"ousmane", age: 14},
  {nameStudent:"fatou", age: 18},
  {nameStudent:"oumar", age: 17},
  {nameStudent:"Mamadou", age: 20},
  {nameStudent:"Amadou", age: 14},
]
for(const items of students.entries()){
  console.log(items);
}



