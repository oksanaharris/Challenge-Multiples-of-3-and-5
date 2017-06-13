/**
 * sumOfAMultiple() sums of the multiples of 3 and 5 for any number passed in
 * @param  {Number} n Number that is to be used for calculating multiples up to that Number
 * @return {Number}
 */

// function sumOfAMultiple(n){

exports.sumOfAMultiple = function( n ) {
  var sum = 0;

  var i = 1;
  var j = 1;
  
  // var product3 = 3;
  // var product5 = 5;

  while (3*i < n){
    // product3 = 3 * i;
    sum += 3*i;
    // console.log("i: " + i + ", multiple: " + 3*i + ", sum: " + sum);
    i++;
  }

  while (5*j < n){
    // product5 = 5 * j;
    if (5*j % 3 !== 0){
      sum += 5*j;
      // console.log("j: " + j + ", multiple: " + 5*j + ", sum: " + sum);
    }
    j++;
  }

  return sum;
};

// console.log("final sum: " + sumOfAMultiple(10000));
