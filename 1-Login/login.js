// localStorage.clear();
let login = document.querySelector("#login");
let sign = document.querySelector("#sign-up");
let forgetPassword = document.querySelector(".forget-password");
let submitOTP = document.querySelector("#submit-btn");
let generate = document.querySelector("#generate-btn");
let otpInput = document.querySelector("#otp");
let forgetEmail = document.querySelector("#emailF");

let firstName = document.querySelector("#first-name");
let lastName = document.querySelector("#last-name");
let forgetPage = document.querySelector("#forget_page");
let loginPage = document.querySelector("#login_page");
console.log(otpInput)

sign.addEventListener("click", (e) => {
    window.location.href = "registration.html";
});

// <<<<<<<<<--OTP-Forget-->>>>>>>>>>>>>>
forgetPassword.addEventListener("click", () => {
    console.log("i am in ");
    loginPage.style.zIndex = "0";
    loginPage.style.opacity = "0";

    forgetPage.style.zIndex = "1";
    forgetPage.style.opacity = "1";

    generate.addEventListener("click", (e) => {

        if (forgetEmail.value != localStorage.email) {
            let Confirm = confirm("You don't have Account, do you want to create");
            window.location.href = "registration.html"
        }

        if (firstName.value != localStorage.firstName || lastName.value != localStorage.lastName) {
            alert("provide infomatin not correct")
        } else {

            generate.style.display = "none";
            otpInput.style.display = "inline";
            submitOTP.style.width = "40%";
            submitOTP.style.display = "block";

            let otp = "";
            for (let i = 0; i < 4; i++) {
                otp += Math.trunc(Math.random() * 4);
            }

            localStorage.setItem("forgetOtp", otp);
            console.log(`Do not share OTP to anyone: %c${otp}`, 'color: orange');
            // <<<<<<<<<--submit-Forget-OTP->>>>>>>>>>>>>>

            submitOTP.addEventListener("click", (e) => {
                if (otpInput.value != localStorage.forgetOtp) {
                    alert("Wrong OTP try again");
                    return;
                }
                alert(`Your password  is(${localStorage.password})`);
                loginPage.style.zIndex = "1";
                loginPage.style.opacity = "1";

                forgetPage.style.zIndex = "0";
                forgetPage.style.opacity = "0";
            })
        }
    })
})
// =====================================================
login.addEventListener("click", (e) => {
    {
        console.log(e.target)
        e.preventDefault();
        let email = document.getElementById("email").value;
        console.log("value", email)
        let password = document.getElementById("password").value;
        let form = document.getElementById("form");
        console.log(form, email, password)
        if (email == "" || password == "") {
            e.preventDefault();
            alert(" fieild are mandetry");
            return;
        }
        else if (email != localStorage.email && password != localStorage.password) {
            e.preventDefault();
            console.log("local value", localStorage.email)
            console.log(localStorage.email, localStorage.password)
            let result = confirm("You don't have an account, do you want to create");
            if (result) window.location.href = "registration.html";
            else return;
        }
        else if (email == localStorage.email && password != localStorage.password) {
            alert("Wrong password");
            return;
        }
        else {
            alert("congratulation you are succesfuly log in ")
            window.location.href = "../index.html";
        }
    }

});



// TAKE THEME FROM LOCAL STORAGE AND ADD CLASS NAME
document.body.className = localStorage.theme;