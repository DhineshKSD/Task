/*var username= ["1","2"];
var password= ["1","2"];
var urArray= []; var pwarray=[];
flag=true;

function  validate_reg() 
{

if(window.localStorage["username"] !=null)
 
urArray = JSON.parse(window.localStorage["username"]);
urArray.push(document.getElementById("name").value);
window.localStorage["username"] = JSON.stringify(urArray);

if(window.localStorage["password"] !=null)

pwarray=JSON.parse(window.localStorage["password"]);
pwarray.push(document.getElementById("pw").value);
window.localStorage["password"] = JSON.stringify(pwarray);

alert("Registered Succesffuly");
 
}

function validate_log()
{
var username1=JSON.parse(localStorage.getItem("username"));
var password1=JSON.parse(localStorage.getItem("password"));
console.log(username1);
var usernameInput=document.getElementById("userName").value;
var passwordInput=document.getElementById("userPw").value;

if(usernameInput!=""&&passwordInput!="") 
{
for(i=0;i<username1.length;i++){
if(usernameInput==username1[i] &&passwordInput==password1[i]) 
    {
    flag=true;
    break;
    } 
    else 
    {
    flag=false;
    }
    }

    }
    if(flag==true)
    {
    alert('Logged in');
    window.location.assign("index.html");
    }
    else{
    alert('Invalid Username and password');
    document.getElementById("userName").value="";
    document.getElementById("userPw").value="";
    }
}
*/

function SaveItem() {
  
    
    var appname = document.forms.PassportForm.name.value;
    var mail = document.forms.PassportForm.mail.value;
    var phno = document.forms.PassportForm.phno.value;
    var dob = document.forms.PassportForm.dob.value;
    var EQ = document.forms.PassportForm.EQ.value;
    var fname = document.forms.PassportForm.fname.value;
    var mname = document.forms.PassportForm.mname.value;
    var POB = document.forms.PassportForm.POB.value;
    var gender = document.forms.PassportForm.gender.value;
    var address = document.forms.PassportForm.address.value;
    var zip = document.forms.PassportForm.zip.value;
    if(appname == "")
{
    alert("Please enter the name");
}
else if (mail == "")
{
    alert("Please enter your mail ID");
}else if (phno == "")
{
    alert("Please enter your phone number");
}
else if(EQ=="")
{
    alert("Enter your Educational Qualifications");
}
else if(fname=="")
{
    alert("Enter your Father's Name");
}
else if(mname=="")
{
    alert("Enter your Mothers's Name");
}
else if(POB == "")
{
    alert("Enter your Place of Birth");
}
else if(gender=="")
{
    alert("Enter your Gender");
}
else if(address=="")
{
    alert("Enter your address");
}
else if(zip=="")
{
    alert("Enter the ZIP Code");
}
    localStorage.setItem('appname', appname); 
    localStorage.setItem('mail', mail); 
    localStorage.setItem('phno', phno); 
    localStorage.setItem('EQ', EQ); 
    localStorage.setItem('fname', fname); 
    localStorage.setItem('mname', mname); 
    localStorage.setItem('POB', POB); 
    localStorage.setItem('gender', gender); 
    localStorage.setItem('address', address); 
    localStorage.setItem('zip', zip); 
    localStorage.setItem('dob', dob); 
    window.location.assign("track.html");
    doShowAll(); 
}
 
// dynamically draw the table
 
function doShowAll() {
       var key =0;
       var list = "<tr><th>FullName</th><th>Email</th><th>Phone Number</th><th>Educational Qualifications</th><th>Fathers Name</th><th>Mothers Name</th><th>Place of Birth</th><th>Gender</th><th>Address</th><th>Zipcode</th><th>Date of Birth</th><th>Status</th></tr>\n";
           key =  localStorage.getItem('appname');
           key1 = localStorage.getItem('mail');
           key2= localStorage.getItem('phno');
           key3 = localStorage.getItem('EQ');
           key4 = localStorage.getItem('fname');
           key5 = localStorage.getItem('mname');
           key6 = localStorage.getItem('POB');
           key7 =localStorage.getItem('gender');
           key8 = localStorage.getItem('address');
           key9 = localStorage.getItem('zip');
           key10 = localStorage.getItem('dob');
           list += "<tr><td>" + key + "</td>\n<td>"
           + key1 +"</td>\n<td>"+key2+"</td>\n<td>"+key3+"</td>\n<td>"+key4+"</td>\n<td>"+key5+"</td>\n<td>"+key6+"</td>\n<td>"+key7+"</td>\n<td>"+key8+"</td>\n<td>"+key9+ "</td>\n<td>"+key10+"</td><td><select><option>select</option><option>Approved</option><option>Rejected</option></select></td></tr>\n";
   
       
       document.getElementById('list').innerHTML = list;
}


