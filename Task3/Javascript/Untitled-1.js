 
// storing input from register-form
function validate_reg()
{
var name = document.getElementById('name').value;
var pw = document.getElementById('pw').value;

if(name == "")
{
    alert("Please enter Name");
    return false;
}
else if(pw == "")
{
    alert("Please enter Password");
    return false;
}
else{
    localStorage.setItem("name", name);
    localStorage.setItem("pw", pw);
    alert("Registered Successfully");
}
}
function validate_log()
{
    // stored data from the register-form
    var storedName = localStorage.getItem("name");
    var storedPw = localStorage.getItem("pw");

    // entered data from the login-form
    var userName = document.getElementById('userName').value;
    var userPw = document.getElementById('userPw').value;

    // check if stored data from register-form is equal to data from login form
    if(userName == storedName && userPw == storedPw) {
        alert('You are logged in.');
        window.location.assign("index.html")
    }
    else if(userName ==""||userPw =="")
    {
        alert('please enter the required fields');
    }
    else {
    alert('ERROR');
    }

}
