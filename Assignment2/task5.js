function calculateDiscount() {
    const name = document.getElementById("name").value;
    const tuition = Number(document.getElementById("tuition").value);
    const birthYear = Number(document.getElementById("birthYear").value);
    const age = new Date().getFullYear() - birthYear;

    let discountRate = 0.02; // Default discount
    if (tuition > 50000 && age > 21) discountRate = 0.15;
    else if (tuition > 40000 && age > 20) discountRate = 0.10;
    else if (tuition > 30000 && age > 19) discountRate = 0.05;

    const discountAmount = tuition * discountRate;
    const payableAmount = tuition - discountAmount;

    // Display the results in the output label
    document.getElementById("outtput").innerText = 
        `Name: ${name}, Discount Amount: ${discountAmount.toFixed(2)}, Payable Fee: ${payableAmount.toFixed(2)}`;
}