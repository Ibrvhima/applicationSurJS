//N°1 somme des nombres

let somme = 0;
for (let i = 1; i <= 100; i++) {
  somme += i;
}
console.log(somme);


//N°2 Affichage des element d'un tableau

//création du tableau
const tableau = ["pomme", "mangue", "orange", "banana", "papaye"];

//affichage des elements

for (let i = 0; i < tableau.length; i++) {
  console.log(` ${tableau[i]}`);
}

//N°4 Generer une table de multiplication

let number = 7;
for (let i = 1; i <= 10; i++) {
   console.log(`${number} x ${i} = ${number * i}`);
}


//N°3 Compter les voyelle dans une chaîne

const string = "bonjour le monde";
