import SelectDr from "../0_Modules/SelectDr.js";
import BookSlot from "./BookSlot.js";
import DeleteData from "./Delete.js";

async function UpdateData(target,) {
    let cmp = confirm("Do you want to update date");
    if (!cmp) return false;

    

    let parent = target.closest(".mySlots");
    let id = parent.id;
    console.log(id)
    console.log(`#date-${id}`)
    let liDate = document.querySelector(`#date-${id} input`).value;
    let liTime = document.querySelector(`#time-${id} input`).value;

    // change the Submit Button text to Update Appointment
    let submitBtn = document.querySelector("#submit");
    submitBtn.innerText = "Update Appointment"

    let liSpecialtySelect = document.querySelector(`#specialtySelect-${id} input`).value;
    let liSelectedDr = document.querySelector(`#selectedDr-${id} input`).value;
    console.log("===> ", liTime, liDate, liSpecialtySelect, liSelectedDr)
    console.log("---------------------")
    // Putting value Again in Input fields for update
    let phone = document.querySelector("#phone").value = 13
    let time = document.querySelector(`#time`).value = liTime;
    let date = document.querySelector(`#date`).value = liDate;

    let spcIndex; //----> index for Speciality
    let drIndex = 0; //----> index for Doctor
    if (liSpecialtySelect == "cardiology") {
        spcIndex = 1;
        if (liSelectedDr == "Dr-Smith") drIndex = 1;
        else if (liSelectedDr == "Dr-Johnson") drIndex = 2;
        else if (liSelectedDr == "Dr-Lee") drIndex = 3;

    }
    else if (liSpecialtySelect == "neurology") {
        spcIndex = 2;
        if (liSelectedDr == "Dr-Brownh") drIndex = 1;
        else if (liSelectedDr == "Dr-Davis") drIndex = 2;
        else if (liSelectedDr == "Dr-Miller") drIndex = 3;
    }
    else if (liSpecialtySelect == "orthopedics") {
        spcIndex = 3;
        if (liSelectedDr == "Dr-Lee") drIndex = 1;
        else if (liSelectedDr == "Dr-Smith") drIndex = 2;
        else if (liSelectedDr == "Dr-Brown") drIndex = 3;
    }

    let specialtySelect = document.querySelector("#specialty");
    specialtySelect.value = specialtySelect.options[spcIndex].value;
    // Take value from Appointment and put in Input Field
    let doctorSelect = document.querySelector("#doctor");

    specialtySelect.addEventListener("change", () => {
        // ====> SelectDr
        SelectDr(specialtySelect, doctorSelect)
    });
    SelectDr(specialtySelect, doctorSelect)
    doctorSelect.value = doctorSelect.options[drIndex].value;

    let previousDr = doctorSelect.value;
    // alert("previous" + previousDr); //-->value of previous Doctore

    // FETCH data from Patient -> checking while update
    console.log("===")
    let appointmentURL = `http://localhost:3000/${previousDr}`;
    let obj = await fetch(appointmentURL);
    let data = await obj.json();
    submitBtn.addEventListener("click", () => {
        let currentDr = doctorSelect.value;
      
        cmp = confirm("Do you want to Save data");
        if (!cmp) return false;
        DeleteData(target, false);
    })
}
export default UpdateData;







// let time24 = document.querySelector("#time").value;
// time = TimeConverter(time24);
// date = document.querySelector("#date").value;
// phone = document.querySelector("#phone").value;
// let specialtySelect = document.querySelector("#specialty").value;