const tab = [1, 2, 3, 6, 7];
for (let i = 0; i < tab.length; i++) {
  tab[i];
}
console.log(tab);

//const types =[];
//let i;

//copier les elements du premier tableau dans le second

const year = [1991, 2007, 1969, 2012];
const curentYear = 2024;
const age = [];

function calculAge(birthYear) {
  return curentYear - birthYear;
}
for (let i = 0; i < year.length; i++) {
  age.push(calculAge(year[i]));
}
console.log(age);

//Retour de l'inverse d'un tableau

const table = [1, 2, 3, 4, 5, 6, 7];
for (let i = table.length - 1; i >= 0; i--) {
  console.log(table[i]);
}

//Imbrication de boucle

for (let i = 1; i <= 5; i++) {
         for (let j = 1; j <=5; j++) {
                  console.log(`la repert${j} de l'exercice${i}`);
                  
         }
         console.log(`la repet${i} de l'exercice${i}`);
         
}



