import SelectDr from "../0_Modules/SelectDr.js";
import DeleteData from "./Delete.js";

async function UpdateData(target) {
    let cmp = confirm("Do you want to update date");
    if(!cmp)return false;

    // Delete the current Appointment
    console.dir(target)
    
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
    let drIndex; //----> index for Doctor
    if (liSpecialtySelect == "Cardiology") {
        spcIndex = 1;
        if (liSelectedDr == "Dr-Smith") drIndex = 1;
        else if (liSelectedDr == "Dr-Johnson") drIndex = 2;
        else if (liSelectedDr == "Dr-Lee") drIndex = 3;
        
    }
    else if (liSpecialtySelect == "Neurology") {
        spcIndex = 2;
        if (liSelectedDr == "Dr-Brownh") drIndex = 1;
        else if (liSelectedDr == "Dr-Davis") drIndex = 2;
        else if (liSelectedDr == "Dr-Miller") drIndex = 3;
    }
    else {
        spcIndex = 3;
        if (liSelectedDr == "Dr-Lee") drIndex = 1;
        else if (liSelectedDr == "Dr-Smith") drIndex = 2;
        else if (liSelectedDr == "Dr-Brownh ") drIndex = 3;
    }
    
    let specialtySelect = document.querySelector("#specialty");
    let doctorSelect = document.querySelector("#doctor");
    // Take value from Appointment and put in Input Field
    
    specialtySelect.value = specialtySelect.options[spcIndex].value;
    SelectDr(specialtySelect, doctorSelect)
    
    doctorSelect.value = doctorSelect.options[spcIndex].value;
    submitBtn.addEventListener("click",()=>{
        DeleteData(target);
    })
}
export default UpdateData;

// 