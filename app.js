// Listen for submit

document.getElementById("loan-form").addEventListener("submit", function (e) {
  // Hide results
  document.getElementById("results").style.display = "none";

  // show loader
  document.getElementById("loading").style.display = "block";

  setTimeout(calculateResults, 2000);

  // since it is a form submit we will prevent defaults
  e.preventDefault();
});

// Calculate Results

function calculateResults() {
  console.log("Calculating...");
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

    // Show results
    document.getElementById("results").style.display = "block";

    // Hide loader
    document.getElementById("loading").style.display = "none";
  } else {
    // if this does not run true then spit out an error
    showError("Please check your numbers");
  }
}

// Show error
function showError(error) {
  // Show results
  document.getElementById("results").style.display = "none";

  // Hide loader
  document.getElementById("loading").style.display = "none";

  // Create a div
  const errorDiv = document.createElement("div");

  // Get elements
  const card = document.querySelector(".card");
  const heading = document.querySelector(".heading");

  // Add class
  errorDiv.className = "alert alert-danger";

  // Create text node and append to div
  errorDiv.appendChild(document.createTextNode(error));

  // Insert error above heading
  card.insertBefore(errorDiv, heading);
  // not a good user experience to leave this error there so we need to clear it after a certain amount of time.
  // clear error after 3 seconds

  setTimeout(clearError, 3000);
}

// Clear error function
function clearError() {
  document.querySelector(".alert").remove();
}
