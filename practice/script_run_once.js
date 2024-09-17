const runOnce = function () {
  console.log("This will never run again!");
};
runOnce()
  //IIFI = Imediatly invoqued function exprission
  (function () {
    console.log("This will never run again!");
  }
)()

(() => {
  console.log("This will never run again!");
})();
