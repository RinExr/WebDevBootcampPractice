// function isEven(num){
//   if(num % 2 === 0){
//     return true;
//   }
//   return false;
// }

//since num % 2 === 0 is a boolean statement , the code below is a shorter way to solve the problem

function isEven(num){
  return num % 2 === 0;
}

function factorial(num){
  var result = 1;
  for(var i=2;i <= num;i++){
    result *= i;  //same as result = result * i;
  }
  return result;
}
//we have to check for 0 with the solution below 
// function factorial(num) {
//   if(num ===0){      
//    return 1;
//}
//   var result = num;
//   for (var i = num-1; i >= 1; i--) {
//     result *= i;  
//   }
//   return result;
// }

//the solution below is my first solution

// function kebabToSnake(str) {

//   for(i=0; i <= str.length; i++){
//     if(str.charAt(i) === "-"){
//       var res = str.replace(/-/g, "_"); // /-/g -> perform global replacement , /gi -> perform a global , case-insensitive 
//     }
//   }
//   return res;
// }

//refactoring of the first solution to remove redundant code

function kebabToSnake(str) {
  var res = str.replace(/-/g, "_");
  return res;
}