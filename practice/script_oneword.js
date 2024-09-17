const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toLowerCase(), ...others].join(" ");
};

const transformer = function (str, fnTranform) {
  return fnTranform(str);
};

const ex1 = transformer("JavaScript is the best langage !", upperFirstWord);
const ex2 = transformer("JavaScript is the best langage !", oneWord);

console.log(ex1);

const greet = greeting => {
  return  name => {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet("ciao");
greeterHey("fatoumata")




