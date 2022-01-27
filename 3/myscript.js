// 1. Write a program that requests a number from a user and finds the summation of every number from 1 to num. 
//For example, for number 4 it is 1 + 2 + 3 + 4 = 10.

// let userNumberString = prompt('Please give us a number');
// var userNumber = parseInt(userNumberString);
// var sum = 0;

// for (let i = 1; i <= userNumber; i++){
//     console.log(i);
//     sum += i;
// }

// console.log(sum);

// 2. Request two numbers and find only their largest common divisor.

// let userNumber1String = prompt('Please give us a number');
// var userNumber1 = parseInt(userNumber1String);
// let userNumber2String = prompt('Please give us a 2nd number');
// var userNumber2 = parseInt(userNumber2String);

// var gcd = function(a, b) {
//     if (!b) {
//       return a;
//     }
  
//     return gcd(b, a % b);
//   }

// console.log(gcd(userNumber1, userNumber2));

// 3. Request a number and display all the divisors of it. For example, for number 8 it would be 2, 4, and 8.

<<<<<<< HEAD
// function divisors(){

//     const userNumberString = prompt('Please give us a number');
//     const n = parseInt(userNumberString);

//     for (var i = 1; i < n; i++) {
//         const dev = n / i;
//             if (Number.isInteger(dev) == true) {
//                 console.log(dev);
//             }
//     }

//divisors();

=======
    // DID NOT SOLVE THIS ONE

// let userNumberString = prompt('Please give us a number');
// let userNumber = parseInt(userNumberString);

// function printDivisors(n)
// {
//     for (var i = 1; i*i < n; i++) {
//         if (n % i == 0)
//             document.write(i + " ");
//     }
//     for (var i = Math.sqrt(n); i >= 1; i--) {
//         if (n % i == 0)
//             document.write(" " + n / i);
//     }
// }
//     console.log(printDivisors(userNumber));
>>>>>>> 0fd540bd33eec9bf7b10c8177b0c4a5de6ab939b

// 4. Define the number of digits in a requested number. For example, there are 4 digits in the number 6834.

// let userNumberString = prompt('Please give us a number');

// let digitsNumber = userNumberString.length

// console.log(digitsNumber)


// 5. Request 10 numbers from a user and count, how many are positive, negative, or zero. Also, count odd and even. 
<<<<<<< HEAD
// Display the statistics. There’s only one variable (not 10) needed for input by a user. 

// DID NOT SOLVE THIS ONE

const userNumberString = prompt('Please give us 10 numbers');
const userNumber = parseInt(userNumberString);

var myArr = userNumber.toString().split('').map(iNum => parseInt(iNum, 10));

console.log(myArr);

for (let i = 0; i < myArr.length; i++){

    if (myArr[0] === 0,
        myArr[1] === 0,
        myArr[2] === 0,
        myArr[3] === 0,
        myArr[4] === 0,
        myArr[5] === 0,
        myArr[6] === 0,
        myArr[7] === 0,
        myArr[8] === 0,
        myArr[9] === 0
        ) {
        console.log('there is a zero')
    }
    
    if (
        myArr[0] < 0,
        myArr[1] < 0,
        myArr[2] < 0,
        myArr[3] < 0,
        myArr[4] < 0,
        myArr[5] < 0,
        myArr[6] < 0,
        myArr[7] < 0,
        myArr[8] < 0,
        myArr[9] < 0
        ) {
            console.log('there is a positive nr')
    }
}

    //let positive = (element) => element > 0;
    //if else (let negative = (element) => element < 0) {
    //     console.log(element ${'These numbers are negative'});
    // } if else (let zero = (element) => element === 0) {
    //     console.log(element ${'These numbers are zero'});
    // }


// const array = [1, 2, 3, 4, 5];

// // checks whether an element is even
// const even = (element) => element % 2 === 0;

// console.log(array.some(even));
// // expected output: true

=======
//Display the statistics. There’s only one variable (not 10) needed for input by a user. 

// DID NOT SOLVE THIS ONE

// let userNumberString = prompt('Please give us 10 numbers');
// let userNumber = parseInt(userNumberString);
>>>>>>> 0fd540bd33eec9bf7b10c8177b0c4a5de6ab939b

// let myFunc = num => Number(num);
  
// var myArr = Array.from(String(userNumber), myFunc);
  
// // Print the result array
// console.log(myArr);
//  //positive
//  function getPositive(a) {
//      if (myArr.some = )
//     // if array item returns +, 
//  }


//  //negative
//  function getNegative(a) {
     
// }
//  //zero
// function getZero(a) {
//     for() {
//         return
//     }
    
// }
// }
//  //odd
//  function getOdd(a) {
     
// }
//  //even
//  function getEven(a) {
     
// }


// 6. Loop a calculator. Request 2 numbers and a sign, solve the problem, display the result and ask if the user wants one more. 
<<<<<<< HEAD
// The loop continues until the user refuses. 

// Couldn't figure out how to make it a loop in the right order
=======
//The loop continues until the user refuses. 

//Couldn't figure out how to make it a loop in the right order
>>>>>>> 0fd540bd33eec9bf7b10c8177b0c4a5de6ab939b

// function calculator() {
    
// let userEquasion = prompt('Calculator');
// let myArr = userEquasion.split('');
// var getNumberA = parseInt(userEquasion[0]);
// var getNumberB = parseInt(userEquasion[2]);
// let nextEquasion = prompt('Do you want to continue');

//     for(var i=0; nextEquasion == 'yes' ; i++){
//         if (userEquasion[1] == '+'){

//         var result = getNumberA + getNumberB;

//         console.log(result);
        
//         } else if (userEquasion[1] == '-'){
        
//         var result = getNumberA - getNumberB;
        
//         console.log(result);
        
//         } else if (userEquasion[1] == '*'){
        
//         var result = getNumberA * getNumberB;
        
//         console.log(result);
        
//         } else if (userEquasion[1] == '/'){
        
//         var result = getNumberA / getNumberB;
        
//         console.log(result);
//         } else {

//         }
//     }
// }

// calculator();
    

// 7. Request a number from a user and ask by how many digits to move it. Move the digits and display the result (if the number 123456 needs to be moved by 2 digits, the result will be 345612).

<<<<<<< HEAD
// let userNumberString = prompt('Please insert a number here');

// let myFunc = num => Number(num);
  
// var userArrString = Array.from(String(userNumberString), myFunc);

// //const userArr = userNumber.split('-');

// var userArr = parseInt(userArrString);

// console.log(userArr);

// console.log(typeof userArr[0]);
=======
let userNumberString = prompt('Please insert a number here');

let myFunc = num => Number(num);
  
var userArrString = Array.from(String(userNumberString), myFunc);

//const userArr = userNumber.split('-');

var userArr = parseInt(userArrString);

console.log(userArr);

console.log(typeof userArr[0]);
>>>>>>> 0fd540bd33eec9bf7b10c8177b0c4a5de6ab939b




// let movingNumberString = prompt ('Please instert a number how many times you want to move the previous number')

// var movingNumber = parseInt(movingNumberString);




//var finalNumber = movingNumber + userNumber.every;

//console.log(finalNumber);



// 8. Loop day input like this: «Day of the week. Would you like to see the next one?» which continues as long as the user clicks OK.
// 9. Display the multiplication table of all numbers from 2 to 9. Every number has to be multiplied by 1 to 10. 
// 10. “Guess the number” game. Suggest a user to think of a number from 0 to 100 and guess it in the following way: every loop iteration needs to divide the range of numbers in half, you represent 
<<<<<<< HEAD
// the result as N and ask the user “Your number > N, < N or == N?” Depending on what the user said, narrow down the range. So the starting range is 0 to 100, divided in half is 50. If the user said 
// the number is > 50, the next range is 51 to 100, and so on, until the user chooses == N. 
=======
//the result as N and ask the user “Your number > N, < N or == N?” Depending on what the user said, narrow down the range. So the starting range is 0 to 100, divided in half is 50. If the user said 
//the number is > 50, the next range is 51 to 100, and so on, until the user chooses == N. 
>>>>>>> 0fd540bd33eec9bf7b10c8177b0c4a5de6ab939b
