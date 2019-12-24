let promise = new Promise(
    function (reolve, reject) {
        setTimeout(reject,100,'someValue');
    }
);
console.log(promise);