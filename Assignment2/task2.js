function checkVotingEligibility() {
    const age = parseInt(document.getElementById("age").value);

    if (isNaN(age)) {
        document.getElementById("outputt").innerText = "Please enter a valid age.";
    } else {
        const message = age >= 18 
            ? "You are eligible to vote." 
            : "You are not eligible to vote.";
        
        document.getElementById("outputt").innerText = message;
    }
}
