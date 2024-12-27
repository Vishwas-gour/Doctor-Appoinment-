// -----> Select Dr. according to Specialty 
function SelectDr(specialtySelect, doctorSelect) {
    const doctors = {
        cardiology: ['Dr. Smith', 'Dr. Johnson', 'Dr. Lee'],
        neurology: ['Dr. Brown', 'Dr. Davis', 'Dr. Miller'],
        orthopedics: ['Dr. Lee', 'Dr. Smith', 'Dr. Brown']
    };

    const specialtySelected = specialtySelect.value;
    doctorSelect.innerHTML = " "; //--> for reset the old selections
    doctorSelect.innerHTML = `<option value=""> Select ${specialtySelected.charAt(0).toUpperCase() + specialtySelected.slice(1)} Doctors</option>`;
    doctors[specialtySelected].forEach((doctor) => {
        let option = document.createElement("option");
        option.textContent = doctor;
        doctorSelect.appendChild(option);
    })
}

export default SelectDr;