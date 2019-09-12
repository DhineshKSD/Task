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

var s=0;
var e=0;
var Database;

Database=
[
    {
      from: "Chennai", to: "Trichy",
      flight: [
        "IndiGo Dept:12.50 PM",
        "Spicejet Dept: 10.00 AM",
      ]
    },
    {
        from: "Chennai", to: "Bangalore",
        flight: [
          "IndiGo Dept:12.50 PM",
          "Spicejet Dept: 10.00 AM",
        ]
    },
    {
        from: "Chennai", to: "Cochin",
        flight: [
          "IndiGo Dept:12.50 PM",
          "Spicejet Dept: 10.00 AM",
        ]
    },
    {
        from: "Trichy", to: "Chennai",
        flight: [
          "IndiGo Dept:12.50 PM",
          "Spicejet Dept: 10.00 AM",
        ]
    },
    {
        from: "Trichy", to: "Bangalore",
        flight: [
          "IndiGo Dept:12.50 PM",
          "Spicejet Dept: 10.00 AM",
        ]
    },
    {
        from: "Trichy", to: "Cochin",
        flight: [
          "IndiGo Dept:12.50 PM",
          "Spicejet Dept: 10.00 AM",
        ]
    },
    {
        from: "Bangalore", to: "Chennai",
        flight: [
          "IndiGo Dept:12.50 PM",
          "Spicejet Dept: 10.00 AM",
        ]
    },
    {
        from: "Bangalore", to: "Trichy",
        flight: [
          "IndiGo Dept:12.50 PM",
          "Spicejet Dept: 10.00 AM",
        ]
    },
    {
        from: "Bangalore", to: "Cochin",
        flight: [
          "IndiGo Dept:12.50 PM",
          "Spicejet Dept: 10.00 AM",
        ]
    },
    {
        from: "Cochin", to: "Chennai",
        flight: [
          "IndiGo Dept:12.50 PM",
          "Spicejet Dept: 10.00 AM",
        ]
    },
    {
        from: "Cochin",to: "Trichy",
        flight: [
          "IndiGo Dept:12.50 PM",
          "Spicejet Dept: 10.00 AM",
        ]
    },
    {
        from: "Cochin", to: "Bangalore",
        flight: [
          "IndiGo Dept:12.50 PM",
          "Spicejet Dept: 10.00 AM",
        ]
    },
    
  ]

localStorage.setItem("Database", JSON.stringify(Database));
Database = JSON.parse(localStorage.getItem("Database"));
console.log(typeof Database); //object
console.log(Database);




function validate()
{
 
    s = document.getElementById("start").value;
    e = document.getElementById("end").value;

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
    compare();
    }

}
function compare()
{
    for(var i=0;i<Database.length;i++)
    {
        if(s==Database[i].from)
    {
    alert("found");
    }    
}
}