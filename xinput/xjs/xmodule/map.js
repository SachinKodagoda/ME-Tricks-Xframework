function map(array, callback){
    var newArr = [];
    for(var i = 0; i < array.length; i++){
        newArr.push(callback(array[i], i, array));
    }
    return newArr;
}

// examples
function tripleValues(arr){
    return arr.map(function(value){
        return value * 3;
    });
}

tripleValues([1,2,3]);
 // [3,6,9]


function onlyFirstName(arr){
    return arr.map(function(val){
        return val.first;
    });
}

onlyFirstName([{first: 'Tim', last:'Garcia'}, {first:'Matt', last: 'Lane'}]);

// ['Tim', 'Matt]
