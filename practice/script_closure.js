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

g();
f();
h();
f()
