// 1 Write a function that accepts 2 numbers and returns -1 if the first one is smaller than the second, 1 if it is vice versa, and 0 if they are equal.

function myFunctionOne(a, b) {
    if (a<b) {
        console.log(-1);
    } else if (a>b) {
        console.log(1);
     } else if (a=b) {
        console.log(0);
     }
}

// myFunctionOne(2, 3);
// myFunctionOne(5, 3);
// myFunctionOne(3, 3);


// 2. Write a function that counts the factorial of a given number. 

function myFunctionTwo() {
 let userNumberString = prompt('Please give us a number');
 var userNumber = parseInt(userNumberString);
 var sum = 0;

 for (let i = 1; i <= userNumber; i++){
     console.log(i);
     sum += i;
 }

console.log(sum);

}

//check out this https://www.freecodecamp.org/news/how-to-factorialize-a-number-in-javascript-9263c89a4b38/

//myFunctionTwo();

// 3. Write a function that accepts three separate digits and makes them a number. For example, 1, 4, and 9 will become 149.

function myFunctionThree() {
    var oneOfThree = prompt('Please enter a number'); 
    var twoOfThree = prompt('Please enter a number'); 
    var threeOfThree = prompt('Please enter a number'); 

    let oneNumber = oneOfThree + twoOfThree + threeOfThree;
    console.log(oneNumber);
}

//myFunctionThree();

// 4. Write a function that accepts the width and length of a rectangle and calculates its area. 
//If there is only one parameter given, it counts as a square. 

function myFunctionFour(){
    var widthString = prompt('Please enter a width');
    var lengthString = prompt('Please enter a length');

    if(lengthString === ''){
        var width = parseInt(widthString);
        var area = width*width
        console.log(area);
    } else {
        var width = parseInt(widthString);
        var length = parseInt(lengthString);
        var squareArea = width*length;
        console.log(squareArea);
    }

}

//myFunctionFour();

// 5. Write a function that checks if the given number is perfect. A perfect number is a number equal to the sum of all its divisors. 
//For example, the smallest perfect number is 6, which is the sum of 1, 2, and 3.

//i copied this one from https://www.w3resource.com/javascript-exercises/javascript-function-exercise-12.php and changed little bit.

function myFunctionFive(){

var numString = prompt('Please insert a number');
var num = parseInt(numString);

var temp = 0;
   for(var i=1;i<=num/2;i++)
     {
         if(num%i === 0)
          {
            temp += i;
          }
     }
   
     if(temp === num && temp !== 0)
        {
       console.log("It is a perfect number.");
        } 
     else
        {
       console.log("It is not a perfect number.");
        }   
} 

//myFunctionFive(); 

// 6. Write a function that accepts the min and max values of a range, and only puts out the perfect numbers within that range. 
//Use the previous function to check, if numbers are perfect. 

//DID NOT SOLVE THIS ONE

function myFunctionSix() {
    var minString = prompt('please give us min range');
    var maxString = prompt('please give us max range');
    var min = parseInt(minString);
    var max = parseInt(maxString);
    
    for (let i = 0; min < i < max; i++){
        if(myFunctionFive() = true){}
  }
}
//myFunctionSix();

// 7. Write a function that accepts time (hours, minutes, seconds) and returns a string in the format hh:mm:ss. 
//If the seconds are not given, they should be displayed as 00.

function myFunctionSeven(){
    var userTime = prompt('Please write hours minutes seconds')
    var timeArr(5) = userTime.split('');

    //if(timeArr.length = 3){
    if(timeArr[4] === ''; timeArr[5] ===''){

    var hours = timeArr[0] + timeArr[1];
    var minutes = timeArr[2] + timeArr[3];

    var time = hours + ':' + minutes + ':' + 00;
    console.log(time);

    }else {
    var hours = timeArr[0] + timeArr[1];
    var minutes = timeArr[2] + timeArr[3];
    var seconds = timeArr[4] + timeArr[5];

    var time = hours + ':' + minutes + ':' + seconds;
    console.log(time);
    }

}

myFunctionSeven();

// 8. Write a function that accepts hours, minutes, and seconds and returns that time only in seconds. 
//For example, 1 hour 25 minutes 43 seconds returns 5145 seconds.


// 9. Write a function that accepts the number of seconds, translates it into hours, minutes, and seconds, and returns as a hh:mm:ss string.


// 10. Write a function that counts the difference between the dates. The function accepts 6 parameters that describe 2 dates, 
//and returns them as hh:mm:ss. While solving this problem use the functions from the two previous ones: at first, make the dates in seconds, 
//count the difference in seconds, and translate it back into hh:mm:ss.