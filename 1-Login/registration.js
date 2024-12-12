// localStorage.clear();
let submit = document.querySelector("#submit-btn");
let generate = document.querySelector("#generate-btn");
let otpInput = document.querySelector("#otp");
console.log(submit, generate, otpInput)
generate.addEventListener("click", async (e) => {
    e.preventDefault();

    // ---> take the data of all input
    let email = document.getElementById("email").value;
    let firstName = document.getElementById("first-name").value;
    let lastName = document.getElementById("last-name").value;
    let password = document.getElementById("password").value;
    let cnfpsw = document.getElementById("confirm-password").value;
    // ---> if inputs are empty
    if (firstName == "" || email == "" || password == "" || cnfpsw == "") {
        alert("all fieild are mandotry");
    }
    else if (password !== cnfpsw) {
        // ---> if password && confirm-password not don't match
        alert("Password not match");
        return;
    }
    else {
        //  <<<<<<<<<<-IF EVERY-THING-IS-FINE ->>>>>>>>>>>
        // ---> generating otp
        let otp = "";
        for (let i = 0; i < 4; i++) {
            otp += Math.trunc(Math.random() * 10);
        }
        localStorage.setItem("otp", otp);
        // styling on buttons  
        generate.style.display = "none";
        otpInput.style.display = "inline";
        submit.style.width = "40%";
        submit.style.display = "block";

        console.log(`Do not share OTP to anyone: %c${otp}`, 'color: orange');
        alert("check your Gmail")
        // ---> while registration store all data in localStorage
        localStorage.setItem("firstName", firstName);
        localStorage.setItem("lastName", lastName);
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);

        submit.addEventListener("click", (e) => {
            e.preventDefault();
            // ---> in the case of OTP not match 
            if (otpInput.value != localStorage.otp) {
                alert("Wrong OTP try again");
            } else {
                // ---> in the case of OTP match render to loginpage 

                alert("New Account has created");
                window.location.href = "login.html"
            }

        })
    }
});





// TAKE THEME FROM LOCAL STORAGE AND ADD CLASS NAME
document.body.className = localStorage.theme;