// localStorage.clear();
let submit = document.querySelector("#submit-btn");
let generate = document.querySelector("#generate-btn");
let otpInput = document.querySelector("#otp");
console.log(submit, generate, otpInput);

generate.addEventListener("click", async (e) => {
    e.preventDefault();

    // ---> take the data of all input
    let email = document.getElementById("email").value;
    let fullname = document.getElementById("full-name").value;
    let password = document.getElementById("password").value;
    let cnfpsw = document.getElementById("confirm-password").value;

    // ---> if inputs are empty
    if (fullname === "" || email === "" || password === "" || cnfpsw === "") {
        alert("All fields are mandatory");
    } else if (password !== cnfpsw) {
        // ---> if password && confirm-password don't match
        alert("Passwords do not match");
        return false;
    } else {
        //  <<<<<<<<<<-IF EVERYTHING IS FINE ->>>>>>>>>>>
        // ---> generating otp
        let otp = Math.floor(1000 + Math.random() * 9000); // Generates a 4-digit OTP
        localStorage.setItem("otp", otp);

        // Styling on buttons
        generate.style.display = "none";
        otpInput.style.display = "inline";
        submit.style.width = "40%";
        submit.style.display = "block";

        console.log(`Do not share OTP with anyone: %c${otp}`, "color: orange");
        alert("Check your Gmail");

        // ---> Store all data in localStorage
        localStorage.setItem("fullname", fullname);
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
    }
});

// ---> Submit button click handler
submit.addEventListener("click", (e) => {
    e.preventDefault();
    // ---> in the case of OTP not matching
    if (otpInput.value != localStorage.getItem("otp")) {
        alert("Wrong OTP. Try again.");
    } else {
        // ---> in the case of OTP match, render to login page
        alert("New account has been created");
        window.location.href = "login.html";
    }
});

// TAKE THEME FROM LOCAL STORAGE AND ADD CLASS NAME
document.body.className = localStorage.getItem("theme") || "";
