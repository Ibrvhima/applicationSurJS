//### **Exercice 2 : Accéder aux variables externes**

//Créez une closure qui retient l'accès à une variable de type chaîne de caractères de la portée externe et la concatène avec un argument donné.

//- Fonction : `createGreeting()`
//- Variables : `name`, `greeting`

function createGreeting() {
  const name = "Amad ly";
function teacher(greeting) {
    console.log(`${this.teacher} ${name}`);
  }
}


const greet = greeting => {
         return  name => {
           console.log(`${greeting} ${name}`);
         };
       };
       
       const greeterHey = greet("ciao");
       greeterHey("fatoumata")