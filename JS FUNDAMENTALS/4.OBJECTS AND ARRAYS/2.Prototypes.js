/*
 function Car(id) {
     this.carId = id;
 }
 Car.prototype.start = function(){
     console.log('start: ' + this.carId);
 };
 let car = new Car(123);
 car.start();
*/
 
 String.prototype.hello = function() {
     return this.toString() + ' Hello';
 };
 console.log('foo'.hello());