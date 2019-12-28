// Div with text
const divWithText = document.getElementById("highlightedText");
// Input
const input = document.getElementById("textInput");
// Button
const highlightVowelsButton = document.getElementById("highlightVowelsButton");

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
      letter === "е"
    ) {
      newSpan.classList.add("highlight");
    }

    // Making the <span> element show up
    divWithText.appendChild(newSpan);
  }

  input.value = "";
});
