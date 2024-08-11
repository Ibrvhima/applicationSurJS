"use strict"
//EXERCICE DE BASE SUR LES ARRAYS

//Declaration du tableau "colors"
const colors =["red", "green", "blue"];
console.log(colors);

//ajout de la couleur "yellow" à la fin du tableau

colors.push("yellow");
console.log(colors);

//remplaçons grenne par purple

colors[1] = "purple";
console.log(colors);

//retirons le dernier element du tableau

colors.pop();
console.log(colors);

//affichage du premier et dernier element de l'array

console.log(colors[0] +" et "+ colors[colors.length -1]);
