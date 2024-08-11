"use strict"

//calcul des moyennes

const  scores =[85, 93, 77, 98, 92]
console.log(scores);
 const averages = (scores[0] +  scores[1] + scores[2] +  scores[3] + scores[4] ) / scores.length
 console.log(averages);

 scores.sort();
 let heigthAverage =  scores[scores.length -1];
 let lowerAverage = scores[0];

 

 console.log(`le plus petit element de mon array est: ${lowerAverage}`);

 console.log(`le plus petit element de mon array est: ${heigthAverage}`);