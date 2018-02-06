function House(bedrooms, bathrooms, numSqft){
    this.bedrooms = bedrooms;
    this.bathrooms = bathrooms;
    this.numSqft = numSqft;
}
// House name is starting with Capital letter to show
// that it is a constructor function

var firstHouse = new House(2,2,1000);
firstHouse.bedrooms; // 2
firstHouse.numSqft; // 1000

// ---------------------------------------

function Dog(name,age){
  this.name = name;
  this.age = age;
  this.bark = function(){
    console.log(this.name + "Just Barked!");
  }
}

var rusty = new Dog('Rusty', 3);
var fido = new Dog('Fido', 1);

rusty.bark() // Rusty Just Barked!
fido.bark() // Fido Just Barked!


// ---------------------------------------
