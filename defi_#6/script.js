"use strict";

const calculaverage = (score1, score2, score3) => {
  return (score1 + score2 + score3) / 3;
};
/*****************************************Les donneés 1 ************************************************* */
const avgElephants1 = calculaverage(100, 100, 100);
const avgPentheres1 = calculaverage(65, 34, 49);

/*****************************************Les données 2 ************************************************ */
const avgElephants2 = calculaverage(85, 54, 41);
const avgPentheres2 = calculaverage(23, 34, 27);

const checkWiner = (avgElephants1, avgPentheres1) => {
  if (avgElephants1 >= avgPentheres1 * 2) {
    console.log(
      `les Elephant gagnent (${avgElephants1} contre ${avgPentheres1.toFixed(2)})`
    );
  } else if (avgPentheres1 >= avgElephants1 * 2) {
    console.log(
      `Les penthères gagnent(${avgPentheres1}contre ${avgElephants1})`
    );
  } else {
    console.log(`Aucune équipe ne gagne`);
  }
};


console.log(checkWiner(avgElephants1, avgPentheres1));
