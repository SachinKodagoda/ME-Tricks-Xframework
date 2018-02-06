var person = {
    firstName: "Colt",
    sayHi: function(){
        return "Hi " + this.firstName;
    },
    determineContext: function(){
        return this === person;
    },
    dog: {
        sayHello: function(){
            return "Hello " + this.firstName;
        },
        determineContext: function(){
            return this === person;
        }
    }
};

person.dog.sayHello.call(person); // "Hello Colt"
person.dog.determineContext.call(person); // true



// -------------------------------------------

var colt = {
    firstName: "Colt",
    sayHi: function(){
        return "Hi " + this.firstName;
    }
};

var elie = {
    firstName: "Elie",
    // Look at all this duplication :(
    sayHi: function(){
        return "Hi " + this.firstName;
    }
};

colt.sayHi(); // Hi Colt
elie.sayHi(); // Hi Elie


// better version
// -------------------------------------------
var colt = {
    firstName: "Colt",
    sayHi: function(){
        return "Hi " + this.firstName;
    }
};

var elie = {
    firstName: "Elie"
};
colt.sayHi(); // Hi Colt
colt.sayHi.call(elie); // Hi Elie

// much better version
// -------------------------------------------
function sayHi(){
    return "Hi " + this.firstName;
}
var colt = {
    firstName: "Colt"
};
var elie = {
    firstName: "Elie"
};

sayHi.call(colt); // Hi Colt
sayHi.call(elie); // Hi Elie

// -------------------------------------------
var divs = document.getElementsByTagName('divs');
var divsArray = [].slice.call(divs);
// you might also see this as Array.prototype.slice.call(divs)
// they do the same thing

divsArray.filter(function(val){
    return val.innerText === 'Hello';
});

// -------------------------------------------
function addNumbers(a,b,c,d){
    return this.firstName + " just calculated " + (a+b+c+d);
}

var colt = {
    firstName: "Colt"
};

var elie = {
    firstName: "Elie"
};

addNumbers.call(elie,1,2,3,4); // Elie just calculated 10
addNumbers.apply(elie,[1,2,3,4]);// Elie just calculated 10

// What differences do you see?

// --------------------------------------
function Car(make, model, year){
  this.make = make;
  this.model = model;
  this.year = year;
  this.numWheels = 4;
}

// using call
function Motorcycle(make, model, year) {
  car.call(this, make,model,year);
  this.numWheels = 2
}
// using apply
function Motorcycle(make, model, year) {
  car.apply(this, [make,model,year]);
  this.numWheels = 2
}

// you can make it more good code in the follwing way
function listArguments(){
  return arguments;
}
listArguments(1,2,3);

function Motorcycle(make, model, year) {
  car.apply(this, arguments);
  this.numWheels = 2;
}
