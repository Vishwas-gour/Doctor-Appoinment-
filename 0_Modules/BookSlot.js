import TimeConverter from "../0_Modules/TimeConverter.js"
import SlotAvailability from "./SlotAvailablity.js";

// LOGIN INFO
// let login = document.querySelector("#login-info")
let email = localStorage.getItem("email");
// let name = localStorage.getItem("fullname");
// login.innerHTML = name + " ";
// login.innerHTML += email

async function BookSlot(selectedDr, checkByUpdateOrBookStot) {
    //  checkByUpdateOrBookStot == true when called by APPOINTMENT, == false when called by UPDATE

    //========>> take data from form
    let time24 = document.querySelector("#time").value;
    let time = TimeConverter(time24);
    let date = document.querySelector("#date").value;
    const phone = document.querySelector("#phone").value;
    let specialtySelect = document.querySelector("#specialty").value;

    let appointmentURL = `http://localhost:3000/${selectedDr}`;
    let obj = await fetch(appointmentURL);
    let data = await obj.json();

    let petientsAppointementURl = `http://localhost:3000/Patients`
    // Checking Slot is Available or not    

    if (checkByUpdateOrBookStot) {
        let available = SlotAvailability(date, time, time24, data);
        if (!available) {
            return false;
        }
    }


    // =====> try to POST DATA
    let postId;
    try {
        // In Docter DATABSE
        let responseDocter = await fetch(appointmentURL, {
            method: "POST",
            body: JSON.stringify({ date, time, phone }),
            headers: { "Content-Type": "application/json" }
        })
            // .then only for the purpose of getting id from POST data
            .then(response => response.json()) // Parse the JSON response
            .then(post => {
                // take id that posts 
                postId = post.id
            }).catch(error => {
                console.error("Error:", error);
            });


        // In Petient DATABSE
        let patientsResponse = await fetch(petientsAppointementURl, {
            method: "POST",
            body: JSON.stringify({ id: postId, date, time, selectedDr, specialtySelect, email, phone }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (patientsResponse.ok) {
            if (checkByUpdateOrBookStot) {
                alert("appointment fixed");
            }
            else {
                alert("appointment Updated");
            }
            return true;
        }
    }
    catch (error) {
        alert("Response Error" + error)
    }
    return true;
}
export default BookSlot;