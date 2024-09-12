"use strict";
//ici on use set pour gerer qu'une repetion ne se produit dans une structure de donne
const orderSet = new Set([
  "pizza", "pasta", "poulet", "pizza", "garba", "athieké"
]);
console.log(orderSet);
//Affiche la taille d'un set on use ".size"
console.log(orderSet.size);

//verifie si un element existe dans un set
console.log(orderSet.has("pizza"));
console.log(orderSet.has("rice"));

//Ajouter un element dans un set
orderSet.add("soupe")
console.log(orderSet);

//Supprimer un element dans un set
orderSet.delete("garba")
console.log(orderSet);

//iteration (parcourir avec for of) sur les set
for(const order of orderSet)
         console.log(order);

//vider un set
orderSet.clear()
console.log(orderSet);


//convertir un tableau en un set
//notre tableau
let staff =["waiter", "chef", "manager","delivery gay"]
const staffSet = new Set(staff)
console.log(staff);
console.log(staffSet);


//convertir un set en un  tableau
//notre tableau



