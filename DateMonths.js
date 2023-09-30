// The returned array should include the months of dateStart and dateEnd (inclusive)
// The returned array must not include duplicate values
// The month names returned by the function should be sorted (not alphabetically, but ordered by
// which comes first (January = 1st month, February = 2nd month, ... , December = 12th month))
// The function should produce the same output even if dateStart is greater than dateEnd

function monthsInterval(dateStart, dateEnd) {
    let result = [];

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    let startMonth = dateStart.getMonth();
    let endMonth = dateEnd.getMonth();
    let startYear = dateStart.getFullYear();
    let endYear = dateEnd.getFullYear();

    for (let year = startYear; year <= endYear; year++) {
        let start = (year === startYear) ? startMonth : 0;
        let end = (year === endYear) ? endMonth : 11;

        for (let month = start; month <= end; month++) {
            const monthName = months[month];
            if (!result.includes(monthName)) {
                result.push(monthName);
            }
        }
    }

    return result;
}

let january = new Date(2017, 0, 1);
let march = new Date(2017, 2, 1);
console.log(monthsInterval(january, march));

let december2017 = new Date(2017, 11, 1);
let january2018 = new Date(2018, 0, 1);
console.log(monthsInterval(december2017, january2018));

let january2017 = new Date(2017, 0, 1);
let january_2018 = new Date(2018, 0, 1);
console.log(monthsInterval(january2017, january_2018));
