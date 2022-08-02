const fizzBuzz = number => {
    const isDivisableby3 = (number % 3) === 0;
    const isDivisableby5 = (number % 5) === 0;

    if (isDivisableby3 && isDivisableby5) {
        return 'FizzBuzz'
    }
    else if (isDivisableby3) {
        return 'Fizz'
    }
    else if (isDivisableby5) {
        return 'Buzz'
    } else {
        return number;
    }
};


module.exports = fizzBuzz;
