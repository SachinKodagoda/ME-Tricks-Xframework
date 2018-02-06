
// ---------------------------------------------------------
// USE OF SOME => 1
function hasOddNumber(arr){
  return arr.some(function(val){
    return val % 2 !== 0;
  });
}

// ---------------------------------------------------------
// USE OF SOME => 2
function hasAZero(num){
  return num.toString().split('').some(function(val){
    return val === '0';
  });
}
// ---------------------------------------------------------
