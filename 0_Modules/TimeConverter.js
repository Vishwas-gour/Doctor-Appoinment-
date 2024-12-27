
// ---------> 24HOURS -> 12HOURS 

function TimeConverter(time24) {
    let [hour12, minutes] = time24.split(":");
    let period = "AM";
    if (hour12 >= 12) {
        period = "PM";
        if (hour12 > 12) hour12 -= 12;
    } else if (hour12 === 0) {
        hour12 = 0;
    } else if (hour12 < 10) {
        hour12 = hour12;
    }
    return `${hour12}:${minutes} ${period}`;
 }
export default TimeConverter;