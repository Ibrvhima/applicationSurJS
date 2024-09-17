const airGuinee = {
  airline: "Air Guinea",
  iatacoto: "GA",
  bookings: [],
  book(flightNum, name) {
    console.log(`${name} booked a seat on ${this.iatacoto}${flightNum}`);
    this.bookings.push({
      flight: this.iatacoto + flightNum,
      name: name,
    });
  },
};

airGuinee.book(235, "Amadou Ly");
airGuinee.book(237, "Ibrahima Diallo");

nimbaAsia = {
  airline: "Nimba Asia",
  iatacoto: "NA",
  booking: [],
};


//Call
const book = airGuinee.book;
book.call(nimbaAsia, 123, "Idiatou Toure");

//Apply
book.apply(nimbaAsia,[123, "youla"])