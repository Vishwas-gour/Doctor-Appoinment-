function SlotAvailability(date, time, time24, data) {
    let split = time24.split(":");
    let hours = split[0];
    // 1. =================> Sunday on the date or not (only Emergency Dr. present)
    let newDate = new Date(date);
    let dayNumb = newDate.getDay(); 
    if(dayNumb === 0 ){
        if (!confirm("Sunday (only Emergency Doctor available). Proceed?")) {
            return false;
        }
        return true;
    }

    // 2. =================> if slot is already booked  
    let slotAlloted = data.every((e) => {
        if ((e.date == date) && e.time == time) {
            return false;
        }
        return true;
    });

    //  if slotAlloted = false;
    if (!slotAlloted) {
        alert("Choose a different slot; the doctor is already booked.");
        return false;
    }

    // 3. =================> Lunch Time (only Emergency Dr. present)
    if (hours == 13) {
        alert("01-02 PM Lunch time")
        return false;
    }

    // 4. =================> night-shift (only Emergency Dr. present) 
    if (hours >= 23 || hours <= 10) {
        if (!confirm("Night shift (only Emergency Doctor available). Proceed?")) {
            return false;
        }
        return true;
      
    }

}

export default SlotAvailability;