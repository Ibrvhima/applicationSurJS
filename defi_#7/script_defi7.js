"use strict";

//création du tableau

const inventory = [
  {
    name: "apple",
    price: 3.2,
    quantity: 10,
  },
  {
    name: "orange",
    price: 2.2,
    quantity: 15,
  },
  {
    name: "mango",
    price: 6.2,
    quantity: 50,
  },
];

//Création de la fonction permenttant d'ajouter des ariticles

function addItem(name, price, quantity) {
  const article = inventory((articlName) => articlName.name === name);
  if (article) {
    console.log(`This article is always exist`);
    if (article.quantity <= quantity) {
      article.quantity += quantity;
      console.log(`The quantity of ${article.name} is update`);
    } else {
      console.log(
        `It's imposible to updating cause the new quantity is lower than the ancient`
      );
    }
  } else {
    inventory.push({ name: name, price: price, quantity: quantity });
    console.log(`Succeful adding`);
  }
}

function checkAvailability(itemsName, resquestedQuantity) {
  const article = inventory.find((articlName) => articlName.name === itemsName);
  const resultat = article
    ? article.quantity >= resquestedQuantity
      ? "Available"
      : "Insuffissant"
    : "Not find";
  console.log(`The aritcle ${itemsName} is ${resultat}`);
  return resultat;
}

function calculateTotalPrice(itemsName, resquestedQuantity) {
  const quantity = Number(resquestedQuantity);
  if (isNaN(quantity) || quantity >= 0) {
    console.log(`The quantity of ${resquestedQuantity} is invalid`);
  } else {
    const article = inventory.find(
      (articlName) => articlName.name === itemsName
    );
    const checking = checkAvailability(itemsName, resquestedQuantity);
    if (checking === "Available") {
      console.log(`The toltal amount of ${itemsName} is $${article.quantity * article.price}`);
    }else if(checking === "Insuffissant"){
         console.log(`Insuffisant Stock for the article ${itemsName}`);
    }
    else{
         console.log(`The article ${itemsName} in not find`);
    }
  }
  
}

function removeItem(itemName, quantity){
         const article = inventory.find(articlName => article.name === itemName)
         if(!article){
             console.log(`the aritcle ${itemName} does not exist `)
         }else if( article.quantity >= quantity){
             article.quantity -= quantity
             console.log(`the quantity of ${itemName} has been reduced  to ${quantity} there are now some left ${article.quantity}`)
         }else{
             console.log(`Impossible to reduce the quantity of  ${article.name} because the quantity to be reduced is greater than the existing: ${quantity} > ${article.quantity}`)
         }
     }
     
     
       removeItem('orange', 2)
     
     
     
     calculateTotalPrice("orange", "23")
      checkAvailability("o", 3)
     addItem("avocat", 2.5, 12)
     inventory()
