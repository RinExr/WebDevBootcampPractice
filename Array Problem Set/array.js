//var numArr = [1,2,3,4,5];

function printReverse(arr){
  // arr.forEach((arr) => {
  // arr.map((arr) => {
  //   var i = 1;
  //   console.log(numArr.length-i);
  //   i++;
  // });

  for(var i = arr.length-1;i >= 0;i--){
    console.log(arr[i]);
  }
}

printReverse([3,6,2,5]);


//**** isUniform() */

function isUniform(arr){
  var first = arr[0];
  for(var i=1;i<arr.length;i++){
    if(arr[i] !== first){
      return false;
    }
  }
  return true;
}

// var arr = [1,1,1,2];
// function isUniform(arr){
//   arr.forEach(function(arr){
//     var i = 0;
//     var result = false;
//     if(arr[i] === (arr[i + 1])){
//       result = true;
//       i++; 
//     }
//     //result = false;
//   });
//   return result;

//   for(var i=0; i < arr.length-1;i++){
//     var result = false;
// //    if(arr[arr.length-i] === arr[i]){ //unnecessarily complicated
//       if(arr[i] === arr[i + 1]){
//       result = true;
//     }
//   }
//   return result;
// }

function sumArray(numArr){
  var sum = 0;

  // numArr.forEach(function(numArr){
  //   sum += numArr;

  // });
  // return sum;

  for(var i=0;i <= numArr.length;i++){
    if (typeof numArr[i] == "number") {
      sum += numArr[i];
    }
  }
  return sum;
}

function max(arrNum){
  var max = arrNum[0];
  
  for(var i=1;i <= arrNum.length; i++){
    if (arrNum[i] > max){
      max = arrNum[i];
    }
  }
  return max;
}
