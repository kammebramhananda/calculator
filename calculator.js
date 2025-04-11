const buttons = document.getElementsByClassName("box2"); // Removed the dot before the class name
const result = document.querySelector(".result"); // Used querySelector to access single element
let finalResult;

const showResult = (event) => {
    // console.log(event.target.innerText);
    const value = event.target.innerText; // Fetch the button text correctly
    if (value === "=") {
        try {
            result.value = eval(result.value); // Evaluate the result expression
        } catch {
            result.value = "Error";
        }
    } else if (value === "AC") {
        result.value = ""; // Clear all content
    } else if (value === "C") {
        result.value = result.value.slice(0, -1); // Remove the last character
    } else {
        result.value += value; // Append the button value
    }
};

// Attach the event listener for all buttons
for (const button of buttons) {
    button.addEventListener("click", showResult); // Correct usage of addEventListener
}
