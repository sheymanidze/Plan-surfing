var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(event) {
    event.preventDefault()
    var username = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if (username == "admin" && password == "user") {
        window.location.href = "./index.html"; // Redirecting to other page.
        return false;
    }
    else {
        attempt--;// Decrementing by one.
        alert("You have left " + attempt + " attempt;");
        // Disabling fields after 3 attempts.
        if (attempt == 0) {
            document.getElementById("email").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
    }
}
document.getElementById("logIn").addEventListener('click', validate)


