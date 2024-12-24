let name = document.querySelector("#name");
let email = document.querySelector("#email");
let phone = document.querySelector("#phone");
let date = document.querySelector("#date");
let time = document.querySelector("#time");
let doctor = document.querySelector("#doctor");
let submit = document.querySelector("#submit");

submit.addEventListener("click", (e)=>{
    console.log(name.value,email.value,phone.value,date.value,time.value,doctor.value)
    alert("d");
})