const hero1 = { name: 'Flash', speed: 100 };
const hero2 = { strength: 80, agility: 50 };

// Utilise l'opérateur spread pour fusionner les deux héros en un seul
const mergedHero = {...hero1, ...hero2} // TA SOLUTION ICI

console.log(mergedHero);



