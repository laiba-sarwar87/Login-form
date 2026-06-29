
let isLoginMode = false;
function toggleMode() {
    isLoginMode = !isLoginMode;

    let username = document.getElementById("username");
    let confirmPass = document.getElementById("confirmPassword");
    let actionBtn = document.getElementById("actionBtn");
    let toggleLink = document.getElementById("toggleLink");
    let msg = document.getElementById("msg");

    if (isLoginMode) {
        username.classList.add("hidden");
        confirmPass.classList.add("hidden");
        actionBtn.innerText = "Log in";
        toggleLink.innerHTML = `Don't have an account? <a href="#" onclick="toggleMode()">Sign up</a>`;
        msg.innerText = "";
    } else {

        username.classList.remove("hidden");
        confirmPass.classList.remove("hidden");
        actionBtn.innerText = "Sign Up";
        toggleLink.innerHTML = `Already have an account? <a href="#" onclick="toggleMode()">Log in</a>`;
        msg.innerText = "";
    }
}

function handleAction() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let msg = document.getElementById("msg");

    if (isLoginMode) {        
        if (email === "" || password === "") {
            msg.innerText = "❌ Write the email and password!";
            msg.style.color = "red";
            return;
        }
        if (!email.includes("@") || !email.includes(".")) {
            msg.innerText = "❌ Write correct email!";
            msg.style.color = "red";
            return;
        }
        msg.innerText = "✅ Welcome ! You are logged in.";
        msg.style.color = "#032041";
    } else {

        let username = document.getElementById("username").value;
        let confirm = document.getElementById("confirmPassword").value;

        if (email === "" || username === "" || password === "" || confirm === "") {
            msg.innerText = "❌ Please fill all fields!";
            msg.style.color = "red";
            return;
        }
        if (!email.includes("@") || !email.includes(".")) {
            msg.innerText = "❌ write correct email adress!";
            msg.style.color = "red";
            return;
        }
        if (password.length < 6) {
            msg.innerText = "❌ Write the password that has 6+ character!";
            msg.style.color = "red";
            return;
        }
        if (password !== confirm) {
            msg.innerText = "❌ Password is not matched!";
            msg.style.color = "red";
            return;
        }
        msg.innerText = " Welcome 🥰 " + username + " ! Your Account  is created.";
        msg.style.color = "#022143";
    }
}
