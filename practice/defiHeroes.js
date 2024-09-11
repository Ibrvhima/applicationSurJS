const hero1 = { name: 'Flash', speed: 100 };
const hero2 = { strength: 80, agility: 50 };

// Utilise l'opérateur spread pour fusionner les deux héros en un seul
const mergedHero = {...hero1, ...hero2} // TA SOLUTION ICI

console.log(mergedHero);



const heroes = ['IronMan', 'Thor', 'Hulk', 'SpiderMan'];

// Utilise rest pour extraire le leader et l'équipe de soutien
const [leader, ...sepportTeam] = heroes// TA SOLUTION ICI

console.log(leader); // Résultat attendu : IronMan
console.log(supportTeam); // Résultat attendu : ['Thor', 'Hulk', 'SpiderMan']
