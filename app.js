// Listen for submit

document
  .getElementById("loan-form")
  .addEventListener("submit", calculateResults);

// Calculate Results

function calculateResults(e) {
  console.log("Calculating...");

  //grab everything we need from the UI

  // UI Variables
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');
  




  // since it is a form submit we will prevent defaults
  e.preventDefault();
}
