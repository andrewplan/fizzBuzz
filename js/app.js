$(document).ready(function () {
    for (var i = 1; i <= 100; i++ ) {
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
});