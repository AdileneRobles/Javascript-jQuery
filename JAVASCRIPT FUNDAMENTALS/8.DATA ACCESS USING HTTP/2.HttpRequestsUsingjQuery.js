//npm install jquery -(package.json)

//jQUERY and HTTPE GET
import $ from 'jquery';
let promise = $.get("http://5e015cfe685ac80014515305.mockapi.io/api/v1/users");
promise.then(
    data => console.log('success: ', data),
    error => console.log('error: ', error)
);