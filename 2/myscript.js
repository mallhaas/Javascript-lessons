//Request a three-digit number from a user and check whether it has identical digits in it.

//var threeDigits = prompt('Please insert 3 digits');

function mySecondFunction() {
    var a = document.getElementById('dm1').value;
    var b = document.getElementById('dm2').value;
    var c = document.getElementById('dm3').value;
     if (a !== b !== c)
     {
         return false
     }
     else
     {
       return true
     }    
}

mySecondFunction()


//Request a five-unit number from a user and check whether it is a palindrome.
//Execute a currency converter. A user puts in USD, chooses a currency (EUR, SEK, AUD etc.) and gets the result. 
//Request a length of a circumference and a perimeter of a square from a user. Define whether that circumference can fit in that square.
//Request a date (dd:mm:yy) and put out the one that goes after it. Pay attention to the start of a new month, new year, and also leap years.