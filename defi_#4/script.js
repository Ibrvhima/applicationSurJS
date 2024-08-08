/**********************ETAPE1******************** */

function printAmount() {
	console.log( amount.toFixed( 2 ) );
}

var amount = 99.99;

printAmount(); // Si l'on appele printAmount() sans passer d'argument, cela produira une erreur car la fonction attend un paramètre amount. Et ne peut donc pas appeler toFixed() seulement

amount = amount * 2;

printAmount(); // Si l'ont declare amount comme  une variable  avec une valeur initiale, la fonction affichera la valeur arrondie à deux décimales après avoir doublé amount.


/*************************Etape2 ************** */
function printAmount(amt) {
	console.log( amt); 
}
//La fonction printAmount prend un paramètre amt et l'utilise pour appeler la fonction formatAmount qui retourne une chaîne formatée. Ensuite, printAmount affiche cette chaîne.

function formatAmount() {
	return "$" + amount.toFixed( 2 );
}
//La fonction formatAmount retourne une chaîne représentant la valeur de amt arrondie à deux décimales.  Because La méthode toFixed(2) formate un nombre en une chaîne avec deux chiffres après la virgule.

var amount = 99.99;

printAmount2( amount * 2 );

amount = formatAmount();
console.log( amount );





//***************************Etape 3 *********** */

const TAX_RATE = 0.08; //la valeur de la tax est de 0.08 soit 8%



function calculateFinalPurchaseAmount(amt) {
	
	amt = amt + (amt * TAX_RATE);

	return amt;
}
//La fonction <<alculateFinalPurchaseAmount>> ajoute à amt le produit de amount par TAX_RATE. Cela revient à augmenter amount de 8%.

var amount = 99.99;

amount = calculateFinalPurchaseAmount( amount );

console.log( amount.toFixed( 2 ) );	



/****************************************ETAPE4 ******************************************** */

function one() {
	var a = 3;
	console.log(a);
}

function two() {
	var a = 6;
	console.log(a);
}
//Les variables a dans one et two n'interfèrent pas l'une avec l'autre parce qu'elles sont définies dans des portées locales différentes. Chaque variable a est locale à sa propre fonction.

one(); //  ici on appel la fonction et cela nous Affiche "1"
two(); // ici on appel la fonction et cela nous Affiche "2"




function outer() {
	var a = 3;

	function inner() {
		var b = 5;
		console.log(a + b); // 
	}

	inner(); //Le code à l'intérieur de inner peut accéder à a et b parce que inner est une fonction imbriquée. Les fonctions imbriquées ont accès aux variables définies dans leur portée parent.

	console.log(a); // Ici on aura la valeur de a qui est égal à 3
}

outer(); //Le code dans outer ne peut accéder qu'à a parce que b est défini dans la portée locale de inner et n'est pas accessible en dehors de inner.

