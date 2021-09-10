// * In the left most column, each time the button is clicked it should log "Hello World" to the console.
function challengeOne() {
  let btn1 = document.querySelector("#challenge-one")
  btn1.addEventListener("click", event => {
    event.preventDefault();
    console.log("Hello World");
  });
};

// * In the middle column, there is an <ul>. Each time the button is pressed it should create an append a new <li>. Each list item will have the text "New List Item"
function challengeTwo() {
  let btn2 = document.querySelector("#challenge-two")
  btn2.addEventListener("click", () => {
    let li = document.createElement("li")
    li.innerHTML = "New List Item"
    let ul = document.querySelector("ul")
    ul.appendChild(li)
  })  
}

// * In the right most column which has an id of 'rainbow' and begins with a background colour of violet (rgb(238, 130, 238)). With each press of the button the background colour should cycle through each of the colours in the rainbow, these colours are in the array provided in the challengeThree function.
function challengeThree() {
  const colours = ['rgb(238, 130, 238)', 'rgb(75, 0, 130)', 'rgb(0, 0, 255)', 'rgb(0, 128, 0)', 'rgb(255, 255, 0)', 'rgb(255, 165, 0)', 'rgb(255, 0, 0)']
  
  let btn3 = document.querySelector("#challenge-three")
  btn3.addEventListener("click", () => {
    const rainbow = document.querySelector("#rainbow")

    let currentColour = window.getComputedStyle(rainbow).getPropertyValue("background-color")

    // capture the current background colour, find that index in the array and set the new background colour to be the next position in the array.
    let indexColour = colours.findIndex(e => e == currentColour)

    if (indexColour == colours.length - 1) {
      rainbow.style.backgroundColor = colours[0]
    } else {
      rainbow.style.backgroundColor = colours[indexColour + 1]
    };
  })
};