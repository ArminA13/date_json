// Create a function named myTimeout, which takes two parameters, a callback function
// and an interval duration(milliseconds). After calling the myTimeout function, the callback
// function must be executed after duration time has passed.
// Note:
// Don’t use the setTimeout method

const myCallBack = () => {
    console.log("===> DONE <===");
};

const myDuration = (ms) => {
    return 3000;
};

const myTimeout = (callback, ms) => {
    let newData = new Date();
    let time = newData.getTime();
    let future = time + ms;

    while (Date.now() <= future) {}
    return callback();
};

myTimeout(myCallBack, myDuration());
