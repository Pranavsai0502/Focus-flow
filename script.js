// ===============================
// Show / Hide Password
// ===============================

const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

if(togglePassword){

    togglePassword.addEventListener("click",function(){

        if(passwordInput.type==="password"){

            passwordInput.type="text";

            togglePassword.classList.remove("fa-eye");
            togglePassword.classList.add("fa-eye-slash");

        }
        else{

            passwordInput.type="password";

            togglePassword.classList.remove("fa-eye-slash");
            togglePassword.classList.add("fa-eye");

        }

    });

}

// ===============================
// Login
// ===============================

const loginForm=document.getElementById("loginForm");

if(loginForm){

loginForm.addEventListener("submit",function(e){

e.preventDefault();

const email=document.getElementById("email").value.trim();

const password=document.getElementById("password").value.trim();

const user=JSON.parse(localStorage.getItem("focusflowUser"));

if(user==null){

alert("No account found. Please Sign Up first.");

return;

}

if(email===user.email && password===user.password){

localStorage.setItem("isLoggedIn","true");

alert("Login Successful!");

window.location.href="dashboard.html";

}
else{

alert("Invalid Email or Password");

}

});

}
// ===============================
// Signup
// ===============================

const signupForm = document.getElementById("signupForm");

if (signupForm) {

    signupForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const confirmPassword = document.getElementById("confirmPassword").value.trim();

        if (password !== confirmPassword) {

            alert("Passwords do not match!");
            return;

        }

        const user = {

            name,
            email,
            password

        };

        localStorage.setItem("focusflowUser", JSON.stringify(user));

        alert("Account created successfully!");

        window.location.href = "login.html";

    });

}