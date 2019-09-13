var username= [];
var password= [];
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