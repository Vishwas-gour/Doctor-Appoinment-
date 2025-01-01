async function DeleteData(target) {
    let id = target.closest(".mySlots").id;
    let patientURL = `http://localhost:3000/Patients/${id}`
    console.log(target)
    // doctor name of patient for also delete doctor 
    // for finding the DR. name
    let obj =  await fetch (patientURL);
    let data = await obj.json();
    const dr = data.selectedDr;
    let doctoreURL = `http://localhost:3000/${dr}/${id}`

    let cmp = confirm("Do you want to remove Appointment")
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