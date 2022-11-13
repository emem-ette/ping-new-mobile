function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
    let txt = document.getElementById("demo").innerHTML= "Valid email address!";
    
//alert("Valid email address!");
document.form1.email.focus();
return true;
}
else
{
    let text = document.getElementById("demo").innerHTML = "please provide a valid email address";
//alert("You have entered an invalid email address!");
document.form1.email.focus();
return false;
}
}