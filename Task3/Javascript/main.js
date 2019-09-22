var Database;
var disp=[];
var disp1=[];
var dd=[];
var pp=[];
var choice = []; 
var choice_Price = [];
var table="";
var table1="";
var date=[];var date1=[];var trip=[];
var traveller=[];
var start_city=[];var end_city =[];
var key1=[];var key2=[];
var trav_name= [];
var trav_email= [];
var trav_num= [];
var trav_gender= [];
var a1=[];var a2=[];var a3=[];var a4=[];var a5=[];var a6=[];
var ticket_id=[];
Database=
[
    {
    from: "Chennai", to: "Trichy",
    flight: [
    {flight_details: "Flight Name: IndiGo , Flight No : 6E 7143,  Departure: 04.55 AM,  Arrival: 06.25AM", Price: "3672"},
    {flight_details: "Flight Name: Spicejet , Flight No : SG 7245 ,  Departure: 02.55 PM, Arrival: 04.25PM", Price: "3812"},
    {flight_details: "Flight Name: AirAsia , Flight No : I5 9945 ,  Departure: 01.15 PM, Arrival: 02.25PM", Price: "4259"},
    {flight_details: "Flight Name: Air-India , Flight No : AI 591 ,  Departure: 07.20 AM, Arrival: 08.20AM", Price: "3950"},
    ]
    },
    {
    from: "Chennai", to: "Bangalore",
    flight: [
    {flight_details: "Flight Name: Air-India , Flight No : AI 563 ,  Departure: 01.20 PM, Arrival: 02.25PM", Price: "1751"},
    {flight_details: "Flight Name: IndiGo , Flight No : 6E 806,  Departure: 07.40 PM,  Arrival: 08.45PM", Price: "2149"},
    {flight_details: "Flight Name: Spicejet , Flight No : SG 7245 ,  Departure: 05.00 PM, Arrival: 05.55PM", Price: "1812"},
    {flight_details: "Flight Name: AirAsia , Flight No : I5 2345 ,  Departure: 08.40 AM, Arrival: 09.40AM", Price: "2459"},
    ]
    },
    {
    from: "Chennai", to: "Cochin",
    flight: [
    {flight_details: "Flight Name: Air-India , Flight No : AI 513 ,  Departure: 08.25 AM, Arrival: 09.35PM", Price: "2751"},
    {flight_details: "Flight Name: Spicejet , Flight No : SG 7345 ,  Departure: 09.10 PM, Arrival: 10.25PM", Price: "2812"},
    {flight_details: "Flight Name: AirAsia , Flight No : I5 2015 ,  Departure: 12.40 PM, Arrival: 01.55PM", Price: "2859"},
    {flight_details: "Flight Name: IndiGo , Flight No : 6E 776,  Departure: 07.40 PM,  Arrival: 08.45PM", Price: "2949"},
    ]
    },
    {
    from: "Trichy", to: "Chennai",
    flight: [
    {flight_details: "Flight Name: AirAsia , Flight No : I5 9945 ,  Departure: 01.15 PM, Arrival: 02.25PM", Price: "4259"},
    {flight_details: "Flight Name: IndiGo , Flight No : 6E 7143,  Departure: 06.55 AM,  Arrival: 07.25AM", Price: "3672"},
    {flight_details: "Flight Name: Air-India , Flight No : AI 591 ,  Departure: 07.30 AM, Arrival: 08.30AM", Price: "3950"},
    {flight_details: "Flight Name: Spicejet , Flight No : SG 7245 ,  Departure: 02.55 PM, Arrival: 04.05PM", Price: "3812"},
    ]
    },
    {
    from: "Trichy", to: "Bangalore",
    flight: [
    {flight_details: "Flight Name: Air-India , Flight No : AI 563 ,  Departure: 01.20 PM, Arrival: 02.25PM", Price: "2251"},
    {flight_details: "Flight Name: IndiGo , Flight No : 6E 806,  Departure: 07.40 PM,  Arrival: 08.45AM", Price: "2149"},
    {flight_details: "Flight Name: Spicejet , Flight No : SG 7245 ,  Departure: 05.00 PM, Arrival: 05.55PM", Price: "1812"},
    {flight_details: "Flight Name: AirAsia , Flight No : I5 2345 ,  Departure: 08.40 AM, Arrival: 09.40PM", Price: "2459"},
    ]
    },
    {
    from: "Trichy", to: "Cochin",
    flight: [
    {flight_details: "Flight Name: Air-India , Flight No : AI 563 ,  Departure: 01.20 PM, Arrival: 02.25PM", Price: "2051"},
    {flight_details: "Flight Name: IndiGo , Flight No : 6E 806,  Departure: 07.40 PM,  Arrival: 08.45AM", Price: "2149"},
    {flight_details: "Flight Name: Spicejet , Flight No : SG 7245 ,  Departure: 05.00 PM, Arrival: 05.55PM", Price: "1912"},
    {flight_details: "Flight Name: AirAsia , Flight No : I5 2345 ,  Departure: 08.40 AM, Arrival: 09.40PM", Price: "2659"},
    ]
    },
    {
    from: "Bangalore", to: "Chennai",
    flight: [
    {flight_details: "Flight Name: Spicejet , Flight No : SG 7245 ,  Departure: 05.00 PM, Arrival: 05.55PM", Price: "1812"},
    {flight_details: "Flight Name: Air-India , Flight No : AI 563 ,  Departure: 01.20 PM, Arrival: 02.25PM", Price: "1751"},
    {flight_details: "Flight Name: IndiGo , Flight No : 6E 806,  Departure: 07.40 PM,  Arrival: 08.45PM", Price: "2149"},
    {flight_details: "Flight Name: AirAsia , Flight No : I5 2345 ,  Departure: 08.40 AM, Arrival: 09.40AM", Price: "2459"},
    ]
    },
    {
    from: "Bangalore", to: "Trichy",
    flight: [
    {flight_details: "Flight Name: Spicejet , Flight No : SG 7245 ,  Departure: 05.00 PM, Arrival: 05.55PM", Price: "1812"},
    {flight_details: "Flight Name: Air-India , Flight No : AI 563 ,  Departure: 01.20 PM, Arrival: 02.25PM", Price: "2251"},
    {flight_details: "Flight Name: IndiGo , Flight No : 6E 806,  Departure: 07.40 PM,  Arrival: 08.45AM", Price: "2149"},
    {flight_details: "Flight Name: AirAsia , Flight No : I5 2345 ,  Departure: 08.40 AM, Arrival: 09.40PM", Price: "2459"},
    ]
    },
    {
    from: "Bangalore", to: "Cochin",
    flight: [
    {flight_details: "Flight Name: Air-India , Flight No : AI 563 ,  Departure: 01.20 PM, Arrival: 02.25PM", Price: "2751"},
    {flight_details: "Flight Name: IndiGo , Flight No : 6E 806,  Departure: 07.40 PM,  Arrival: 08.45AM", Price: "2549"},
    {flight_details: "Flight Name: Spicejet , Flight No : SG 7245 ,  Departure: 05.00 PM, Arrival: 05.55PM", Price: "2812"},
    {flight_details: "Flight Name: AirAsia , Flight No : I5 2345 ,  Departure: 08.40 AM, Arrival: 09.40PM", Price: "2459"},
    ]
    },
    {
    from: "Cochin", to: "Chennai",
    flight: [
    {flight_details: "Flight Name: AirAsia , Flight No : I5 2015 ,  Departure: 12.40 PM, Arrival: 01.55PM", Price: "2859"},
    {flight_details: "Flight Name: Air-India , Flight No : AI 513 ,  Departure: 08.25 AM, Arrival: 09.35PM", Price: "2751"},
    {flight_details: "Flight Name: Spicejet , Flight No : SG 7345 ,  Departure: 09.10 PM, Arrival: 10.25PM", Price: "2812"},
    {flight_details: "Flight Name: IndiGo , Flight No : 6E 776,  Departure: 07.40 PM,  Arrival: 08.45PM", Price: "2949"}, 
    ]
    },
    {
    from: "Cochin",to: "Trichy",
    flight: [
    {flight_details: "Flight Name: Spicejet , Flight No : SG 7245 ,  Departure: 05.00 PM, Arrival: 05.55PM", Price: "1912"},
    {flight_details: "Flight Name: Air-India , Flight No : AI 563 ,  Departure: 01.20 PM, Arrival: 02.25PM", Price: "2051"},
    {flight_details: "Flight Name: IndiGo , Flight No : 6E 806,  Departure: 07.40 PM,  Arrival: 08.45AM", Price: "2149"},
    {flight_details: "Flight Name: AirAsia , Flight No : I5 2345 ,  Departure: 08.40 AM, Arrival: 09.40PM", Price: "2659"},
    ]
    },
    {
    from: "Cochin", to: "Bangalore",
    flight: [
    {flight_details: "Flight Name: IndiGo , Flight No : 6E 806,  Departure: 07.40 PM,  Arrival: 08.45AM", Price: "2549"},
    {flight_details: "Flight Name: Spicejet , Flight No : SG 7245 ,  Departure: 05.00 PM, Arrival: 05.55PM", Price: "2812"},
    {flight_details: "Flight Name: Air-India , Flight No : AI 563 ,  Departure: 01.20 PM, Arrival: 02.25PM", Price: "2751"},
    {flight_details: "Flight Name: AirAsia , Flight No : I5 2345 ,  Departure: 08.40 AM, Arrival: 09.40PM", Price: "2459"},
    ]
    },
  ]

localStorage.setItem("Database", JSON.stringify(Database));
Database = JSON.parse(localStorage.getItem("Database"));
console.log(typeof Database); //object
console.log(Database);

function welcome() //To display user name while booking
{
    var id=localStorage.getItem("user_id");
    var name=JSON.parse(window.localStorage.getItem("username"));
    var msg=document.getElementById("message").innerHTML;
    var message="Welcome";
    document.getElementById("message").innerHTML=msg+message+"<br>"+name[id]; 
}

function validate() //To validate the fields during flight search
{
    var g = document.getElementById("start");
    var strUser = g.options[g.selectedIndex].value;
    var h = document.getElementById("end");
    var strUser2 = h.options[h.selectedIndex].value;
    var p = document.getElementById("trip");
   	var strUser4 = p.options[p.selectedIndex].value;

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
    else if(document.getElementById("day1").value=="")
    {
    alert("Please enter no.of.travellers");
    }
    else
    {
        if(window.localStorage["startcity"] !=null)
 
        start_city = JSON.parse(window.localStorage["startcity"]);
        start_city.push(document.getElementById("start").value);
        window.localStorage["startcity"] = JSON.stringify(start_city);

        if(window.localStorage["endcity"] !=null)
 
        end_city = JSON.parse(window.localStorage["endcity"]);
        end_city.push(document.getElementById("end").value);
        window.localStorage["endcity"] = JSON.stringify(end_city);

        if(window.localStorage["trip"] !=null)
 
        trip = JSON.parse(window.localStorage["triptype"]);
        trip.push(document.getElementById("trip").value);
        window.localStorage["triptype"] = JSON.stringify(trip);

        if(window.localStorage["traveller_count"] !=null)
 
        traveller = JSON.parse(window.localStorage["traveller_count"]);
        traveller.push(document.getElementById("travel").value);
        window.localStorage["traveller_count"] = JSON.stringify(traveller);

        if(document.getElementById("trip").value == "Oneway-Trip")
        {
        if(window.localStorage["date"] !=null)
 
        date = JSON.parse(window.localStorage["date"]);
        date.push(document.getElementById("day1").value);
        window.localStorage["date"] = JSON.stringify(date);
        }
        if(document.getElementById("trip").value == "Round-Trip")
        {
        if(window.localStorage["date1"] !=null)
        date1 = JSON.parse(window.localStorage["date1"]);
        date1.push(document.getElementById("day2").value);
        window.localStorage["date1"] = JSON.stringify(date1);
        }
       compare();
    }
}

function compare() // Compare user search request with local database
{
    var id=localStorage.getItem("user_id");
    key1 =  JSON.parse(window.localStorage.getItem("startcity"));
    console.log(key1)
    key2 = JSON.parse(window.localStorage.getItem("endcity"));
  
    for(var i=0;i<Database.length;i++)
    {
      if(key1[id]==Database[i].from && key2[id]==Database[i].to)
       {
        for(var j=0;j<Database[i].flight.length;j++)
        {
        var x = Database[i].flight[j].flight_details;
        var y = Database[i].flight[j].Price;
            dd.push(x);
            window.localStorage["output"] = JSON.stringify(dd);
            pp.push(y);
            window.localStorage["output_price"]=JSON.stringify(pp);   
        }   
        console.log(dd);
        console.log(pp);
        alert("Searching Flights..."); 
        window.location.assign("../Source/redirect.html");   
      }
    }
}

 function display() // Display the available flights for the user request
{
   disp = JSON.parse(window.localStorage.getItem("output"));
   disp1 = JSON.parse(window.localStorage.getItem("output_price"));
  for(i=0;i<disp.length;i++)
  {
    var html=document.getElementById("Result").innerHTML;
    document.getElementById("Result").innerHTML= html+"<br>"+ "<input type='radio' id='r' value='disp' name='radio[]'>"+"&nbsp"+disp[i]+' '+"Price:Rs. "+ disp1[i]+'<br>';
    console.log("<input type='radio' id='r' value='disp' name='radio[]'>"+disp[i]+' '+"Price: "+disp1[i]+'<br>');
  }
}

function booking() 
{
  var flight=new Array();
  var flag=0;
  flight = document.getElementsByName("radio[]");
  for(var i=0;i<4;i++)
    {
        if (flight[i].checked == true) 
        {
        flag=1;
        alert("You have chosen a flight");
        console.log(disp[i]);
        if(window.localStorage["choice"] !=null)
        choice = JSON.parse(window.localStorage["choice"]); 
        choice.push(disp[i]);
        window.localStorage["choice"] = JSON.stringify(choice); //user choice stored in a array (flight details)
        
        if(window.localStorage["choiceprice"] !=null)
        choice_Price = JSON.parse(window.localStorage["choiceprice"]);
        choice_Price.push(disp1[i]);
        window.localStorage["choiceprice"] = JSON.stringify(choice_Price); //user choice stored in a array (flight price)

        window.location.assign("../Source/redirect1.html");
        }
    }   
    if (flag==0)
    {
        alert("Please select");
    }          
}

function userchoice() //to review the booked flight details
{
    var id=localStorage.getItem("user_id");
    var space="&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp";
    var l="<br>"
    var m="Date. of. Journey - "
    var n="No. of. Travellers - "
    var o="Total Fare - "
    a1=JSON.parse(window.localStorage.getItem("startcity"));
    a2=JSON.parse(window.localStorage.getItem("endcity"));
    a3=JSON.parse(window.localStorage.getItem("traveller_count"));
    a4=JSON.parse(window.localStorage.getItem("date"));
    a5=JSON.parse(window.localStorage.getItem("choice"));
    a6=JSON.parse(window.localStorage.getItem("choiceprice"));

    html2 = document.getElementById("Result1").innerHTML;
    table+="<table border ='1'><tr><th>From</th><th>To</th><th>Flight Details</th><th>Price</th></tr>";
    table+="<tr><td>" +a1[id]+ "</td>" +"<td>" + a2[id]+ "</td>" + "<td>"+ a5[id] +"</td>" + "<td>"+"Rs."+ a6[id]+"x"+a3[id] +"</td></tr></table>";
    document.getElementById("Result1").innerHTML= html2+l+table+l+m+a4[id]+l+l+n+a3[id]+l+l+o+a6[id]*a3[id];
}

function print_content()
{
    window.location.assign("../Source/traveller.html");

    if((document.getElementById("name").value)=="")
    {
        alert("please enter username");
    }
    else if(document.getElementById("email").value=="")
    {
        alert("please enter mail id");
    }
    else if(document.getElementById("mobileno").value=="")
    {
        alert("please enter mobile.no");
    }
    else{
        if(window.localStorage["traveller_name"] !=null)
        trav_name = JSON.parse(window.localStorage["traveller_name"]);
        trav_name.push(document.getElementById("name").value);
        window.localStorage["traveller_name"] = JSON.stringify(trav_name);

        if(window.localStorage["traveller_email"] !=null)
        trav_email = JSON.parse(window.localStorage["traveller_email"]);
        trav_email .push(document.getElementById("email").value);
        window.localStorage["traveller_email"] = JSON.stringify(trav_email );
        
        if(window.localStorage["traveller_mob"] !=null)
        trav_num = JSON.parse(window.localStorage["traveller_mob"]);
        trav_num .push(document.getElementById("mobileno").value);
        window.localStorage["traveller_mob"] = JSON.stringify(trav_num );

        if(window.localStorage["traveller_gender"] !=null)
        trav_gender = JSON.parse(window.localStorage["traveller_gender"]);
        trav_gender .push(document.getElementById("gender").value);
        window.localStorage["traveller_gender"] = JSON.stringify(trav_gender );
    
        window.location.assign("../Source/print.html");
        alert("Ticket Booked");

        var x = Math.floor((Math.random() * 1000) + 1); //to generate ticket id dynamically
        console.log(x);
        if(window.localStorage["ticket"] !=null)
            ticket_id = JSON.parse(window.localStorage["ticket"]);
            ticket_id.push(x);
            window.localStorage["ticket"] = JSON.stringify(ticket_id);
    }
}

function ticket()
{
     

     var id=localStorage.getItem("user_id");
     var space="&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp";
     var space1="&nbsp&nbsp&nbsp&nbsp&nbsp";
     var l="<br>"
     var m="   Date. of. Journey : "

     var tid= JSON.parse(window.localStorage.getItem("ticket"));
     var b1=JSON.parse(window.localStorage.getItem("startcity"));
     var b2=JSON.parse(window.localStorage.getItem("endcity"));
     var b3=JSON.parse(window.localStorage.getItem("traveller_count"));
     var b4=JSON.parse(window.localStorage.getItem("date"));
     var b5=JSON.parse(window.localStorage.getItem('traveller_name'));
     var b6=JSON.parse(window.localStorage.getItem("choice"));
     var b7=JSON.parse(window.localStorage.getItem("choiceprice"));
    html3 = document.getElementById("Result2").innerHTML;
    /*table1+="<table border ='1'><tr><th>Account Holder Name</th><th>From</th><th>To</th><th>Flight Details</th><th>Travellers.No</th><th>Date.of.Journey</th><th>Price</th></tr>";
    table1+="<tr><td>"+space +b5[id]+"</td>"+"<td>"+b1[id]+ "</td>" +"<td>" + b2[id]+ "</td>" + "<td>"+ b6[id] +"</td>" + "<td>"+space+ b3[id] +"</td>" + "<td>"+ b4[id] +"</td>"+ "<td>"+"Rs."+ b3[id]*b7[id] +"</td></tr></table>";
    document.getElementById("Result2").innerHTML= html3+l+table1+l+m+b4[id];*/
    document.getElementById("Result2").innerHTML= html3+"Ticket-Id : "+tid[id]+space+space+"From : "+b1[id]+space+space+"To : "+b2[id]+space+space+"Name : "+b5[id]+l+l+"Class : Economy"+space+space1+m+b4[id]+l+l+"Flight Details - "+b6[id]+l+l+"No. of. Travellers : "+b3[id]+l+l+"Price : "+b3[id]*b7[id];
}   

function Delete()
{   
    /*var k1 = document.getElementById("start").value;
    var k2 = document.getElementById("end").value;
    var k3 = document.getElementById("trip").value;
    var k4 = document.getElementById("travel").value;
    var k4 = document.getElementById("day1").value;*/
    var id=localStorage.getItem("user_id");
    
    var a = JSON.parse(localStorage.getItem("startcity"));
    a.splice(id, 1);
    start_city = JSON.stringify(a);
    localStorage.setItem("startcity", start_city);

    var b = JSON.parse(localStorage.getItem("endcity"));
    b.splice(id, 1);
    end_city = JSON.stringify(b);
    localStorage.setItem("endcity", end_city);

    var c = JSON.parse(localStorage.getItem("date"));
    c.splice(id, 1);
    date = JSON.stringify(c);
    localStorage.setItem("date", date);

    var d = JSON.parse(localStorage.getItem("triptype"));
    d.splice(id, 1);
    trip = JSON.stringify(d);
    localStorage.setItem("triptype",trip);

    var e = JSON.parse(localStorage.getItem("choice"));
    e.splice(id, 1);
    choice = JSON.stringify(e);
    localStorage.setItem("choice",choice);

    var f = JSON.parse(localStorage.getItem("choiceprice"));
    f.splice(id, 1);
    choice_price = JSON.stringify(f);
    localStorage.setItem("choiceprice",choice_price);

    var g = JSON.parse(localStorage.getItem("traveller_count"));
    g.splice(id, 1);
    traveller = JSON.stringify(g);
    localStorage.setItem("traveller_count",traveller);

    window.location.assign("../Source/index.html")
    /*localStorage.removeItem("output_price");
    localStorage.removeItem("choice");
    localStorage.removeItem("choiceprice");
    localStorage.removeItem("startcity");
    localStorage.removeItem("endcity");
    localStorage.removeItem("date");
    localStorage.removeItem("date1");
    localStorage.removeItem("triptype");
    localStorage.removeItem("traveller_name");
    localStorage.removeItem("traveller_email");
    localStorage.removeItem("traveller_mob");
    localStorage.removeItem("traveller_gender");
    localStorage.removeItem("traveller_count");
    */
}

    
    



