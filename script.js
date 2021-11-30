var profiles = [
    {
        username:"arron",
        password:"black"
    },
    {
        username:"sasuke",
        password:"lovesnaruto"
    },
    {
        username:"naruto",
        password:"lovessasuke"
    }
];


document.getElementById("loginBtn").addEventListener('click' , function()
{
    var username = document.getElementById("username").value;
    var password = document.getElementById("pass").value;
    var user = "username=" + username;

   
    for(var i = 0; i < profiles.length; i++){
        if(username == profiles[i].username && password == profiles[i].password)
        {
            document.cookie = user;
            console.log(document.cookie);
            window.location.href = "home.html";
            return;
        }
    }
    document.getElementById("errorsLabel").innerHTML = "Incorrect Username or Password";
})