// Write a function that, given a date (in the format MM/DD/YYYY), returns the day of the week as a
// string. Each day name must be one of the following strings: "Sunday", "Monday", "Tuesday",
// "Wednesday", "Thursday", "Friday", or "Saturday".
// To illustrate, the day of the week for "12/07/2016" is "Wednesday".
// This challenge assumes the week starts on Sunday.

function getDay(date) {
    const dateis = new Date(date);
    const week = {
        0: "Sunday",
        1: "Monday",
        2: "Tuesday",
        3: "Wednesday",
        4: "Thursday",
        5: "Friday",
        6: "Saturday",
    };

    const dayOfWeekKey = dateis.getDay();
    const dayOfWeek = week[dayOfWeekKey];
    return dayOfWeek;
}

console.log(getDay("12/07/2016")); //"Wednesday"
console.log(getDay("09/04/2016")); //"Sunday"
console.log(getDay("12/08/2011")); //"Thursday"
