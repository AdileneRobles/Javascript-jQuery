function startCar(carId) {
    let message = 'Starting...';
    let starFn = function turnKey(){
        let message = 'Override';
    };
    starFn();
    console.log(message);
}
startCar(123);