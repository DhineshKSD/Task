var count=[];
var user= []; var passwrd=[];
var id=[];
flag=true;

function  validate_reg() 
{
if((document.getElementById("name").value)=="")
{
    alert("please enter username");
}
else if(document.getElementById("pw").value=="")
{
    alert("please enter password");
}
else
{  
if(window.localStorage["username"] !=null)
 
user = JSON.parse(window.localStorage["username"]);
user.push(document.getElementById("name").value);
window.localStorage["username"] = JSON.stringify(user);


if(window.localStorage["password"] !=null)

passwrd=JSON.parse(window.localStorage["password"]);
passwrd.push(document.getElementById("pw").value);
window.localStorage["password"] = JSON.stringify(passwrd);

alert("Registered Succesffuly");
}
}

function validate_log()
{
var username1=JSON.parse(localStorage.getItem("username"));
var password1=JSON.parse(localStorage.getItem("password"));
console.log(username1);
var usernameInput=document.getElementById("userName").value;
var passwordInput=document.getElementById("userPw").value;

if(usernameInput=="")
{
    alert("please enter username");
}
else if(passwordInput=="")
{
    alert("please enter password");
}
else
{
if(usernameInput!=""&&passwordInput!="") 
{
for(i=0;i<username1.length;i++){
if(usernameInput==username1[i] && passwordInput==password1[i]) 
    {
    flag=true;
    var id=i;
    localStorage.setItem("user_id",id);
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
    alert('Logging in');
    window.location.assign("index.html");
    }
    else{
    alert('Invalid Username and password');
    document.getElementById("userName").value="";
    document.getElementById("userPw").value="";
    }
}
}