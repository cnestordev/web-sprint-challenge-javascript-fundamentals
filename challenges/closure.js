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
// that exist in outer scopes.  When a function is told to use a variable, it will search within its own scope for that variable, and if it cannot find it, it will search for it in the next outer scope, and it will continue going to outer scopes, all the way up to the global scope until it finds it.

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


