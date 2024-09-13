const airline = "air Guinée";

const plane = "A320";

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log(plane[3]);

console.log(plane.length);

//Methode appliqué sur les string

//<<IndexOf>> pour recuperer la position d'un caractère dans un string
console.log(plane.indexOf("3"));
console.log(airline.indexOf("Guinée"));

//********************************Application******************* */
//### Exercice 1 : Extraction simple (Débutant)

//Écrivez un programme qui prend une chaîne de caractères et affiche le premier mot de cette chaîne.
//Utilisez `slice()` et `indexOf()` pour extraire le premier mot de la chaîne.

const school = "Nimba Hub";
console.log(school.indexOf());
console.log(school.slice(0, 5));

//Exercice 2 : Extraction avec fin dynamique (Intermédiaire)

//Créez un programme qui extrait le dernier mot d'une chaîne, sans connaître sa longueur au préalable.
//Utilisez `slice()` et `lastIndexOf()` pour extraire le dernier mot.
console.log(school.slice(6));


//### Exercice 3 : Vérification d'une position (Avancé)

//Écrivez une fonction `checkMiddleSeat(seat)` qui prend en entrée un numéro de siège d'avion (par exemple '23B') et affiche si le siège est un siège du milieu (B ou E).

//Utilisez `slice()` pour extraire la dernière lettre et vérifiez si c'est un 'B' ou un 'E'.

function checkMiddleSeat(seat){
         const checkeCaract = seat.slice(-1)
         if (checkeCaract === "E" || checkeCaract === "B"){
                  console.log("IS A MIDDEL SEAT");
         }
         else{
                  console.log("IS NOT A MIDDEL SEAT");
         }
 
}
checkMiddleSeat("23E")