//XMLHttpRequests
let xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
    }
};

xhttp.open("GET", "http://5e015cfe685ac80014515305.mockapi.io/api/v1/users", true);
xhttp.send();