"use Strict";

const bookings = [];

const createBooking = function (flightNum, numPassenger, price) {
  const booking = {
    flightNum,
    numPassenger,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking("A-777", "ID0604", "$400");

const flight = "B-707";
const amad = {
  namePassenger: "Amad Ly",
  passeport: 2345678902,
};

const checkIn = function (flightNum, passenger) {
  (flightNum = "BC-238"),
    (passenger.namePassenger = "Mr. " + passenger.namePassenger);
};

checkIn(flight, amad);
console.log(flight);
console.log(amad);

const newPasseport = function (person) {
  person.passeport = Math.trunc(Math.random() * 100_000_000);
};
newPasseport(amad)
checkIn(flight, amad)
