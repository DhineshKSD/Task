/*var from = ["Chennai","Trichy","Bangalore","Cochin"];
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
*/


var m="<br>";
var Database;
var x= new Array();
var o= new Array();

Database=
[
    {
        from: "Chennai", to: "Trichy",
        flight: [
        {flight_details: "Flight Name: IndiGo   ,  Flight No : 6E 253    ,  Dept: 11.55 AM"},
        {flight_details: "Flight Name: Spicejet  , Flight No : 6E 253    ,  Dept: 11.55 AM"},
      ]
    },
    {
        from: "Chennai", to: "Bangalore",
        flight: [
          {flight_details: "Flight Name: IndiGo , Flight No : 6E 253, Dept: 11.55 AM " },
          {flight_details: "Flight Name: Spicejet , Flight No : 6E 253, Dept: 11.55 AM " },
        ]
    },
    {
        from: "Chennai", to: "Cochin",
        flight: [
          {flight_details: "Flight Name: IndiGo , Flight No : 6E 253, Dept: 11.55 AM " },
          {flight_details: "Flight Name: Spicejet , Flight No : 6E 253, Dept: 11.55 AM " },
        ]
    },
    {
        from: "Trichy", to: "Chennai",
        flight: [
          {flight_details: "Flight Name: IndiGo , Flight No : 6E 253, Dept: 11.55 AM " },
          {flight_details: "Flight Name: Spicejet , Flight No : 6E 253, Dept: 11.55 AM " },
        ]
    },
    {
        from: "Trichy", to: "Bangalore",
        flight: [
          {flight_details: "Flight Name: IndiGo , Flight No : 6E 253, Dept: 11.55 AM " },
          {flight_details: "Flight Name: Spicejet , Flight No : 6E 253, Dept: 11.55 AM " },
        ]
    },
    {
        from: "Trichy", to: "Cochin",
        flight: [
          {flight_details: "Flight Name: IndiGo , Flight No : 6E 253, Dept: 11.55 AM " },
          {flight_details: "Flight Name: Spicejet , Flight No : 6E 253, Dept: 11.55 AM " },
        ]
    },
    {
        from: "Bangalore", to: "Chennai",
        flight: [
          {flight_details: "Flight Name: IndiGo , Flight No : 6E 253, Dept: 11.55 AM " },
          {flight_details: "Flight Name: Spicejet , Flight No : 6E 253, Dept: 11.55 AM " },
        ]
    },
    {
        from: "Bangalore", to: "Trichy",
        flight: [
          {flight_details: "Flight Name: IndiGo , Flight No : 6E 253, Dept: 11.55 AM " },
          {flight_details: "Flight Name: Spicejet , Flight No : 6E 253, Dept: 11.55 AM " },
        ]
    },
    {
        from: "Bangalore", to: "Cochin",
        flight: [
          {flight_details: "Flight Name: IndiGo , Flight No : 6E 253, Dept: 11.55 AM " },
          {flight_details: "Flight Name: Spicejet , Flight No : 6E 253, Dept: 11.55 AM " },
        ]
    },
    {
        from: "Cochin", to: "Chennai",
        flight: [
          {flight_details: "Flight Name: IndiGo , Flight No : 6E 253, Dept: 11.55 AM " },
          {flight_details: "Flight Name: Spicejet , Flight No : 6E 253, Dept: 11.55 AM " },
        ]
    },
    {
        from: "Cochin",to: "Trichy",
        flight: [
          {flight_details: "Flight Name: IndiGo , Flight No : 6E 253, Dept: 11.55 AM " },
          {flight_details: "Flight Name: Spicejet , Flight No : 6E 253, Dept: 11.55 AM " },
        ]
    },
    {
        from: "Cochin", to: "Bangalore",
        flight: [
          {flight_details: "Flight Name: IndiGo , Flight No : 6E 253, Dept: 11.55 AM "},
          {flight_details: "Flight Name: Spicejet , Flight No : 6E 253, Dept: 11.55 AM "},
        ]
    },
    
  ]

localStorage.setItem("Database", JSON.stringify(Database));
Database = JSON.parse(localStorage.getItem("Database"));
console.log(typeof Database); //object
console.log(Database);




function validate()
{
 
    var  start_city = document.getElementById("start").value;
    var  end_city = document.getElementById("end").value;

    var g = document.getElementById("start");
    var strUser = g.options[g.selectedIndex].value;
    var strUser1 = g.options[g.selectedIndex].text;

    var h = document.getElementById("end");
    var strUser2 = h.options[h.selectedIndex].value;
    var strUser3 = h.options[h.selectedIndex].text;

    var p = document.getElementById("trip");
   	var strUser4 = p.options[p.selectedIndex].value;
  	var strUser5 = p.options[p.selectedIndex].text;


    if(strUser==0 && strUser2==0)
    {
    alert("Please Enter Journey Details");
    }
    else if(strUser2==0)
    {
	alert("Please select Destination city");
    }
    else if(strUser4==0)
    {
    alert("Please select type of trip");
    }
    else
    {
      localStorage.setItem('start', start_city); 
      localStorage.setItem('end', end_city); 
      alert("entered");
      compare();
    }
}
function compare()
{
  var key1 =  localStorage.getItem('start');
  var key2 = localStorage.getItem('end');
    for(var i=0;i<Database.length;i++)
    {
      if(key1==Database[i].from && key2==Database[i].to)
     {
       for(var j=0;j<Database[i].flight.length;j++)
       {
       x = Database[i].flight[j].flight_details;
       o += JSON.stringify(x) + "<br><br>" ;    
       }   
      localStorage.setItem("output",o);
      console.log(o);
      alert("Finding Flights..."); 
      window.location.assign("../javascript/redirect.html");  
   }
  }
}
 function display()
{
  var disp = localStorage.getItem("output");
  document.getElementById("Result").innerHTML=disp;
}
