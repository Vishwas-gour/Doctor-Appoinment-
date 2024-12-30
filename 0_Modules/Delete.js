async function DeleteData(target) {
    console.log(target)
    let id = target.closest(".mySlots").id;
    console.log(id)
    async function deleteData(url) {
        await fetch(url, {
            method: "DELETE",
        });
    }
    let all = `http://localhost:3000/Dr. Brown/${id}`
    let doctore = `http://localhost:3000/All/${id}`
    let patient = `http://localhost:3000/Patients/${id}`
    deleteData(all);
    deleteData(doctore);
    deleteData(patient);
    alert("data successfully deleted");
}
export default DeleteData;