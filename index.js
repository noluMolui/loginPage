let now = new Date();
let p = document.querySelector("p");
let date = now.toLocaleString();
p.textContent = date;

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();  

   
    alert("An email with steps to reset your password has been sent!");
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    var username = event.target.username.value;
    var password = event.target.password.value;

    if(username && password) {
        window.location.href = event.target.action;
    } else {
        alert('Please enter both username and password.');
    }
});