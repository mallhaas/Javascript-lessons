function myFunctionOne(a, b) {
    if (a<b) {
        console.log(-1);
    } else if (a>b) {
        console.log(1);
     } else if (a=b) {
        console.log(0);
     }
}

myFunctionOne(2, 3);
myFunctionOne(5, 3);
myFunctionOne(3, 3);