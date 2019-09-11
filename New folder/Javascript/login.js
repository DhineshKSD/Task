var name= new Array();
var pw = new Array();
// storing input from register-form
function validate_reg()
{
name = (document.getElementById('name').value);
pw = (document.getElementById('pw').value);

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
    addToLocalStorageArray('name', name)
    addToLocalStorageArray('pw', pw)
    alert("Registered Successfully");
}
}

var addToLocalStorageArray = function (name, value) {
    // Get the existing data
    var existing=localStorage.getItem(name);
    // If no existing data, create an array
    // Otherwise, convert the localStorage string to an array
    existing=existing?existing.split(',') : [];
    // Add new data to localStorage Array
    existing.push(value);
    // Save back to localStorage
    localStorage.setItem(name, existing.toString());
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
        window.location.assign("../source/index.html")
    }
    else if(userName ==""||userPw =="")
    {
        alert('please enter the required fields');
    }
    else {
    alert('ERROR');
    }

}
