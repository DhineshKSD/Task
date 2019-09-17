var dd=[];
var Database = { "Flight" : [{ FlightName: "  IndiGo" , FlightNo : "6E 7143", from: "Chennai", to: "Trichy", Departure: "04.55 AM",  Arrival: "06:25AM", Price: "Rs.3672"},
{ FlightName: "Spicejet" , FlightNo : "SG 7245", from: "Chennai", to: "Trichy", Departure: "02.55 PM",  Arrival: " 04:25 PM", Price: "Rs.3872"},
{ FlightName: " AirAsia" , FlightNo : "I5 9945 ", from: "Chennai", to: "Trichy", Departure: "01.15 PM",  Arrival: "02:25 PM", Price: "Rs.3960"},
{ FlightName: "AirIndia" , FlightNo : "AI 0591", from: "Chennai", to: "Trichy", Departure: "07.20 AM",  Arrival: "08:20 AM", Price: "Rs.4000"},
{ FlightName: "  IndiGo" , FlightNo : "6E 7343", from: "Chennai", to: "Bangalore", Departure: "04.55 AM",  Arrival: "06:25 AM", Price: "Rs.3672"},
{ FlightName: "Spicejet" , FlightNo : "SG 7245", from: "Chennai", to: "Bangalore", Departure: "04.55 AM",  Arrival: "06:25 AM", Price: "Rs.3672"},
{ FlightName: " AirAsia" , FlightNo : "I5 9945", from: "Chennai", to: "Bangalore", Departure: "04.55 AM",  Arrival: "06:25 AM", Price: "Rs.3672"},
{ FlightName: "AirIndia" , FlightNo : "AI 0591", from: "Chennai", to: "Bangalore", Departure: "04.55 AM",  Arrival: "06:25 AM", Price: "Rs.3672"},
{ FlightName: "  IndiGo" , FlightNo : "6E 7343", from: "Chennai", to: "Cochin", Departure: "04.55 AM",  Arrival: "06:25 AM", Price: "Rs.3672"},
{ FlightName: "IndiGo2" , FlightNo : "6E 7343", from: "Chennai", to: "Cochin", Departure: "04.55 AM",  Arrival: "06:25 AM", Price: "Rs.3672"}]};

localStorage.setItem("Database", JSON.stringify(Database));
Database = JSON.parse(localStorage.getItem("Database"));
console.log(typeof Database); //object
console.log(Database);

ShareInfoLength = Database.Flight.length;
console.log(ShareInfoLength);

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
  for(var j=0;j<ShareInfoLength;j++)
       {    
        if(key1==Database.Flight[j].from && key2==Database.Flight[j].to)
            {
            //var x = Database.Flight[j].FlightName+"         "+ Database.Flight[j].FlightNo+"         "+ Database.Flight[j].Departure+"         "+ Database.Flight[j].Arrival+"         "+ Database.Flight[j].Price ;
            //dd.push(x);
            dd.push(Database.Flight[j]);
            window.localStorage.setItem("output",JSON.stringify(dd));  
            }   
        }
        //console.log(dd);
        alert("Finding Flights..."); 
       window.location.assign("../Source/redirect.html");   
}

function display()
{
    var d="<pre>";
    var s="&nbsp &nbsp &nbsp "+"FlightName"+"&nbsp &nbsp &nbsp &nbsp"+"FlightNo"+"&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp"+"Departure"+"&nbsp &nbsp &nbsp &nbsp &nbsp&nbsp &nbsp"+"Arrival"+"&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp"+"Price";
	var f="</pre>";
	var o="<br>";
    var m="<br>";
    var html1=document.getElementById("Result").innerHTML;
    var disp= [];
    var disp = JSON.parse(window.localStorage.getItem("output"));
    console.log(disp[0]);
    for(i=0;i<disp.length;i++)
	{
    var l="&nbsp &nbsp"+'<input type="radio" value="disp[i]" id="radios" name="disp">'+"      "+disp[i].FlightName+'      '+disp[i].FlightNo+'         '+disp[i].Departure+'           '+disp[i].Arrival+'         '+disp[i].Price+"<br>";
	o+=l;
	o+=m;
	}
    document.getElementById("Result").innerHTML= html1+m+s+d+o+f;
}
 
  /*var html = '<table>';
  html += '<tr>';
  for( var j in disp[0] ) {
  html += '<th>' + j + '</th>';
  }
 html += '</tr>'
  for( var i = 0; i < disp.length; i++) {
  '<input type="button" value="button">'
  html += '<tr>';
  for( var j in disp[i] ) 
  {
    html += '<td>' + disp[i][j] + '</td>';
  }
  html += '</tr>';
  }
  html += '</table>';
  document.getElementById('Result').innerHTML = html1+m+html;
 }*/

function booking()
{
    var flight=new Array(); 
    flight = document.getElementsByName("disp");
    if (flight[0].checked == true) {
    alert("You have chosen a flight");
    console.log(flight[0].FlightName)
    }
    else if (flight[1].checked == true) {
    alert("You have chosen a flight");
    }
    else if (flight[2].checked == true) {
    alert("You have chosen a flight");
    }
    else if (flight[3].checked == true) {
    alert("You have chosen a flight");
    }
    else{
    alert("Choose a flight");
    }
}
