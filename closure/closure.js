const secureBooking = function () {
    let count = 0;
    return function () {
        count++;
        console.log(count);
    }
}

const booker = secureBooking();
// When we call secureBooking function it will be called and the function which it is returning will be stored in the booker variable
booker(); //1
booker(); //2
booker(); //3

// booker function was able to update the count variable to 1,2,3
// hhow is this possible how the booker function can update the count variable defined in secureBooking function that actually has already finished executing.
// When secureBooking is finsihed executing it's Exxecution context has gone.
// But still the inner function is able to access the count variable which was there in secureBooking function.