var from = ["Chennai","Trichy","Bangalore","Cochin"];
var to = ["Chennai","Trichy","Bangalore","Cochin"];
var carriers = ["IndiGo","Spicejet","Air-India","AirAsia"];
var trip = ["Chennai-Trichy","Chennai-Bangalore","Chennai-Cochin",
            "Trichy-Chennai","Trichy-Bangalore","Trichy-Cochin",
            "Bangalore-Chennai","Bangalore-Trichy","Bangalore-Cochin",
            "Cochin-Chennai","Cochin-Trichy","Cochin-Bangalore"];


localStorage.setItem("from", JSON.stringify(from));
from = JSON.parse(localStorage.getItem("from"));
console.log(typeof from); //object
console.log(from); //[1, 2, 3]

localStorage.setItem("to", JSON.stringify(to));
to = JSON.parse(localStorage.getItem("to"));
console.log(typeof to); //object
console.log(to); 

localStorage.setItem("carriers", JSON.stringify(carriers));
carriers = JSON.parse(localStorage.getItem("carriers"));
console.log(typeof carriers); //object
console.log(carriers);

localStorage.setItem("trip", JSON.stringify(trip));
trip = JSON.parse(localStorage.getItem("trip"));
console.log(typeof trip); //object
console.log(trip);