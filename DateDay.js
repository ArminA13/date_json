// Each year has 365 or 366 days. Given a string date representing a Gregorian calendar date formatted
// as month/day/year, return the day-number of the year. All input strings in the tests are valid dates.


function dayOfYear(date) {
    const [month, day, year] = date.split("/").map(Number);
    const daysMonth = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        daysMonth[2] = 29;
    }

    let days = 0;
    for (let i = 1; i < month; i++) {
        days += daysMonth[i];
    }
    days += day;

    return days;
}

console.log(dayOfYear("12/13/2020")); //348
console.log(dayOfYear("12/17/2020")); //352
console.log(dayOfYear("11/16/2020")); //321
console.log(dayOfYear("1/9/2019")); //9
console.log(dayOfYear("3/1/2004")); //61
console.log(dayOfYear("12/31/2000")); //366
