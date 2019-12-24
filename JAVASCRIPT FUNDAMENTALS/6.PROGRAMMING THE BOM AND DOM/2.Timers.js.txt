let intervalId = setInterval(function(){
    console.log('1 second passed');
}, 1000);

//if nedd to cancel...
clearInterval(intervalId);