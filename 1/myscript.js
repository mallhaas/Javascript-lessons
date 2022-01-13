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