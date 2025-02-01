// Variables to store generated card number, CVV, cardholder name, and expiry date
let generatedCardNumber = "";
let generatedCvv = "";
let generatedCardHolderName = "John Doe";  // Fixed cardholder name
let generatedExpiryDate = "";

// Function to generate card number, CVV, expiry date, and cardholder name
function generateCard() {
    // Generate random card number (16 digits)
    generatedCardNumber = "";
    for (let i = 0; i < 15; i++) {
        generatedCardNumber += Math.floor(Math.random() * 10);
    }
    generatedCardNumber += Math.floor(1000 + Math.random() * 9000); // Last 4 digits

    // Format card number as #### #### #### ####
    generatedCardNumber = generatedCardNumber
        .slice(0, 4) + ' ' + generatedCardNumber.slice(4, 8) + ' ' +
        generatedCardNumber.slice(8, 12) + ' ' + generatedCardNumber.slice(12, 16);

    // Generate random CVV (3 digits)
    generatedCvv = Math.floor(100 + Math.random() * 900);

    // Set expiry date to 5 years from now
    const currentYear = new Date().getFullYear();
    const expiryYear = currentYear + 5;  // Exactly 5 years from the current year
    let expiryMonth = Math.floor(Math.random() * 12) + 1;  // Random month (1-12)

    // Add leading zero to month if it's less than 10
    if (expiryMonth < 10) {
        expiryMonth = "0" + expiryMonth;
    }

    // Get the last two digits of the year
    const expiryYearShort = expiryYear.toString().slice(-2);  // Extract last two digits

    generatedExpiryDate = expiryMonth + "/" + expiryYearShort;

    // Display card number (formatted with spaces)
    document.getElementById("cardNumber").innerText = "Card Number: " + generatedCardNumber;

    // Display cardholder name and expiry date
    document.getElementById("cardHolderName").innerText = "Cardholder Name: " + generatedCardHolderName;
    document.getElementById("cardExpiryDate").innerText = "Expiry Date: " + generatedExpiryDate;

    // Show the activate button
    document.getElementById("activateButton").style.display = "block";
    document.getElementById("cardCvv").style.display = "none"; // Hide CVV initially
}

// Function to activate the card and add it to the right corner
function activateCard() {
    // Create a new div for the activated card
    const cardDiv = document.createElement("div");
    cardDiv.style.backgroundColor = "grey"; // Background for card
    cardDiv.style.padding = "15px";
    cardDiv.style.border = "1px solid #000"; // Border for the card
    cardDiv.style.borderRadius = "10px"; // Rounded corners
    cardDiv.style.width = "350px"; // Width to make it rectangular
    cardDiv.style.height = "200px"; // Height to maintain the rectangular shape (1.75:1 aspect ratio)
    cardDiv.style.boxShadow = "2px 2px 15px rgba(0, 0, 0, 0.2)"; // Soft shadow for card look

    // Set the content for the activated card
    cardDiv.innerHTML = `
        <h4>Activated Card:</h4>
        <p><strong>Card Number:</strong> ${generatedCardNumber}</p>
        <p><strong>Cardholder:</strong> ${generatedCardHolderName}</p>
        <p><strong>Expiry:</strong> ${generatedExpiryDate}</p>
        <p><strong>CVV:</strong> ${generatedCvv}</p>
    `;

    // Add the new card div to the activatedCardsContainer
    document.getElementById("activatedCardsContainer").appendChild(cardDiv);

    // Reset the display for generated card number, CVV, expiry date, and cardholder name
    document.getElementById("cardNumber").innerText = "Card Number: " + generatedCardNumber;
    document.getElementById("cardHolderName").innerText = "Cardholder Name: " + generatedCardHolderName;
    document.getElementById("cardExpiryDate").innerText = "Expiry Date: " + generatedExpiryDate;
    document.getElementById("cardCvv").innerText = "CVV: " + generatedCvv;
    document.getElementById("cardCvv").style.display = "block"; // Show CVV

    alert("Card Activated Successfully!");
}