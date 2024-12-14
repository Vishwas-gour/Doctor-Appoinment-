// localStorage.clear();
let submit = document.querySelector("#submit-btn");
let generate = document.querySelector("#generate-btn");
let otpInput = document.querySelector("#otp");
generate.addEventListener("click", async (e) => {
    // e.preventDefault();
    // ---> take the data of all input
    let email = document.getElementById("email").value;
    let fullName = document.getElementById("full-name").value;
    let password = document.getElementById("password").value;
    let cnfpsw = document.getElementById("confirm-password").value;
    let id;
    // ---> if inputs are empty
    if (fullName == "" || email == "" || password == "" || cnfpsw == "") {
        alert("all fieild are mandotry");
    }
    else if (password !== cnfpsw) {
        // ---> if password && confirm-password not don't match
        alert("Password not match");
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
        submit.style.display = "inline";

        console.log(`Do not share OTP to anyone: %c${otp}`, 'color: orange');
        alert("check your Gmail");
        // --->  Set Doctor data in json
        let url = "http://localhost:3000/Doctor";
        let obj = fetch(url);
        try {
            let resposnse = await fetch(url, {
                method: "POST",
                body: JSON.stringify({ id, email, fullName, password }),
                headers: {
                    "Contect-Type": "application/json; charset=UTF-8"
                }
            });
        }
        catch (error) {
            alert(error);
        }
        console.log(response);
    }
});
submit.addEventListener("click", (e) => {
    e.preventDefault();
    // ---> in the case of OTP not match 
    if (otpInput.value != localStorage.otp) {
        alert("Wrong OTP try again");
    }
    else {
       // ---> in the case of OTP match render to loginpage 
       alert("New Account has created");
       window.location.href = "login.html"
    }
});