async function ShowData() {
    let showSlots = document.querySelector("#show-slots");
    let patientsURL = `http://localhost:3000/Patients`
    try {
        let obj = await fetch(patientsURL);
        let data = await obj.json();
        let myData = data.map(e => {
            let ul = `<ul class="mySlots" id = ${e.id}>
                         <li class = "date" id = date-${e.id}><input readOnly type="text" value = ${e.date}> </li>
                         <li class = "time" id = time-${e.id}><input readOnly type="text" value = ${e.time}></li>
                         <li class = "specialtySelect" id = specialtySelect-${e.id}><input readOnly type="text" value = ${e.specialtySelect}> <li>
                         <li class = "selectedDr" id = selectedDr-${e.id}><input readOnly type="text" value = ${e.selectedDr}> </li>
                         <li class = "delete" id = delete-${e.id}"><button onclick ="deleteData(this)">❌</button></li>
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