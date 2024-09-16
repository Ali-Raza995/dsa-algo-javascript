console.log("Hello from DSA")

// Fibonacci Sequence for n number of elements [0,1,1] [0,1,1,2,3,5]

// aik number lena hai function mai
// us number ko previous m add krwayengy ( initial 0 )
// jo previous 2 ka sum hai usey 3rd place pr rakhengy, loop chalega till that number 
// Steps to follow:
// 1. Initialize an array to store the Fibonacci sequence.
// 2. Start a loop from 0 to the given number.
// 3. In each iteration, calculate the next Fibonacci number as the sum of the last two numbers.
// 4. Add the calculated number to the array.
// 5. Return the array at the end of the function.

const fibonacciFunc = (number) => {
    let array = [0, 1]; // Initialize the array with the first two Fibonacci numbers
    for (let i = 2; i < number; i++) {
        array.push(array[i - 1] + array[i - 2]); // Calculate the next Fibonacci number and add it to the array
    }
    return array; // Return the array at the end of the function
}

// BigO is = O(n)

console.log("fibonacciFunc" ,fibonacciFunc(2))
console.log("fibonacciFunc",fibonacciFunc(7))


// Factorial nikaalna hai 

// Steps to follow 

// 1. Function bnega jo number lega as parameter
// 2. Intial value 1 rakhengy, jo k new value ko store krlega
// 3. phir isey new value k sath multuple krwaaty jayengy

const factorialNumber = (number) => {
    let initNumber = 1
    for (let i = 2; i <=number ; i++){
        initNumber = initNumber * i

    }
    return initNumber
}

// Separate logic for factorialNumber2
const factorialNumber2 = (number) => {
    if (number === 0) return 1;
    return number * factorialNumber2(number - 1);
}

console.log("factorialNumber", factorialNumber(5))
console.log("factorialNumber2", factorialNumber2(5))