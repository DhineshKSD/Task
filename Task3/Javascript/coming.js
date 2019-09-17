var Database;
var disp=[];
var disp1=[];
var dd=[];
var pp=[];
var choice = []; 
var choice_Price = [];
var a1=[];
var a2=[];
var a3=[];
var a4=[];
var a5=[];
var a6=[];
var table="";
var table1="";
var  date=[];
var  traveller=[];

Database=
[
    {
        from: "Chennai", to: "Trichy",
        flight: [
        {flight_details: "Flight Name: IndiGo , Flight No : 6E 7143,  Departure: 04.55 AM,  Arrival: 06:25AM", Price: "Rs.3672"},
        {flight_details: "Flight Name: Spicejet , Flight No : SG 7245 ,  Departure: 02.55 PM, Arrival: 04:25PM", Price: "Rs.3812"},
        {flight_details: "Flight Name: AirAsia , Flight No : I5 9945 ,  Departure: 01.15 PM, Arrival: 02:25PM", Price: "Rs.4259"},
        {flight_details: "Flight Name: Air-India , Flight No : AI 591 ,  Departure: 07.20 AM, Arrival: 08:20AM", Price: "Rs.3950"},
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
    traveller = document.getElementById("travel").value;
    date= document.getElementById("day1").value;
    console.log(date);  
    

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
    else if(traveller=="")
    {
    alert("Please enter no.of.travellers");
    }
    else
    {
      localStorage.setItem('start', start_city); 
      localStorage.setItem('end', end_city);
      localStorage.setItem('traveller_count',traveller);
      localStorage.setItem('dot',date);  
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
       var x = Database[i].flight[j].flight_details;
       var y = Database[i].flight[j].Price;
       dd.push(x);
       pp.push(y);
       window.localStorage.setItem("output",JSON.stringify(dd));
       window.localStorage.setItem("output_price",JSON.stringify(pp));   
       }   
       console.log(dd);
       console.log(pp);
       alert("Flight search..."); 
       window.location.assign("../Source/redirect.html");
       
   }
  }
}

 function display()
{
   disp = JSON.parse(window.localStorage.getItem("output"));
   disp1 = JSON.parse(window.localStorage.getItem("output_price"))
  for(i=0;i<disp.length;i++)
  {
    var html=document.getElementById("Result").innerHTML;
    document.getElementById("Result").innerHTML= html+"<br>"+ "<input type='radio' id='r' value='disp' name='radio[]'>"+"&nbsp"+disp[i]+' '+"Price: "+ disp1[i]+'<br>';
    console.log("<input type='radio' id='r' value='disp' name='radio[]'>"+disp[i]+' '+"Price: "+disp1[i]+'<br>');
}
}
function booking()
{
    var flight=new Array();
    flight = document.getElementsByName("radio[]");
    if (flight[0].checked == true) 
    {
    alert("You have chosen a flight");
    console.log(disp[0]);
    choice.push(disp[0]);
    choice_Price.push(disp1[0]);
    window.localStorage.setItem("choice",JSON.stringify(choice));
    window.localStorage.setItem("choicePrice",JSON.stringify(choice_Price));
    window.location.assign("../Source/redirect1.html");
    }
    else if (flight[1].checked == true) 
    {
    alert("You have chosen a flight");
    console.log(disp[1]);
    choice.push(disp[1]);
    choice_Price.push(disp1[1]);
    window.localStorage.setItem("choice",JSON.stringify(choice));
    window.localStorage.setItem("choicePrice",JSON.stringify(choice_Price));
    window.location.assign("../Source/redirect1.html");
    }
    else if (flight[2].checked == true) 
    {
    alert("You have chosen a flight");
    console.log(disp[2]);
    choice.push(disp[2]);
    choice_Price.push(disp1[2]);
    window.localStorage.setItem("choice",JSON.stringify(choice));
    window.localStorage.setItem("choicePrice",JSON.stringify(choice_Price));
    window.location.assign("../Source/redirect1.html");
    }
    else if (flight[3].checked == true) 
    {
    alert("You have chosen a flight");
    console.log(disp[3]);
    choice.push(disp[3]);
    choice_Price.push(disp1[3]);
    window.localStorage.setItem("choice",JSON.stringify(choice));
    window.localStorage.setItem("choicePrice",JSON.stringify(choice_Price));
    window.location.assign("../Source/redirect1.html");
    }
    else 
    {
    alert("Choose a flight");
    }
}

function userchoice()
{
    /*var display_choice=JSON.parse(window.localStorage.getItem("choice"));
    var html2 = document.getElementById("Result1").innerHTML;
    var s="<br>"
    document.getElementById("Result1").innerHTML= html2+s+display_choice;*/
     var space="&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp";
     var l="<br>"
     var m="Date. of. Journey-"
     a1=localStorage.getItem("start");
     a2=localStorage.getItem("end");
     a3=JSON.parse(window.localStorage.getItem("choice"));
     a4=localStorage.getItem("traveller_count");
     a5=localStorage.getItem("dot");
     a6=JSON.parse(window.localStorage.getItem("choicePrice"));
     console.log(a6);
     html2 = document.getElementById("Result1").innerHTML;
    table+="<table border ='1'><tr><th>From</th><th>To</th><th>Flight Details</th><th>Travellers.No</th><th>Price</th></tr>";
    table+="<tr><td>" +a1+ "</td>" +"<td>" + a2+ "</td>" + "<td>"+ a3 +"</td>" + "<td>"+space+ a4 +"</td>"+ "<td>"+ a6 +"</td></tr></table>";
    document.getElementById("Result1").innerHTML= html2+l+table+l+m+a5;
}

function print()
{
    window.location.assign("../Source/traveller.html");
    var trav_name= document.getElementById("name").value;
    var trav_email= document.getElementById("email").value;
    var trav_num= document.getElementById("mobileno").value;
    var trav_gender= document.getElementById("gender").value;
    localStorage.setItem('traveller_name', trav_name); 
    localStorage.setItem('traveller_email', trav_email);
    localStorage.setItem('traveller_number',trav_num);
    localStorage.setItem('traveller_gender',trav_gender);   
    window.location.assign("../Source/print.html");
    alert("Booked");
}


function ticket()
{
     var space="&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp";
     var l="<br>"
     var m="Date. of. Journey-"
     var b1=localStorage.getItem("start");
     var b2=localStorage.getItem("end");
     var b3=JSON.parse(window.localStorage.getItem("choice"));
     var b4=localStorage.getItem("traveller_count");
     var b5=localStorage.getItem("dot");
     var b6=localStorage.getItem("traveller_name");
     var b7=JSON.parse(window.localStorage.getItem("choicePrice"));
    
    html3 = document.getElementById("Result2").innerHTML;
    table1+="<table border ='1'><tr><th>Name</th><th>From</th><th>To</th><th>Flight Details</th><th>Travellers.No</th><th>Date.of.Journey</th><th>Price</th></tr>";
    table1+="<tr><td>" +b6+"</td>"+"<td>"+b1+ "</td>" +"<td>" + b2+ "</td>" + "<td>"+ b3 +"</td>" + "<td>"+space+ b4 +"</td>" + "<td>"+ b5 +"</td>"+ "<td>"+ b4*b7 +"</td></tr></table>";
    document.getElementById("Result2").innerHTML= html3+l+table1+l;
}    

