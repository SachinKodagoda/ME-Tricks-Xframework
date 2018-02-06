// FUNCTION IMPLEMENTATION
// -----------------------
function every(array, callback){
    for(var i = 0; i < array.length; i++){
        if(callback(array[i], i, array) === false){
            return false;
        }
    }
    return true;
}
// ---------------------------------------------------------
// USE OF EVERY => 1
var arr = [-1,-2,-3];
arr.every(function(value, index, array){
    return value < 0;
}); // true
// ---------------------------------------------------------
// USE OF EVERY => 2
function allLowerCase(str){
    return str.split('').every(function(value){
        return value === value.toLowerCase();
    });
}
allLowerCase('this is really nice'); // true
allLowerCase('this is Really nice'); // false
// ---------------------------------------------------------
// USE OF EVERY => 3
function allArrays(arr){
    return arr.every(Array.isArray);
}
allArrays([[1], [2], [3,4]]); // true
allArrays([[1], [2], {}]); // false
// ---------------------------------------------------------
// USE OF EVERY => 4
function hasOnlyOddNumbers(arr){
  return arr.every(function(val){
    return val % 2 !== 0;
  });
}
// ---------------------------------------------------------
// USE OF EVERY => 5
function hasNoDuplicates(arr){
  return arr.every(function(val){
    return arr.indexOf(val) === arr.lastIndexOf(val);
  });
}
// ---------------------------------------------------------
// USE OF EVERY => 6
function hasCertainKey(arr, key){
  return arr.every(function(val){
    return key in val;
  });
}
// ---------------------------------------------------------
// USE OF EVERY => 7
function hasCertainValue(arr, key, searchValue){
  return arr.every(function(val){
    return val[key] === searchValue;
  });
}
// ---------------------------------------------------------
