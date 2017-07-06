function clearErrors() {    
    for (var loopCounter = 0; 
        loopCounter < document.forms["evenNumbers"].elements.length; 
        loopCounter++) {
        if (document.forms["evenNumbers"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) {
            document.forms["evenNumbers"].elements[loopCounter]
               .parentElement.className = "form-group";
        }
    }    
}

console.log("works");

function validateItems() {
    
    console.log("works2");

    clearErrors();
    
    var startingNum = document.forms["evenNumbers"]["startingNumber"].value;
    console.log("Starting number is");
    console.log(startingNum);

    var endingNum = document.forms["evenNumbers"]["endingNumber"].value;
    console.log("Ending number is");
    console.log(endingNum);

    var stepVal = document.forms["evenNumbers"]["step"].value;
    console.log("Step is");
    console.log(stepVal);
    
    if (startingNum == "" || isNaN(startingNum)) {
        alert("Starting Number must be filled in with a number.");
        document.forms["evenNumbers"]["startingNumber"].parentElement.className = "form-group has-error";
        document.forms["evenNumbers"]["startingNumber"].focus();
        return false;
    }
    /*if (Number(startingNum) < 1) {
        alert("Starting Number must be a positive integer");
        document.forms["evenNumbers"]["startingNumber"].parentElement.className = "form-group has-error";
        document.forms["evenNumbers"]["startingNumber"].focus();
        return false;
    }*/
    if (endingNum == "" || isNaN(endingNum)) {
       alert("Ending Number must be filled in with a number.");
       document.forms["evenNumbers"]["endingNumber"].parentElement.className = "form-group has-error";
       document.forms["evenNumbers"]["endingNumber"].focus();
       return false;
    }

    /*if (Number(endingNum) < 1) {
       alert("Ending Number must be positive integer.");
       document.forms["evenNumbers"]["endingNumber"].parentElement.className = "form-group has-error"
       document.forms["evenNumbers"]["endingNumber"].focus();
       return false;
    } */
       if (Number(endingNum) < Number(startingNum)) {
       alert("Ending Number must be greater than Starting Number.");
       document.forms["evenNumbers"]["endingNumber"].parentElement.className = "form-group has-error";
       document.forms["evenNumbers"]["endingNumber"].focus();
       return false;
    }
    if (Number(step) == "" || isNaN(endingNum)) {
       alert("Step must be filled in with a number.");
       document.forms["evenNumbers"]["step"].parentElement.className = "form-group has-error";
       document.forms["evenNumbers"]["step"].focus();
       return false;
    }
    if (Number(step) < 1) {
        alert("Step must be a positive number.");
        document.forms["evenNumbers"]["step"].parentElement.className = "form-group has-error";
        document.forms["evenNumbers"]["step"].focus();
        return false;        
    }

    document.getElementById("results").style.display = "block";
    document.getElementById("starting").innerHTML = Number(startingNum);
    document.getElementById("ending").innerHTML = Number(endingNum);
    document.getElementById("stepsize").innerHTML = Number(stepVal);


    var evenstring = "";

    for (var i = Number(startingNum); i <= Number(endingNum); i += Number(stepVal)) {
        if (i % 2 == 0) {
            evenstring = evenstring.concat(i,"<br>");
        }
    }

    document.getElementById("evenresults").innerHTML = evenstring;
    // We are returning false so that the form doesn't submit 
    // and so that we can see the results
    return false;
}