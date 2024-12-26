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
async function appointment(selectedDr) {
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
    appointment(doctor);
});
















// // input selection
// const name = document.querySelector("#name");
// const date = document.querySelector("#date");
// const phone = document.querySelector("#phone");
// const time = document.querySelector("#time");
// const specialty = document.querySelector("#specialty");
// const doctor = document.querySelector("#doctor");

// // input value selection
// const nameVal = document.querySelector("#name").value;
// const dateVal = document.querySelector("#date").value;
// const phoneVal = document.querySelector("#phone").value;
// const timeVal = document.querySelector("#time").value;
// const specialtyVal = document.querySelector("#specialty").value;
// const doctorVal = document.querySelector("#doctor").value;
// if (!nameVal || !dateVal || !phoneVal ||
//     !timeVal || specialtyVal == "Select"
//     || doctorVal == "Select") {
//     alert("all field required");
//     let alertColor = "3px solid hsl(0, 100.00%, 50%)"

//     //    if selected then default
//     if (nameVal) name.style.borderBottom = "none";
//     if (phoneVal) phone.style.borderBottom = "none";
//     if (dateVal) date.style.borderBottom = "none";
//     if (timeVal) time.style.borderBottom = "none";
//     if (specialtyVal) specialty.style.borderBottom = "none";
//     if (doctorVal) doctor.style.borderBottom = "none";

//     //    if not-selected then border red
//     if (!nameVal) name.style.borderBottom = alertColor;
//     else if (!phoneVal) phone.style.borderBottom = alertColor;
//     else if (!dateVal) date.style.borderBottom = alertColor;
//     else if (!timeVal) time.style.borderBottom = alertColor;
//     else if (specialtyVal == "Select") specialty.style.borderBottom = alertColor;
//     else if (doctorVal == "Select") doctor.style.borderBottom = alertColor;
// }
