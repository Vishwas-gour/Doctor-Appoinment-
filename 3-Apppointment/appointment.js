import SelectDr from "../0_modules/SelectDr.js";
import BookSlot from "../0_Modules/BookSlot.js";
import ShowData from "../0_Modules/ShowData.js";

let specialtySelect = document.querySelector("#specialty");
let doctorSelect = document.querySelector("#doctor");
let form = document.querySelector("#appointment-form");
// ********** Select Dr.
specialtySelect.addEventListener("change", () => {
    // ====> SelectDr
    SelectDr(specialtySelect, doctorSelect)
});


form.addEventListener("submit", (e) => {
    e.preventDefault();
    const doctor = doctorSelect.value;
    // ====> BookSlot 
    BookSlot(doctor);
});


// ###################################
// 1---> update slot
// 2---> delete after time
ShowData();
// 3---> show in profile
