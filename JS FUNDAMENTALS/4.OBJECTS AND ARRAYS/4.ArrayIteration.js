let carIds = [
    {carId: 123, style: 'sedan'},
    {carId: 456, style: 'convertible'},
    {carId: 789, style: 'sedan'}
];

/*
carIds.forEach(car => console.log(car));
carIds.forEach(
    (car,index) => console.log(car, index)
);
*/


/*
let convertibles = carIds.filter(
  car => car.style === 'convertible'  
);
console.log(convertibles);
*/


/*
let result = carIds.every(
    car => car.carId > 0
);
console.log(result);
*/


let car = carIds.find(
    car => car.carId > 500
);
console.log(car);