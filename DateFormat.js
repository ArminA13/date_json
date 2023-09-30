// Implement following function

const formatDate = (date) => {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return date.toLocaleDateString('en-GB', options);
    
};
console.log("Actual output: ", formatDate(new Date("2020-05-14")));
console.log("Expected output", "14 May 2020");