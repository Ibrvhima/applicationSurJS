// STRUCTURE DE CONDITION IF and ELSE

let note = 17;

let observation;

if (note >= 16) {
  observation = "Excelent";
}

if (note >= 14 && note <= 15) {
  observation = "Bien";
}

if (note >= 10 && note <= 11) {
  observation = "Passable";
}

if (note < 10) {
  observation = "Insuffisant";
}

console.log(`La note est ${note} et la mention est ${observation}`);
