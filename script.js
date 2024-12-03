const calculate = () => {
    // Getting input from user into variables
    let chemistry = document.querySelector("#chemistry").value;
    let hindi = document.querySelector("#hindi").value;
    let maths = document.querySelector("#maths").value;
    let phy = document.querySelector("#phy").value;
    let grades = "";

    // Input is string so typecasting is necessary.
    let totalgrades =
        parseFloat(chemistry) +
        parseFloat(hindi) +
        parseFloat(maths) +
        parseFloat(phy);

    // Checking the values are empty or invalid
    if (
        chemistry === "" ||
        hindi === "" ||
        maths === "" ||
        phy === ""
    ) {
        document.querySelector("#showdata").innerHTML =
            "Please enter all the fields";
        return;
    }
        // condn for marks constraint
    if (
        chemistry > 100 || hindi > 100 || maths > 100 || phy > 100
    ) {
        document.querySelector("#showdata").innerHTML =
            "Marks cannot exceed 100 in any subject.";
        return;
    }

    // Calculate percentage
    let percentage = (totalgrades / 400) * 100;

    // Assign grades based on percentage
    if (percentage <= 100 && percentage >= 80) {
        grades = "A";
    } else if (percentage <= 79 && percentage >= 60) {
        grades = "B";
    } else if (percentage <= 59 && percentage >= 40) {
        grades = "C";
    } else {
        grades = "F";
    }

    // Display result based on pass/fail
    if (percentage >= 39.5) {
        document.querySelector("#showdata").innerHTML = `
            Out of 400 your total is ${totalgrades} 
            and percentage is ${percentage}%. <br> 
            Your grade is ${grades}. You are Pass.
        `;
    } else {
        document.querySelector("#showdata").innerHTML = `
            Out of 400 your total is ${totalgrades} 
            and percentage is ${percentage}%. <br> 
            Your grade is ${grades}. You are Fail.
        `;
    }
};
