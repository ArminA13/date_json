// Implement following function

const getWeekOfMonth = (date) => {
    const day = date.getDate();
    return Math.ceil(day / 7);
};

const result = getWeekOfMonth(new Date(2017, 10, 14));
console.log(result); // => 2
