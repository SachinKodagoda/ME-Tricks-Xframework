// no similar values then it returning -1(not truthy values)

function findIndex(arr, callback) {
  for (var i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      return i;
    }
  }
  return -1;
}

// For Each Function
function forEach(arr, callback) {
  for (var i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
}

// Stack

function upperCaseFirst(word) {
  return word[0].toUpperCase() + word.slice(1);
}

function upperCaseWords(sentence) {
  var words = sentence.split(" ");
  for (var i = 0; i < words.length; i++) {
    words[i] = upperCaseFirst(words[i]);
  }
  return words.join(" ");
}

upperCaseWords("sachin kodagoda");

// setTimeOut
var timerId = setTimeout(function() {
  console.log("HI");
}, 30000);

setTimeout(function() {
  console.log("Sachin", timerId);
  clearTimeout(timerId);
}, 2000);

// setInterval it will invoke the function repeatively

var num = 0;
setInterval(function() {
  num++;
  console.log("num:", num);
}, 1000);

// cancelling the setInterval
var num = 0;
var intervalId = setInterval(function() {
  num++;
  console.log("num:", num);
  if (num === 3) {
    clearInterval(intervalId);
  }
}, 1000);

// countDown Function
function countDown(seconds) {
  var intervalId = setInterval(function() {
    seconds--;
    if (seconds > 0) {
      console.log("Timer: ", seconds);
    } else {
      console.log("Time is out!");
      clearInterval(intervalId);
    }
  }, 1000);
}

countDown(4);

// Stack and Queue

function square(n) {
  return n * n;
}
setTimeout(function() {
  console.log("callback", "queue");
}, 0);
console.log(square(2));

// 0 will execute when the main function is done executing
setTimeout(function() {
  console.log("Hello from the timeout");
}, 0);
for (var i = 0; i < 1000000000; i++) {
  var x = i * 2;
}
console.log("Done with loop");

// promise resolve

var p1 = new Promise(function(resolve, reject) {
   resolve([1,2,3,4]);
 });

 p1.then(function(arr) {
   console.log("Promised data:", arr);
 });


// promise reject
 var p1 = new Promise(function(resolve, reject) {
  reject("ERROR");
});

p1.then(function(data) {
  console.log("Promise p1 resolved with data:", data);
}).catch(function(data) {
  console.log("Promise p1 was rejected with data:", data);
});

// promise resolve and reject
var p1 = new Promise(function(resolve, reject) {
   var num = Math.random();
   if (num < 0.5) {
     resolve(num);
   } else {
     reject(num);
   }
 });

 p1.then(function(result) {
   console.log("Success:", result);
 }).catch(function(error) {
   console.log("Error:", error);
 });

 // setTimeout with promise
 var promise = new Promise(function(resolve, reject) {
  setTimeout(function() {
    var randomInt = Math.floor(Math.random() * 10);
    resolve(randomInt);
  }, 4000);
});

promise.then(function(data) {
  console.log("Random int passed to resolve:",
              data);
});

// promise chaining (solution for callback inside a callback)
var promise = new Promise(function(resolve, reject) {
  setTimeout(function() {
    randomInt = Math.floor(Math.random() * 10);
    resolve(randomInt);
  }, 500);
});

promise.then(function(data) {
  console.log("Random int passed to resolve:",
               data);
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(Math.floor(Math.random() * 10));
    }, 3000);
  });
}).then(function(data) {
  console.log("Second random int passed to resolve:",
               data);
});

// Another Promise Examples

var counter = 0;
function incCounter() {
  counter++;
  console.log("Counter:", counter);
}

function runLater(callback, timeInMs) {
  var p = new Promise(function(resolve, reject) {
    setTimeout(function() {
      var res = callback();
      resolve(res);
    }, timeInMs);
  });
  return p;
}

runLater(incCounter, 1000).then(function() {
  return runLater(incCounter, 2000);
}).then(function() {
  return runLater(incCounter, 3000);
}).then(function() {
  // final .then not necessary
});
