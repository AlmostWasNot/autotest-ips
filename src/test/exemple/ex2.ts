setTimeout(function () {
    myArray.myMethod();
}, 2.0 * 1000); // prints "zero,one,two" after 2 seconds
setTimeout(function () {
    myArray.myMethod("1");
}, 2.5 * 1000); // prints "one" after 2.5 seconds