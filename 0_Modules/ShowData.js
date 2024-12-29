async function ShowData() {
    let showSlots = document.querySelector("#show-slots");
    console.log(showSlots)
    let patientsURL = `http://localhost:3000/Patients`

    try {
        let obj = await fetch(patientsURL);
        let data = await obj.json();
        console.log(data)
        let myData = data.map(e => {
            let ul = `<ul class="mySlots">
                         <li>${e.time}</li>
                         <li>${e.date} </li>
                         <li>${e.selectedDr} </li>
                         <li>${e.specialtySelect} </li>
                         <li><button style = "width:90px">Edit</button></li>
                         <li><button>✔️</button></li>
                         <li><button>❌</button></li>
                      </ul>`
           if(e.email == localStorage.getItem("email")) showSlots.innerHTML += ul;
        });
    }
    catch (error) {
        console.log("-->", error)
    }
}
export default ShowData