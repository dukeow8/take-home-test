//Write a function that returns the string "something" joined with a space " " and the given argument a.

/*
   
*/


function addition(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
      return "didn't pass two numbers.";
    }
    return a + b;
  }