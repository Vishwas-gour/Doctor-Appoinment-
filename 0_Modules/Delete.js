async function DeleteData(target , check) {
    let cmp = true;
    if(check){
        cmp = confirm("Do you want to remove Appointment")
    }
    else{
        cmp = true;
    }

    let id = target.closest(".mySlots").id;
    let patientURL = `http://localhost:3000/Patients/${id}`
    console.log(target)
    // doctor name of patient for also delete doctor 
    // for finding the DR. name
    let obj =  await fetch (patientURL);
    let data = await obj.json();
    let dr = data.selectedDr;
    let doctoreURL = `http://localhost:3000/${dr}/${id}`

    if (!cmp) return;
    async function deleteData(url) {
        await fetch(url, {
            method: "DELETE",
        });
    }
    
    // console.log("data ->" ,dr);
    deleteData(doctoreURL);
    deleteData(patientURL);

}
export default DeleteData;