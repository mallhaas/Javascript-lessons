//1. Request a three-digit number from a user and check whether it has identical digits in it.

var digits = prompt('Please enter 3 digits');
if (digits[0] === digits[1] || digits[1] === digits[2] || digits[2] === digits[0]) {
console.log('There are similar digits');
} else {
   console.log('There are no similar digits')
}

//2. Request a five-unit number from a user and check whether it is a palindrome.

var palindrome = prompt('Please enter 5 digits')

if (palindrome[0] === palindrome[4] || palindrome[1] === palindrome[3]) {
    console.log('This is a palindrome');
} else { 
    console.log('This is not a palindrome');
} 

//Execute a currency converter. A user puts in USD, chooses a currency (EUR, SEK, AUD etc.) and gets the result. 

function toEur () {
    var currency = 1.14
    const usd = document.getElementById("usd").value;
    var eur = (usd/currency)
   document.getElementById("demo").innerHTML = eur;
}

function toSek () {
    var currency = 0.11
    const usd = document.getElementById("usd").value;
    var eur = (usd/currency)
   document.getElementById("demo").innerHTML = eur;
}

function toAud () {
    var currency = 0.72
    const usd = document.getElementById("usd").value;
    var eur = (usd/currency)
   document.getElementById("demo").innerHTML = eur;
}


//4. Request a length of a circumference and a perimeter of a square from a user. Define whether that circumference can fit in that square.

var circumference = prompt('Please enter the lenght of a circumference of a square');
var perimeter = prompt('Please enter the lenght of a perimeter of a square');
var circumferenceOfSquare = perimeter/4*Math.PI;

if (circumferenceOfSquare <= circumference) {
    console.log('The circumference can fit in that square');
} else {
    console.log('The circumference can not fit in that square');
}


//5. Request a date (dd:mm:yy) and put out the one that goes after it. Pay attention to the start of a new month, new year, and also leap years.
<<<<<<< HEAD
// ALEX SOLVED DURING A LESSON

const yourDate = prompt("Enter a date (dd:mm:yyyy)");

// 1. Input (parse the string that we will get from user) '01:12:2021' 
const year = yourDate.substring(6, 10);
console.log("this is the year ", year);
const month = yourDate.substring(3, 5)
console.log("This is the month ", month)
const day = yourDate.substring(0, 2);
console.log("this is the day ", day)

// 2. Solution with Date object
// es6
// 'Hello ' + name + '. Your are logged in' -> `Hello ${name}. Your are logged in.`
// '2021-12-31'

const currentDateObject = new Date(`${year}-${month}-${day}`);

currentDateObject.setDate(currentDateObject.getDate() + 1);

const nextDayString = currentDateObject.toDateString();

console.log('nextDayString: ', nextDayString);
=======
// NOT SOLVED

//var date = prompt('Please enter a date (dd:mm:yy)')
>>>>>>> 0fd540bd33eec9bf7b10c8177b0c4a5de6ab939b
