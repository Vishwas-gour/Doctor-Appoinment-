async function ShowData() {
    let showSlots = document.querySelector("#show-slots");
    let patientsURL = `http://localhost:3000/Patients`
    try {
        let obj = await fetch(patientsURL);
        let data = await obj.json();
        let myData = data.map(e => {
            let ul = `<ul class="mySlots">
                         <li class = ${e.id}><input type="text" value = ${e.date}> </li>
                         <li class = ${e.id}><input type="text" value = ${e.time}></li>
                         <li class = ${e.id}><input type="text" value = ${e.specialtySelect}> </li>
                         <li class = ${e.id}><input type="text" value = ${e.selectedDr}> </li>
                         <li class = ${e.id}><button style = "width:90px">Edit</button></li>
                         <li><button>✔️</button></li>
                         <li><button>❌</button></li>
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