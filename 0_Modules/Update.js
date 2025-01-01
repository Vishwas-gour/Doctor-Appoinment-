async function UpdateData(target) {
    let parent = target.closest(".mySlots");
    let id = parent.id;
    console.log(id)
    console.log(`#date-${id}`)
    let liDate = document.querySelector(`#date-${id} input`).value;
    let liTime = document.querySelector(`#time-${id} input`).value;
    let liSpecialtySelect = document.querySelector(`#specialtySelect-${id} input`).value;
    let liSelectedDr = document.querySelector(`#selectedDr-${id} input`).value;
    console.log("===> ", liTime, liDate, liSpecialtySelect, liSelectedDr)
    console.log("---------------------")
    // Putting value Again for update
    let phone = document.querySelector("#phone").value = 13
    let time = document.querySelector(`#time`).value = liTime;
    let date = document.querySelector(`#date`).value = liDate;

    let indSp;
    let indDr;
    if (liSpecialtySelect == "cardiology") {
        indSp = 1;
        if(liSelectedDr == " "){
            
        }

    }
    else if (liSpecialtySelect == "neurology") {
        indSp = 2;
    }
    else {
        indSp = 3;

    }
    console.log("index => ", ind)
    let select = document.querySelector('#specialty');
    select.value += select.options[ind].value;




}
export default UpdateData;

// 