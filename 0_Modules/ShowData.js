async function ShowData() {
    let showSlots = document.querySelector("#show-slots");
    let patientsURL = `http://localhost:3000/Patients`
    try {
        let obj = await fetch(patientsURL);
        let data = await obj.json();
        let myData = data.map(e => {
            let ul = `<ul class="mySlots" id = ${e.id}>
                         <li id = date-${e.id}><input type="text" value = ${e.date}> </li>
                         <li id = time-${e.id}><input type="text" value = ${e.time}></li>
                         <li id = specialtySelect-${e.id}><input type="text" value = ${e.specialtySelect}> </li>
                         <li id = selectedDr-${e.id}><input type="text" value = ${e.selectedDr}> </li>
                         <li id = edit-${e.id} onClick = "editData()"><button style = "width:90px">Edit</button></li>
                         <li id = save-${e.id} onClick = "saveData()"><button>✔️</button></li>
                         <li id = delete-${e.id}"><button onclick ="deleteData(this)">❌</button></li>
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