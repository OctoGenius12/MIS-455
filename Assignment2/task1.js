function greater() {
    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("output").innerText = "Please enter valid numbers.";
    } else {
        const greaterNum = num1 > num2 ? num1 : num2;
        document.getElementById("output").innerText = `The greater number is: ${greaterNum}`;
    }
}
