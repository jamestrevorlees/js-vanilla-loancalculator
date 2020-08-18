// Listen for submit

document
  .getElementById("loan-form")
  .addEventListener("submit", calculateResults);

// Calculate Results

function calculateResults(e) {
  //grab everything we need from the UI

  // UI Variables
  const amount = document.getElementById("amount");
  const interest = document.getElementById("interest");
  const years = document.getElementById("years");
  const monthlyPayment = document.getElementById("monthly-payment");
  const totalPayment = document.getElementById("total-payment");
  const totalInterest = document.getElementById("total-interest");

  const principal = parseFloat(amount.value); //grab the input field and we are extracting the value in decimal form
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;

  // Compute the monthly payments
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal * x * calculatedInterest) / (x - 1);

  //check monthly variable is a finite value
  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = (monthly * calculatedPayments - principal).toFixed(2);
  } else {
    // if this does not run true then spit out an error
    console.log("Please check your inputs");
  }

  // since it is a form submit we will prevent defaults
  e.preventDefault();
}
