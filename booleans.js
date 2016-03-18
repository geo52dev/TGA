/*! strings v0.0.0 - MIT license */
'use strict';

//////////////////////////////////
// YOUR CODE BELOW, VARIABLES ARE NOT ALLOWED FOR ANY PROBLEMS
// THE POINT HERE IS TO IMPROVE YOUR UNDERSTANDING OF BOOLEANS AS A RAW DATA TYPE
//////////////////////////////////

var booleanChecker = function () {
   // return any boolean value
   return 2 === 2;
}

var numberEquality = function () {
  // Fix return to return true
    // conssole.log(4234 === 07080);
  return 4234 !== 07080
}

var stringEquality = function () {
  // Fix the strings so the functions returns true
  return 'guilty feet' === 'guilty feet';
}

var typeChecker = function () {
  // Fix the return statement to return true
  return typeof 435435345 === 'number';
}

var booleanFalsy = function () {
  // Change the values in the parentheses so else statement runs  
  if (2 === 3) {
    return 'I\'m not supposed to be here!';
  } else {
    return 'Here I am, send me an angel!';
  }
}

var booleanTruthy = function () {
  // Look up the 'negation' operator and apply it to make the body 
  //of the if statement pass
  if (!null) {
    return 'This is not so null afterall';
  }
}
