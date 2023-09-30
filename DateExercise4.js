// Create a function that takes three values:
// ● h hours
// ● m minutes
// ● s seconds
// Return the value that's the longest duration.

function longestDuration(h, m, s) {
    const hoursInSeconds = h * 3600;
    const minutesInSeconds = m * 60;
    const seconds = s;

    if (hoursInSeconds >= minutesInSeconds && hoursInSeconds >= seconds) {
        return `${h} hours`;
    } else if (
        minutesInSeconds >= hoursInSeconds && minutesInSeconds >= seconds) {
        return `${m} minutes`;
    } else {
        return `${s} seconds`;
    }
}

const hours = 1;
const minutes = 100;
const seconds = 500;

let longestTime = longestDuration(hours, minutes, seconds);

console.log(longestTime);
