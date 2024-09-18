//une closure est un phenomene qui permet à une fonction de se souvenir de toutes les variable qui sont néee au meme endroit qu'elle
//C'est à dire grace à la closure une fonction ne perd pas la connexion avec les variable qui existe dans sont endroit de naissance

const securBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = securBooking();
booker();
booker();
booker();

let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};
h();
f()


//exemple 2
const boardPassenger = function(n, waitTime){
  const perGroup = Math.floor(n/3)
  setTimeout (function(){
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 group, each with ${perGroup} passengers`);
  }, waitTime * 1000)
console.log(`Will start boarding in ${waitTime} sec`);
}

boardPassenger(30,3)
