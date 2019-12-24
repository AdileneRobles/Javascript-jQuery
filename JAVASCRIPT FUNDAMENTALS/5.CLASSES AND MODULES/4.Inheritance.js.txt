class Vehicle{
    constructor(){
        this.type = 'car';
    }
    start() {
        return `String: ${this.type}`;
    }
}
class Car extends Vehicle {
    /*constructor(){
        super();
    }*/

    start(){
        return'in Car start ' + super.start();
    }
}
let car = new Car();
console.log(car.start());