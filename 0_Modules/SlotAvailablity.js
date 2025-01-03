function SlotAvailability(date, time, time24, data, checkByUpdateOrBookStot) {
    // checkByUpdateOrBookStot == true when call by BookSlot , == false when call by Update

    let split = time24.split(":");

    let hours = split[0];
    // 1. =================> Sunday on the date or not (only Emergency Dr. present)
    let newDate = new Date(date);
    let dayNumb = newDate.getDay();
    if (dayNumb === 0) {
        if (!confirm("Sunday (only Emergency Doctor available). Proceed?")) {
            return false;
        }
    }

    // 2. =================> if slot is already booked  
    let slotAlloted = data.some((e) => {
        return e.date === date && e.time === time;
    });



    //  if slotAlloted = false;
    if (slotAlloted ) { //--> !data only when it is called by Update.js 
        alert("Choose a different slot; the doctor is already booked.");
        return false;
    }

    // 3. =================> Lunch Time (only Emergency Dr. present)
    if (hours == 13) {
        alert("01-02 PM Lunch time")
        return false;
    }

    // 4. =================> night-shift (only Emergency Dr. present) 
    if (hours >= 23 || hours < 10) {
        if (!confirm("Night shift (only Emergency Doctor available). Proceed?")) {
            return false;
        }
    }

    return true;

}

export default SlotAvailability;