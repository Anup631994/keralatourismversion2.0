let name=document.getElementById("name");
let email=document.getElementById("email");
let error=document.getElementById("error");
let regexp=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let address=document.getElementById("address");
let phoneno=document.getElementById("phoneno");
var phone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
let check=document.getElementById("check");
let pwd=document.getElementById("pwd");
let city=document.getElementById("City");
let state=document.getElementsByClassName("form-select");
let zip=document.getElementById("Zip");
let code=/^\d{5}[-\s]?(?:\d{4})?$/;
let zipcod=document.getElementById("zipcod");







function vaildate()
{
    if(name.value=="")
    {
        alert("name cannot be empty");
        return false;
    }

    if(email.value=="")
    {   
        alert("email cannot be empty");
        return false;
    }
  
    if(pwd.value=="")
    {
        alert("password cannot be empty");
        return false;
    }

     if(Address.value=="")
     {
         alert("address cannot be empty");
         return false;
     }

  if(phoneno.value=="")
  {
      alert("phone number cannot be empty");
      return false;
  }
  
  if(city.value=="")
  {
      alert("city field cannot be empty");
      return false;
  }
  if(state.value=="")
  {
      alert("select a state");
      return false;
  }
  if(zip.value=="")
{
    alert("enter the pincode");
    return false;
}  
else{
   
    document.getElementById("myform").submit();
    return true;
}  
   

}


function zipcode()
{
    if(zip.value.match(code))
    {
        zipcod.innerHTML="vaild";
        zipcod.style.color="green";
        return true;

    }
    else{
        zipcod.innerHTML="invaild";
        zipcod.style.color="red";
        return false;
    }
}

function phonenocheck()
{
    if(phoneno.value.match(phone))
    {
       check.innerHTML="vaild";
       check.style.color="green";
      return true;  
        
    }
  else
    {
     check.innerHTML="invaild";
     check.style.color="red";
      return false;
    }
    
}

function emailcheck()
{
    if(regexp.test(email.value))
    {
       error.innerHTML="vaild";
       error.style.color="green";
        return true;
    }
    else
    {
        error.innerHTML="invaild";
        error.style.color="red";
        return false;
    }
}


function CheckPasswordStrength(password) {
    var password_strength = document.getElementById("password_strength");

    //TextBox left blank.
    if (password.length == 0) {
        password_strength.innerHTML = "";
        return;
    }

    //Regular Expressions.
    var regex = new Array();
    regex.push("[A-Z]"); //Uppercase Alphabet.
    regex.push("[a-z]"); //Lowercase Alphabet.
    regex.push("[0-9]"); //Digit.
    regex.push("[$@$!%*#?&]"); //Special Character.

    var passed = 0;

    //Validate for each Regular Expression.
    for (var i = 0; i < regex.length; i++) {
        if (new RegExp(regex[i]).test(password)) {
            passed++;
        }
    }

    //Validate for length of Password.
    if (passed > 2 && password.length > 8) {
        passed++;
    }

    //Display status.
    var color = "";
    var strength = "";
    switch (passed) {
        case 0:
        case 1:
            strength = "Weak";
            color = "red";
            break;
        case 2:
            strength = "Good";
            color = "darkorange";
            break;
        case 3:
        case 4:
            strength = "Strong";
            color = "green";
            break;
        case 5:
            strength = "Very Strong";
            color = "darkgreen";
            break;
    }
    password_strength.innerHTML = strength;
    password_strength.style.color = color;
}




