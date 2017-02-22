// Write a function named greatThanThree that takes in two numbers and returns true if they are both 
// greater than 3 and false if not.

function greatThanThree(numOne, numTwo) {
    if (numOne > 3 && numTwo > 3) {
        return true;
    } else {
        return false;
    }
}

greatThanThree(4, 5);

// Write a function named aOrB that takes in a letter and if it is a or b then return true otherwise 
// return false.

function aOrB(letter) {
    if (letter == a) {
        return true;
    } else {
        return false;
    };
};

aOrB(a)

// Write a function named greatThanTwo that returns true if the number is 2 and false otherwise

function greatThanTwo(numb) {
    if (numb === 2) {
        return true;
    } else {
        return false;
    }
}

greatThanTwo(3)

// Write a function named printEvenBetween that takes in two numbers and will return an array of all 
// the even numbers between the given two numbers.

function printEvenBetween(numOne, numTwo) {
    var numbs = [];

    for (var i = numOne + 1; i < numTwo; i++) {
        numbs.push(i);
        if (numbs[i] % 2 == 0) {
            return numbs;
        }
    }

}

// Write a function named printBetween that takes in two arguments. Assume they are integers. 
// This function will return an array of the numbers between those two arguments.

function printBetween(a, b) {
  var nums = [];
  
  for (var i = a+1; i < b; i++) {
    nums.push(i);
  }
  return nums;
}

// Write a function named fib that takes an argument n. Assume that n is a number. 
// And the function returns an array of n numbers of the fibonacci sequence.

