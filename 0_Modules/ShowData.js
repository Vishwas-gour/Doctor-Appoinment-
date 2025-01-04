async function ShowData() {
    let showSlots = document.querySelector("#show-slots");
    let patientsURL = `http://localhost:3000/Patients`
    try {
        let obj = await fetch(patientsURL);
        let data = await obj.json();
        let myData = data.map(e => {
            let ul = `<ul class="mySlots appointmentData" id = ${e.id}>
                         <li class = "date" id = date-${e.id}><input readOnly type="date" value = ${e.date}> </li>
                         <li class = "time" id = time-${e.id}><input readOnly type="time" value = ${e.time}></li>
                         <li class = "specialtySelect" id = specialtySelect-${e.id}><input readOnly type="text" value = ${e.specialtySelect}> </li>
                         <li class = "selectedDr" id = selectedDr-${e.id}><input readOnly type="text" value = ${e.selectedDr}> </li>
                         <li class = "delete" id = delete-${e.id}"><button class="remove removeBtn" onclick ="deleteData(this)">Remove</button></li>
                          <li class = "update " id = update-${e.id}><button class=" updateBtn" onclick = "updateData(this)">Update</button></li>
                      </ul>`
            //   SHOW ONLY SLOTS OF CURRENT ACCOUNT
            if (e.email == localStorage.getItem("email")) showSlots.innerHTML += ul;
        });
    }
    catch (error) {
        console.log("-->", error)
    }
}
export default ShowData