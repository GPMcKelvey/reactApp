// 1. Test

let x = 10;
console.log(x);

// 2. - getElementById()
//best practice to store elements we're grabbing from the HTML in a variable so we can reference them again later on if needed

let testParagraph = document.getElementById("testParagraph");
console.log(testParagraph);

testParagraph.style.color = "blue";

/*
    getElementById() grabs the first HTML element with the specified value - so if we have two elements with the same id, it will grab the first one it comes across
*/

// 3. querySelectorAll() & innerText / textContent / innerHTML
console.log(document.querySelectorAll("p.sampleClass")); // querySelectorAll() returns a nodelist containing all elements that match the specified group of selectors. Nodelist objects are collections of nodes, which are simply just various items in the HTML document itself like p tags, h1 tags, etc.
// NOTE - work on forEach methods

document.querySelectorAll("p.sampleClass")[1].innerText = "My text has changed!"

            // [p.sampleClass . . .]
let changeAll = document.querySelectorAll("p.sampleClass");

changeAll.forEach(pTag => {
    // console.log(pTag);
    // pTag.innerText = "My text has changed using a forEach() method!"
    // pTag.textContent = "My test has changed using a forEach() method!"
    pTag.innerHTML = "<i>My text has changed using a forEach() method!</i>"
})

/*
    - innerText simply references or allows us to change the text of a specified element. Will return only visible text in a "node".
    - textContent does the same thing that innerText does, but it will return the full text of a "node".
    - innerHTML allows us to set text as well as HTML elements. The HTML elements will be nested inside of the current HTML element we're referencing.
*/

// 3.5 textContent vs innerText
console.log(document.getElementById("spanTest").innerText);

console.log(document.getElementById("spanTest").textContent);

// 4 addEventListener()

let button = document.getElementById("clickThisButton");
// console.log(button)
// the event object that we get back from the event triggering holds a key of "target". This is a key that we will access from the event object frequently.


// button.addEventListener("click", function (event){ 
//     event.target.style.backgroundColor = "blue";
// })

// both of these methods are valid and will work but it is good practice to use fat arrow functions.

// button.addEventListener("click", event => {

// })


/*
***********
CHALLENGE
***********
    - make the button toggle between red and blue when clicked
*/

button.addEventListener("click", function (event){ 
    let evTarget = event.target;
    console.log(evTarget);

    if (evTarget.style.backgroundColor == "red") {
        evTarget.style.backgroundColor = "blue";
    } else {
        evTarget.style.backgroundColor = "red";
    }
})

// 5. addEventListener() / getElementsByTag()

let inputField = document.getElementById("nameInput");
// console.log(inputField);

inputField.addEventListener("keyup", event => {
    let = evTarget = event.target;
    // console.log(evTarget.value);

    let pTags = document.getElementsByTagName("p");
    // console.log(pTags);
    pTags[0].innerText = "SOMETHING CHANGED!";

    if (evTarget.value == "") {
        pTags[1].innerText = "NOTHING HAS BEEN TYPED!";
    } else  {
        pTags[1].innerText = `Everyone say hello to ${evTarget.value}`;
    }
})