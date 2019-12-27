class Car{
    constructor(id){
        this.id = id;
    }
    identify(){
        return `Car Id: ${this.id}`;
    }
}
let car = new Car(123);
console.log(car.identify());