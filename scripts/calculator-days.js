function calculate() {
    const days = parseInt(document.getElementById("days").value);
    const adBudget = parseFloat(document.getElementById("ad-budget").value);

    if (isNaN(days) || isNaN(adBudget) || days < 1 || adBudget < 0) {
        alert("Введіть коректні значення.");
        return;
    }

    let myFee = 500;
    if (days > 5) {
        myFee += (days - 5) * 50;
    }

    const totalAdBudget = days * adBudget;
    const total = myFee + totalAdBudget;

    document.getElementById("my-fee").value = myFee.toFixed(2);
    document.getElementById("total").value = total.toFixed(2);
}

function goBack() {
    window.location.href = "../index.html";
}
