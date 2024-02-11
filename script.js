const quoteDisplay = document.getElementById("quote");
const categoryInput = document.getElementById("quote-type");
const generateButton = document.getElementById("generate-btn");
const errorMessage = document.getElementById("error-message");

async function generateQuote(category) {
  const apiKey = "FaEcXpassVceKjoDA+dlPQ==JEjlQcEXdViu9m5i";
  const url = `https://api.api-ninjas.com/v1/quotes?category=${category}`;

  try {
    const response = await fetch(url, {
      headers: {
        "X-Api-Key": apiKey
      }
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    const randomIndex = Math.floor(Math.random() * data.length);
    const quote = data[randomIndex].quote;
    quoteDisplay.textContent = quote;
    errorMessage.style.display = "none";
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    errorMessage.textContent = "Failed to generate quote. Please try again.";
    errorMessage.style.display = "block";
    quoteDisplay.textContent = "";
  }
}

generateButton.addEventListener("click", () => {
  const category = categoryInput.value;
  generateQuote(category);
});
