function findGreatest() {
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);
    const num3 = Number(document.getElementById("num3").value);

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        document.getElementById("great").innerText = "Please enter valid numbers.";
    } else {
        const greatest = Math.max(num1, num2, num3);
        document.getElementById("great").innerText = `The greatest number is: ${greatest.toFixed(2)}`;
    }
}
