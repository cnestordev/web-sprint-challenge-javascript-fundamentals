// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 
// The reason why the nested function can access the 'internal' variable is due to closure.  The nested function has closure, which gives it access to the functions
//that exists in outter scopes.

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function summation(number) {
  let finalNumber = 0
  function counter() {
    while (number > 0) {
      finalNumber += number--
    }
    return finalNumber
  }
  return counter()
}


