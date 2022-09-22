//get the input-fields container element
const inputFields = document.getElementById("input-fields")

//creates an input element
const inputText = document.createElement("input")
//adds the input field to the input-fields container on the webpage
inputFields.append(inputText)

// creates a button element
const addTextButton = document.createElement("button")
// sets the button text to "Add"
addTextButton.textContent = "Add"
// add the button to the input-fields container on the webpage
inputFields.append(addTextButton)

// add event listener that runs when we click the Add button
addTextButton.addEventListener("click", () => {
    if (!inputText.value) return
    const textDisplay = document.createElement("p")
    textDisplay.textContent = inputText.value
    inputFields.append(textDisplay)
    //resets the value
    inputText.value = ""   



    //adds remove button
    const removeTextButton = document.createElement("button")
    //sets txt as delete
    removeTextButton.textContent = "Delete"
    //adds delete button to textDisplay paragraph
    textDisplay.append(removeTextButton)

    removeTextButton.addEventListener("click", () => {
    textDisplay.remove()
    })

})