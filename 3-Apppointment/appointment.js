// ############### <Doctore and Specialty option Selection> ###############
let specialtySelect = document.querySelector("#specialty");
let doctorSelect = document.querySelector("#doctor");
let form = document.querySelector("#appointment-form");

const doctors = {
    cardiology: ['Dr. Smith', 'Dr. Johnson', 'Dr. Lee'],
    neurology: ['Dr. Brown', 'Dr. Davis', 'Dr. Miller'],
    orthopedics: ['Dr. Lee', 'Dr. Smith', 'Dr. Brown']
};

specialtySelect.addEventListener("change", () => {
    const specialtySelected = specialtySelect.value;
    doctorSelect.innerHTML = " "; //--> for reset the old selections
    doctorSelect.innerHTML = `<option value=""> Select ${specialtySelected.charAt(0).toUpperCase() + specialtySelected.slice(1)} Doctors</option>`;
    doctors[specialtySelected].forEach((doctor) => {
        let option = document.createElement("option");
        option.textContent = doctor;
        doctorSelect.appendChild(option);
    })
});

// ############################## FIX-APPOINTMENT ##############################

// ---------> 24HOURS -> 12HOURS 
function timeConvert(time24) {

    let [hour12, minutes] = time24.split(":");
    let period = "AM";
    if (hour12 >= 12) {
        period = "PM";
        if (hour12 > 12) hour12 -= 12;
    } else if (hour12 === 0) {
        hour12 = 0;
    } else if (hour12 < 10) {
        hour12 = hour12;
    }
    return `${hour12}:${minutes} ${period}`;
}

// ############################## POST-DATA ##############################
async function BoolSlot(selectedDr) {
    //========>> take data from form
    let time24 = document.querySelector("#time").value;
    const time = timeConvert(time24);
    alert(time);
    const date = document.querySelector("#date").value.trim();
    const phone = document.querySelector("#phone").value.trim();

    let appointmentURL = `http://localhost:3000/${selectedDr}`;
    let obj = await fetch(appointmentURL);
    let data = await obj.json();
    // 1. =====> if slot is already booked  
    let ans = data.every((e) => {
        if ((e.date == date) && e.time == time) return false
        return true;
    });
    //  if ans = false;
    if (!ans) {
        alert("Chose diffrent slot dr. has appointed")
        return false;
    }
    // 2. ===============> Sunday on the date or not (only Emergency Dr. present)
    // 3. ===============> Lunch Time (only Emergency Dr. present) 
    // 4. ===============> night-shift (only Emergency Dr. present) 
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

let submit = document.querySelector("#submit");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const doctor = doctorSelect.value;
    BoolSlot(doctor);
});


