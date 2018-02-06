
// ---------------------------------------------------------
// USE OF REDUCE => 1
var arr = [1, 2, 3, 4, 5];
arr.reduce(function(accumulator, nextValue) {
  return accumulator + nextValue;
}); //15

// ---------------------------------------------------------
// USE OF REDUCE => 2
var arr = [1, 2, 3, 4, 5];
arr.reduce(function(accumulator, nextValue) {
  return accumulator + nextValue;
}, 10); //25

// ---------------------------------------------------------
// USE OF REDUCE => 3
var names = ['Tim', 'Matt', 'Colt', 'Elie'];
names.reduce(function(accumulator, nextValue) {
  return accumulator += ' ' + nextValue;
}, 'The instructors are');  // The instructors are Tim Matt Colt Elie

// ---------------------------------------------------------
// USE OF REDUCE => 4
var arr = [5,4,1,4,5];
arr.reduce(function(accumulator, nextValue){
    if(nextValue in accumulator){
        accumulator[nextValue]++;
    } else {
        accumulator[nextValue] = 1;
    }
    return accumulator;
},{});  // {1: 1, 4: 2, 5: 2}

// ---------------------------------------------------------
// USE OF REDUCE => 5
function sumOddNumbers(arr){
    return arr.reduce(function(accumulator,nextValue){
        if(nextValue % 2 !== 0){
            accumulator += nextValue;
        }
        return accumulator;
    },0);
}
sumOddNumbers([1,2,3,4,5]); // 9

// ---------------------------------------------------------
// USE OF REDUCE => 6
function createFullName(arr){
    return arr.reduce(function(accumulator, nextValue){
        accumulator.push(nextValue.first + " " + nextValue.last);
        return accumulator;
    }, []);
}
createFullName([{first:"Colt", last:"Steele"}, {first:"Matt", last:"Lane"}]); // ["Colt Steele", "Matt Lane"]

// ---------------------------------------------------------
// USE OF REDUCE => 7
function extractValue(arr, key){
    return arr.reduce(function(acc,next){
        acc.push(next[key]);
        return acc;
    },[]);
}

// ---------------------------------------------------------
// USE OF REDUCE => 8
function vowelCount(str){
    var vowels = "aeiou";
    return str.toLowerCase().split('').reduce(function(acc,next){
        if(vowels.indexOf(next) !== -1){
            if(acc[next]){
                acc[next]++;
            } else {
                acc[next] = 1;
            }
        }
        return acc;
    }, {});
}

// ---------------------------------------------------------
// USE OF REDUCE => 9
function addKeyAndValue(arr, key, value){
    return arr.reduce(function(acc,next,idx){
        acc[idx][key] = value;
        return acc;
    },arr);
}

// ---------------------------------------------------------
// USE OF REDUCE => 10
function partition(arr, callback){
    return arr.reduce(function(acc,next){
        if(callback(next)){
            acc[0].push(next);
        } else {
            acc[1].push(next);
        }
        return acc;
    }, [[],[]]);
}
