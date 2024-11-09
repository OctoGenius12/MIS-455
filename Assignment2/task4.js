function calculateGrade() {
    // Get the marks from the input field
    const marks = parseInt(document.getElementById("marks").value);
    let grade;

    // Validate the input
    if (isNaN(marks) || marks < 0 || marks > 100) {
        document.getElementById("outpuutt").innerText = "Please enter valid marks between 0 and 100.";
        return;
    }

    if (marks >= 90) {
        grade = "A";
    } else if (marks >= 85) {
        grade = "A-";
    } else if (marks >= 80) {
        grade = "B+";
    } else if (marks >= 75) {
        grade = "B";
    } else if (marks >= 70) {
        grade = "B-";
    } else if (marks >= 65) {
        grade = "C+";
    } else if (marks >= 60) {
        grade = "C";
    } else if (marks >= 55) {
        grade = "C-";
    } else if (marks >= 50) {
        grade = "D+";
    } else if (marks >= 45) {
        grade = "D";
    } else {
        grade = "F";
    }

    document.getElementById("outpuutt").innerText = "Your grade is: " + grade;
}