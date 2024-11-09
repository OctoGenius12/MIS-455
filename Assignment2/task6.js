function checkTemperature() {
    const temp = Number(document.getElementById("temp").value);
    let message;
    if (temp < 0) {
        message = "Freezing weather";
    } else if (temp < 10) {
        message = "Very Cold weather";
    } else if (temp < 20) {
        message = "Cold weather";
    } else if (temp < 30) {
        message = "Normal in Temp";
    } else if (temp < 40) {
        message = "It's Hot";
    } else {
        message = "It's Very Hot";
    }


    document.getElementById("ouutput").innerText = message;
}