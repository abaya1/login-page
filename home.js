
window.addEventListener('load' , function(){

    console.log(this.document.cookie);
    var user = document.cookie.split(";")[0].split("=")[1];

    this.document.getElementById("usernameLabel").innerHTML = "Welcome " + user + "!";

    if(user == "")
    {
        this.alert("Please log in");
        window.location.href = "login.html";
    }

})

this.document.getElementById("logOutBtn").addEventListener('click' , function()
{
    window.location.href = "login.html";
    document.cookie="username=; password=; expires= Sat, 1 jan 2000 20:00:00 UTC";

});
