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

var Database;
var x= new Array();
var o= new Array();
var dd=[];

Database=
[
    {
        from: "Chennai", to: "Trichy",
        flight: [
        {flight_details: "Flight Name: IndiGo , Flight No : 6E 7143,  Departure: 04.55 AM,  Arrival: 06:25AM, Price: Rs.3672"},
        {flight_details: "Flight Name: Spicejet , Flight No : SG 7245 ,  Departure: 02.55 PM, Arrival: 04:25PM, Price: Rs.3812"},
        {flight_details: "Flight Name: AirAsia , Flight No : I5 9945 ,  Departure: 01.15 PM, Arrival: 02:25PM, Price: Rs.4259"},
        {flight_details: "Flight Name: Air-India , Flight No : AI 591 ,  Departure: 07.20 AM, Arrival: 08:20AM, Price: Rs.3950"},
      ]
    },
    {
        from: "Chennai", to: "Bangalore",
        flight: [
        {flight_details: "Flight Name: Air-India , Flight No : AI 563 ,  Departure: 01.20 PM, Arrival: 02:25PM, Price: Rs.1751"},
        {flight_details: "Flight Name: IndiGo , Flight No : 6E 806,  Departure: 07.40 PM,  Arrival: 08:45AM, Price: Rs.2149"},
        {flight_details: "Flight Name: Spicejet , Flight No : SG 7245 ,  Departure: 05.00 PM, Arrival: 05:55PM, Price: Rs.1812"},
        {flight_details: "Flight Name: AirAsia , Flight No : I5 2345 ,  Departure: 08.40 AM, Arrival: 09:40PM, Price: Rs.2459"},
        ]
    },
    {
        from: "Chennai", to: "Cochin",
        flight: [
        {flight_details: "Flight Name: Air-India , Flight No : AI 513 ,  Departure: 08.25 AM, Arrival: 09:35PM, Price: Rs.2751"},
        {flight_details: "Flight Name: Spicejet , Flight No : SG 7345 ,  Departure: 09.10 PM, Arrival: 10:25PM, Price: Rs.2812"},
        {flight_details: "Flight Name: AirAsia , Flight No : I5 2015 ,  Departure: 12.40 PM, Arrival: 01:55PM, Price: Rs.2859"},
        {flight_details: "Flight Name: IndiGo , Flight No : 6E 776,  Departure: 07.40 PM,  Arrival: 08:45AM, Price: Rs.2949"},
        
        ]
    },
    {
        from: "Trichy", to: "Chennai",
        flight: [
        {flight_details: "Flight Name: Air-India , Flight No : AI 563 ,  Departure: 01.20 PM, Arrival: 02:25PM, Price: Rs.1751"},
        {flight_details: "Flight Name: IndiGo , Flight No : 6E 806,  Departure: 07.40 PM,  Arrival: 08:45AM, Price: Rs.2149"},
        {flight_details: "Flight Name: Spicejet , Flight No : SG 7245 ,  Departure: 05.00 PM, Arrival: 05:55PM, Price: Rs.1812"},
        {flight_details: "Flight Name: AirAsia , Flight No : I5 2345 ,  Departure: 08.40 AM, Arrival: 09:40PM, Price: Rs.2459"},
        ]
    },
    {
        from: "Trichy", to: "Bangalore",
        flight: [
        {flight_details: "Flight Name: Air-India , Flight No : AI 563 ,  Departure: 01.20 PM, Arrival: 02:25PM, Price: Rs.1751"},
        {flight_details: "Flight Name: IndiGo , Flight No : 6E 806,  Departure: 07.40 PM,  Arrival: 08:45AM, Price: Rs.2149"},
        {flight_details: "Flight Name: Spicejet , Flight No : SG 7245 ,  Departure: 05.00 PM, Arrival: 05:55PM, Price: Rs.1812"},
        {flight_details: "Flight Name: AirAsia , Flight No : I5 2345 ,  Departure: 08.40 AM, Arrival: 09:40PM, Price: Rs.2459"},
        ]
    },
    {
        from: "Trichy", to: "Cochin",
        flight: [
        {flight_details: "Flight Name: Air-India , Flight No : AI 563 ,  Departure: 01.20 PM, Arrival: 02:25PM, Price: Rs.1751"},
        {flight_details: "Flight Name: IndiGo , Flight No : 6E 806,  Departure: 07.40 PM,  Arrival: 08:45AM, Price: Rs.2149"},
        {flight_details: "Flight Name: Spicejet , Flight No : SG 7245 ,  Departure: 05.00 PM, Arrival: 05:55PM, Price: Rs.1812"},
        {flight_details: "Flight Name: AirAsia , Flight No : I5 2345 ,  Departure: 08.40 AM, Arrival: 09:40PM, Price: Rs.2459"},
        ]
    },
    {
        from: "Bangalore", to: "Chennai",
        flight: [
        {flight_details: "Flight Name: Air-India , Flight No : AI 563 ,  Departure: 01.20 PM, Arrival: 02:25PM, Price: Rs.1751"},
        {flight_details: "Flight Name: IndiGo , Flight No : 6E 806,  Departure: 07.40 PM,  Arrival: 08:45AM, Price: Rs.2149"},
        {flight_details: "Flight Name: Spicejet , Flight No : SG 7245 ,  Departure: 05.00 PM, Arrival: 05:55PM, Price: Rs.1812"},
        {flight_details: "Flight Name: AirAsia , Flight No : I5 2345 ,  Departure: 08.40 AM, Arrival: 09:40PM, Price: Rs.2459"},
        ]
    },
    {
        from: "Bangalore", to: "Trichy",
        flight: [
        {flight_details: "Flight Name: Air-India , Flight No : AI 563 ,  Departure: 01.20 PM, Arrival: 02:25PM, Price: Rs.1751"},
        {flight_details: "Flight Name: IndiGo , Flight No : 6E 806,  Departure: 07.40 PM,  Arrival: 08:45AM, Price: Rs.2149"},
        {flight_details: "Flight Name: Spicejet , Flight No : SG 7245 ,  Departure: 05.00 PM, Arrival: 05:55PM, Price: Rs.1812"},
        {flight_details: "Flight Name: AirAsia , Flight No : I5 2345 ,  Departure: 08.40 AM, Arrival: 09:40PM, Price: Rs.2459"},
        ]
    },
    {
        from: "Bangalore", to: "Cochin",
        flight: [
        {flight_details: "Flight Name: Air-India , Flight No : AI 563 ,  Departure: 01.20 PM, Arrival: 02:25PM, Price: Rs.1751"},
        {flight_details: "Flight Name: IndiGo , Flight No : 6E 806,  Departure: 07.40 PM,  Arrival: 08:45AM, Price: Rs.2149"},
        {flight_details: "Flight Name: Spicejet , Flight No : SG 7245 ,  Departure: 05.00 PM, Arrival: 05:55PM, Price: Rs.1812"},
        {flight_details: "Flight Name: AirAsia , Flight No : I5 2345 ,  Departure: 08.40 AM, Arrival: 09:40PM, Price: Rs.2459"},
        ]
    },
    {
        from: "Cochin", to: "Chennai",
        flight: [
        {flight_details: "Flight Name: Air-India , Flight No : AI 563 ,  Departure: 01.20 PM, Arrival: 02:25PM, Price: Rs.1751"},
        {flight_details: "Flight Name: IndiGo , Flight No : 6E 806,  Departure: 07.40 PM,  Arrival: 08:45AM, Price: Rs.2149"},
        {flight_details: "Flight Name: Spicejet , Flight No : SG 7245 ,  Departure: 05.00 PM, Arrival: 05:55PM, Price: Rs.1812"},
        {flight_details: "Flight Name: AirAsia , Flight No : I5 2345 ,  Departure: 08.40 AM, Arrival: 09:40PM, Price: Rs.2459"},
        ]
    },
    {
        from: "Cochin",to: "Trichy",
        flight: [
        {flight_details: "Flight Name: Air-India , Flight No : AI 563 ,  Departure: 01.20 PM, Arrival: 02:25PM, Price: Rs.1751"},
        {flight_details: "Flight Name: IndiGo , Flight No : 6E 806,  Departure: 07.40 PM,  Arrival: 08:45AM, Price: Rs.2149"},
        {flight_details: "Flight Name: Spicejet , Flight No : SG 7245 ,  Departure: 05.00 PM, Arrival: 05:55PM, Price: Rs.1812"},
        {flight_details: "Flight Name: AirAsia , Flight No : I5 2345 ,  Departure: 08.40 AM, Arrival: 09:40PM, Price: Rs.2459"},
        ]
    },
    {
        from: "Cochin", to: "Bangalore",
        flight: [
        {flight_details: "Flight Name: Air-India , Flight No : AI 563 ,  Departure: 01.20 PM, Arrival: 02:25PM, Price: Rs.1751"},
        {flight_details: "Flight Name: IndiGo , Flight No : 6E 806,  Departure: 07.40 PM,  Arrival: 08:45AM, Price: Rs.2149"},
        {flight_details: "Flight Name: Spicejet , Flight No : SG 7245 ,  Departure: 05.00 PM, Arrival: 05:55PM, Price: Rs.1812"},
        {flight_details: "Flight Name: AirAsia , Flight No : I5 2345 ,  Departure: 08.40 AM, Arrival: 09:40PM, Price: Rs.2459"},
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
      alert("Planning Trip");
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
       o +='<input type="radio" value='+JSON.stringify(x)+' name="box2">'  + '   ' + JSON.stringify(x)+'   '+'<br><br>'; 
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
  var disp;

    disp  = localStorage.getItem("output");
    document.getElementById("Result").innerHTML=disp;
}
