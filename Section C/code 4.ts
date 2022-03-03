//function that takes two numbers as arguments and returns their sum.

/*
   
*/


function addition(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
      return "Sorry you didn't pass two numbers.";
    }
    return a + b;
  }