import TimeConverter from "../0_Modules/TimeConverter.js"
import SlotAvailability from "./SlotAvailablity.js";


let login = document.querySelector("#login-info")
let email = localStorage.getItem("email");
let name = localStorage.getItem("fullname");
login.innerHTML = name + " ";
login.innerHTML += email

async function BookSlot(selectedDr) {
    //========>> take data from form
    let time24 = document.querySelector("#time").value;
    const time = TimeConverter(time24);
    const date = document.querySelector("#date").value;
    const phone = document.querySelector("#phone").value;

    let appointmentURL = `http://localhost:3000/${selectedDr}`;
    let allAppointementURL = `http://localhost:3000/All`
    let petientsAppointementURl = `http://localhost:3000/Patients`
    let obj = await fetch(appointmentURL);
    let data = await obj.json();

    // Checking Slot is Available or not    
    let ans = SlotAvailability(date, time, time24, data);
    if (!ans) {
        return false;
    }

    // =====> try to POST DATA
    try {
        // In Docter DATABSE
        let response = await fetch(appointmentURL, {
            method: "POST",
            body: JSON.stringify({ date, time, phone }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        // In Hospital DATABSE
        let allResponse = await fetch(allAppointementURL, {
            method: "POST",
            body: JSON.stringify({ date, time, phone, selectedDr }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        let specialtySelect = document.querySelector("#specialty").value;

        // In Hospital DATABSE
        let patientsResponse = await fetch(petientsAppointementURl, {
            method: "POST",
            body: JSON.stringify({ date, time, selectedDr, specialtySelect, email }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (response.ok || allResponse.ok || patientsResponse) alert("appointment fixed");
    }
    catch (error) {
        alert(error)
    }
}

export default BookSlot;