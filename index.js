// Div with text
const divWithText = document.getElementById("highlightedText");
// Input
const input = document.getElementById("textInput");
// Button
const highlightVowelsButton = document.getElementById("highlightVowelsButton");
// Pasting the text from the input to the div below and highlighting vowels
highlightVowelsButton.addEventListener("click", function() {
  // Clear div
  divWithText.innerText = "";
  // Text from input
  const inputText = input.value;
  // each word array
  const eachLetterFromText = inputText.split("");

  for (let i = 0; i < eachLetterFromText.length; i++) {
    // Letter
    const letter = eachLetterFromText[i];
    // Create <span> element
    let newSpan = document.createElement("span");
    // An <span> gets the value from an array as the 'for' goes on
    newSpan.innerHTML = eachLetterFromText[i];
    // Cheking for vowels
    if (
      letter === "а" ||
      letter === "у" ||
      letter === "о" ||
      letter === "ы" ||
      letter === "и" ||
      letter === "э" ||
      letter === "я" ||
      letter === "ю" ||
      letter === "ё" ||
      letter === "е" ||
      letter === "А" ||
      letter === "У" ||
      letter === "О" ||
      letter === "И" ||
      letter === "Э" ||
      letter === "Я" ||
      letter === "Ю" ||
      letter === "Ё" ||
      letter === "Е"
    ) {
      // Add class that will highlight vowels
      newSpan.classList.add("highlight");
    }
    // Making the <span> element show up
    divWithText.appendChild(newSpan);
  }
  // Clear input form
  input.value = "";
});
