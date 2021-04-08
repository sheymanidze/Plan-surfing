var Form0 = document.getElementById('form0');
var Form1 = document.getElementById('form1');
var Form2 = document.getElementById('form2');
var Form3 = document.getElementById('form3');

var Login = document.getElementById('logIn');
var Next1 = document.getElementById('next1');
var Next2 = document.getElementById('next2');
var Back1 = document.getElementById('back1');
var Back2 = document.getElementById('back2');

var progress = document.getElementById('progress')

Next1.onclick = function(){
    Form1.style.left = '-450px';
    Form2.style.left = '40px'; 
    progress.style.width = '240px' 
}

Back1.onclick = function(){
    Form1.style.left = '40px';
    Form2.style.left = '450px'; 
    progress.style.width = '120px';
}

Next2.onclick = function(){
    Form2.style.left = '-450px';
    Form3.style.left = '40px';
    progress.style.width = '360px'; 
}

Back2.onclick = function(){
    Form2.style.left = '40px';
    Form3.style.left = '450px';
    progress.style.width = '240px'  
}


var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(event) {
    event.preventDefault()
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "admin" && password == "user") {
        window.location.href = "./home.html"; // Redirecting to other page.
        return false;
    }
    else {
        attempt--;// Decrementing by one.
        alert("You have left " + attempt + " attempt;");
        // Disabling fields after 3 attempts.
        if (attempt == 0) {
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
    }
}
document.getElementById("login-submit").addEventListener('click', validate)