// document.getElementById("count-el").innerText = 5;

/*Lesson 2: Write your first JavaScript variable */

// let count = 5

/* Reassigning and incrementing */

// count = count + 1


/*Lesson 3: The onclick event listener*/

let count=0
let countEl = document.getElementById("count-el")
let saveEl= document.getElementById("save-el")

console.log(countEl) // Return a representation js
console.log(saveEl)
// Listen for clicks on the increment button

//Increment the count variable when the button is clicked

function increment() {
    console.log("The button was clicked")
    count += 1
    countEl.textContent= count
    console.log(count)
}

/*Lesson 4: Add a save buttom and function*/
function save() {
    let countStr = count + " - "

/* Lesson 5: Add a string Previus entries */
    saveEl.textContent += countStr

/* Lesson 6: Reset the count */
    countEl.textContent = 0
    count = 0
    console.log(count)
}

/* Alternatives to innerText */
// TextContent
