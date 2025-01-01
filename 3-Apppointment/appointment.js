import SelectDr from "../0_modules/SelectDr.js";
import BookSlot from "../0_Modules/BookSlot.js";
import ShowData from "../0_Modules/ShowData.js";
import DeleteData from "../0_Modules/Delete.js";
import UpdateData from "../0_Modules/Update.js";

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
ShowData();
window.deleteData = function(target) {
    console.log("->",target);
    DeleteData(target)
}
window.updateData = function(target) {
    UpdateData(target)
}

// 1---> update slot
// 2---> delete after time
// 3---> show in profile ✔️
