import TimeConverter from "../0_Modules/TimeConverter.js"
import SlotAvailability from "./SlotAvailablity.js";

async function BookSlot(selectedDr) {
    //========>> take data from form
    let time24 = document.querySelector("#time").value;
    const time = TimeConverter(time24);
    const date = document.querySelector("#date").value;
    const phone = document.querySelector("#phone").value;

    let appointmentURL = `http://localhost:3000/${selectedDr}`;
    let obj = await fetch(appointmentURL);
    let data = await obj.json();

    // Checking Slot is Available or not    
    let ans = SlotAvailability(date, time, time24, data);
    if (!ans) {
        return false;
    }
    
    // =====> try to POST DATA
    try {
        let response = await fetch(appointmentURL, {
            method: "POST",
            body: JSON.stringify({ date, time, phone }),
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (response.ok) alert("appointment fixed");
    }
    catch (error) {
        alert(error)
    }
}

export default BookSlot;