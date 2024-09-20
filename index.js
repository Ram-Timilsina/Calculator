function calculateinterest() {
  // Get the values from the input fields
  const sumAmount = parseFloat(document.getElementById("amount").value);
  const timeInterval = parseFloat(document.getElementById("time").value);
  const interestRate = parseFloat(document.getElementById("rate").value);

  // Check if all fields have valid numbers
  if (isNaN(sumAmount) || isNaN(timeInterval) || isNaN(interestRate)) {
    alert("Please enter valid numbers in all fields.");
    return;
  }

  // Calculate simple interest
  const interest = (sumAmount * timeInterval * interestRate) / 100;

  // Display the result
  const resultParagraph = document.querySelector(".calculator p");
  resultParagraph.textContent = `Your interest is: ${interest.toFixed(2)}`;
}

// Clear button functionality
document.querySelectorAll("button")[1].addEventListener("click", () => {
  document.querySelectorAll("input")[0].value = "";
  document.querySelectorAll("input")[1].value = "";
  document.querySelectorAll("input")[2].value = "";

  const resultParagraph = document.querySelector(".calculator p");
  resultParagraph.textContent = "Your interest is :";
});
