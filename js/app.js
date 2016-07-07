$(document).ready(function () {
    'use strict'
    
    var integerInput = +(prompt("Please enter an integer in between 1 and 100."));
    console.log(integerInput);
    
    function fizzBuzz (ints) {
        if (ints === NaN || (ints % 1 !== 0)) {
            alert("You must enter in an integer!");
            ints = +(prompt("Please enter an integer in between 1 and 100."));
            fizzBuzz(ints);
        }
        else {
            for (var i = 1; i <= ints; i++ ) {
                if (i % 3 === 0 && i % 5 === 0 && i !== 0) {
                    console.log("fizzbuzz");
                    $( "body" ).append( "<p>fizzbuzz</p>" );
                }
                else if (i % 3 === 0) {
                    console.log("fizz");
                    $( "body" ).append( "<p>fizz</p>" );
                }
                else if (i % 5 === 0) {
                    console.log("buzz");
                    $( "body" ).append( "<p>buzz</p>" );
                }
                else {
                    console.log(i);
                    $( "body" ).append( "<p>" + i + "</p>" );
                }
            }
        }
    }
    
    fizzBuzz(integerInput);
    
});