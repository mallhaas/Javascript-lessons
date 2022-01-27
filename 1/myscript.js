//HOW DO I DISPLAY TEXT RIGTH AFTER I HAVE REPLIED

var person = prompt("What is your name?");
document.getElementById("demo").innerHTML = "Hello" + " " + person;

var year = prompt("What year were you born")
var currentYear = 2022
var age = (currentYear-year)
document.getElementById("demoTwo").innerHTML = "You are " +  age  + " year old";

var length = prompt("What is the length of the square?")
var perimeter = (length*4)
document.getElementById("demoThree").innerHTML = "Perimeter of the square is " +  perimeter;

var radius = prompt("What is the length of the radius?")
var area = (radius*2*Math.PI)
document.getElementById("demoFour").innerHTML = "Area of the circle is " +  area;

//IF I INSERT 2H CAN I DISTRACT THE 'H' AND MAKE THE REGULAR EQUASION

var distance = prompt("What is the distance between Helsinki and Tallinn?")
var time = prompt("How fast you want to be there?")
var speed = (distance/time)
document.getElementById("demoFive").innerHTML = "Your speed needs to be " +  speed;

//HOW I SHOULD HAVE STORED THE EXCHANGE RATE AS A CONSTANT - WHY?

function myFirstFunction() {
    var currency = 1.14
    const usd = document.getElementById("demoSix").value;
    var eur = (usd/currency)
    document.getElementById("demoSixA").innerHTML = eur;
  } 

var monthsSalary = prompt("Please enter the sum of bank deposits for 2 months")
var equasion = (monthsSalary*0.3/6)
document.getElementById("demoSeven").innerHTML = "The intrest amount on 2 month deposits is " + equasion;


//A user states a flash drive memory in GB. The program has to count how many 820MB files can be stored on this flash drive. 
//I DON'T KNOW HOW TO SOLVE THIS....
function myThridFunction () {
  var gb = prompt('Please insert GB')
  var mg = (gb/0.82)
  if Number.isInteger (mg)
  return true
  document.getElementById("demoEight").innerHTML = mg + " files can be stored on this flash drive.";
}

//A user types in an amount of money in a wallet and the price of one chocolate bar. The program counts how many chocolate bars the user can buy, and how much change will he/she have left.
//AND THIS ONE TOO...