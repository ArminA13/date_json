// Create a function that takes a number (from 1 to 12) and returns its corresponding month
// name as a string. For example, if you're given 3 as input, your function should return
// "March", because March is the 3rd month.

function getMonth(monthNum) {
    const months = {
        1: "January",
        2: "February",
        3: "March",
        4: "April",
        5: "May",
        6: "June",
        7: "July",
        8: "August",
        9: "September",
        10: "October",
        11: "November",
        12: "December",
    };
    return monthNum >= 1 && monthNum <= 12? months[String(monthNum)]: "Invalid number";
}

let returnMonth = getMonth(2);
console.log(returnMonth);
