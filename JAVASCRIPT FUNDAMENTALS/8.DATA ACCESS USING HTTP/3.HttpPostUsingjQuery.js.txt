import $ from 'jquery';
let user = {
    name: 'Adilene RG'//,
   // avatar: 'adi.jpg'
};
let promise = $.post(
    "http://5e015cfe685ac80014515305.mockapi.io/api/v1/users", user
);    
promise.then (
    data => console.log('success: ', data),
    error => console.log('error: ', error)
);