import SelectDr from "../0_Modules/SelectDr.js";
import BookSlot from "./BookSlot.js";
import DeleteData from "./Delete.js";
import TimeConverter from "./TimeConverter.js";
import SlotAvailability from "./SlotAvailablity.js";

async function UpdateData(target) {
    let cmp = confirm("Do you want to update date");
    if (!cmp) return false;
    let parent = target.closest(".mySlots"); // 
    let id = parent.id; // id == json data id

    // Get id from updating Slot
    let liDate = document.querySelector(`#date-${id} input`).value;
    let liTime = document.querySelector(`#time-${id} input`).value;
    let liSpecialtySelect = document.querySelector(`#specialtySelect-${id} input`).value;
    let liSelectedDr = document.querySelector(`#selectedDr-${id} input`).value;

    // change the Submit Button text to Update Appointment
    let submitBtn = document.querySelector("#submit");
    let boolAppointment = submitBtn.innerText;
    submitBtn.innerText = "Update Appointment"


    // Put value in Forn input fields for update
    document.querySelector("#phone").value = 13
    document.querySelector(`#time`).value = liTime;
    document.querySelector(`#date`).value = liDate;

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
        console.log("hello")
        SelectDr(specialtySelect, doctorSelect)
    });

   
    SelectDr(specialtySelect, doctorSelect)
    doctorSelect.value = doctorSelect.options[drIndex].value; //#################

    let previousDr = target;
    submitBtn.addEventListener("click", async (e) => {
        //========>> take data from form
        let time24 = document.querySelector("#time").value;
        let time = TimeConverter(time24);
        let date = document.querySelector("#date").value;
        let currentDr = doctorSelect.value;
        let appointmentURL = `http://localhost:3000/${currentDr}`;
        let obj = await fetch(appointmentURL);
        let data = await obj.json();
        let available = SlotAvailability(date, time, time24, data);
        if (!available) {
            return false;
        }

        BookSlot(currentDr, false)
        DeleteData(previousDr, false);
        submitBtn.innerText = boolAppointment;
        return true;
    })
    return true;
}
export default UpdateData;
