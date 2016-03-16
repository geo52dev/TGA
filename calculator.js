//NOT PASSED

(function() {
  'use strict';

/* Building a basic function library: Let's warm up with some basic functionality: sum, subtract, multiply, and divide. */

// 1. subtract function
  var subtract = function(num1, num2){
    return num1 - num2
  };
  
  // console.log(subtract(6, 3));
  // console.log(subtract(16, 3));

// 2. sum function
  var add = function(num1, num2){
    return num1 + num2;
  };

  // console.log(add(6, 3));


// 3. multiply function
  var multiply = function(num1,num2){
    return num1 * num2;
  };

  // console.log(multiply(2,10));


// 4. divide function
  var div = function(num1, num2){
    return num1 / num2;
  };

  // console.log(div(15,5));


/* Saving functions into variables: */

// 5. Reassign `meaningOfLife`

var meaningOfLife = multiply(6,7);

  // console.log(meaningOfLife);

// 6. **Reassign** `meaningOfLife`

var meaningOfLife = add(30,12);
  
  // console.log(meaningOfLife);

// 7. **Reassign `meaningOfLife`

var meaningOfLife = subtract(50,8);

  // console.log(meaningOfLife);

// 8. **Reassign** `halfLife`

var halfLife = div(meaningOfLife, 2);

  console.log(halfLife);


// BUILDING FUNCTIONS WITH FUNCTIONS:

// 9. `areaOfARectangle`
var areaOfARectangle = function(length, width){
    // calculate the length and the width using `multiply` and save it 
    // into the 'area' variable.
    var area = multiply(length, width);

    // return the area variable
    return area;
};

console.log(areaOfARectangle(3,9));

// 10. `sumPlusProduct`,
    
var sumPlusProduct = function(num1, num2){
  
  var sum = add(num1, num2);

  // return sum; {

  var product = multiply(num1, num2);

  return add(sum, product);
  
} 

console.log(sumPlusProduct(3,9));

    // Which two of the four functions will you need to solve this prompt?



// 11. `perimeterOfARectangle` 
    
    // Which two of the four functions will you need to solve this prompt?

var perimeterOfARectangle = function(length, width) {

  var sum = add(length,width);
  var product = ((sum*2) + (sum*2));

  return product;
};
console.log(perimeterOfARectangle(8,8));


// 12. `areaOfACircle`

// **HINT** JavaScript has a function that can help you do just this.
// Which of the four functions will you need to solve this prompt?

//areaOfACircle

 //Takes one parameter, radius, and uses it to calculate the radius of a circle.

var areaOfACircle = function(radius)  {
  return 2 * Math.PI * radius;
}

console.log(areaOfACircle(6));


// 13. `slopeOfAline` 
// Which of the four functions will you need to solve this prompt?


// 14. `pythagorean` 
// Which of the four functions will you need to solve this prompt?

// 15. `modulo`


// 16. Fizz Buzz:


// Tip Calculator Module: 
var tipCalculator = function(cost, service){
    
    if (service === "okay"){
      // if the service is "okay", return the finalTotal of the cost including a 15% tip.
      var tip = multiply(tip, cost);
      var finalTotal =  tip + cost
      // return the finalTotal
      return finalTotal;

    } else if (service === "good!") {

      return 
    }
};
      
// 21. `celsiusToFahrenheit`: (tempurature * 9/5) + 32

// How can you assemble your `sum`, `multiply`, and `divide` functions to solve the prompt?

// 22. `fahrenheightToCelcius`(tempurature - 32) * 5/9

// How can you assemble your `subtract`, `multiply`, and `divide` functions to solve the prompt?

// 23. Refactor your earlier functions to be built in a functional pattern if they haven't already.
  // `perimeterOfARectangle`
  // `areaOfACircle`
  // `pythagorean`

// DO NOT TOUCH THIS CODE.
var receiptMaker = function(num){
  var receipts = [];
  var serviceRating = ['good!', 'okay', 'fantastic!', 'poor :(']
  for (var i = 0; i < num; i++){
    var dinnerReceipt = {};
    var rating = serviceRating[Math.floor(Math.random() * serviceRating.length)];
    var cost = Math.floor(Math.random() * 10 + 25);
    dinnerReceipt.cost = cost;
    dinnerReceipt.serviceRating = rating;
    receipts.push(dinnerReceipt);
  };

  return receipts;
};

// DO NOT TOUCH, use this to test your `calculateFinalTotal` function.
var receiptsArray = receiptMaker(5);


// 24. calculateFinalTotal


// DO NOT TOUCH use these to pass to test your `costSplitter function.
var friends = ['Albrey', 'Bianca', 'Preston', 'Mo'];
var costOfMeal = 148.34
// 25. costSplitter


}());