// ? Challenge 1: Add an event listener to each button that invokes the changeValue handler function with the correct value for the button

function challengeOne() {

  function changeValue(value) {

    // This is the callback function for the event handler
    // It should increment the value in the <p> by value
    let counterOne = document.getElementById("counter-one")
    counterOne.innerText = parseInt(counterOne.innerText) + value
  }

  let five = document.getElementById("five")
  let ten = document.getElementById("ten")
  let fifteen = document.getElementById("fifteen")

  five.addEventListener("click", () => changeValue(5))
  ten.addEventListener("click", () => changeValue(10))
  fifteen.addEventListener("click", () => changeValue(15))

}

/*
 ? Challenge 2: Use the event target to determine the value on the button that triggered the click event. Add that value to the current value in the paragraph and update what is shown on the page. When the Stop button is clicked, the event handlers should all be removed. 
 */

function challengeTwo() {
  function changeValue(event) {
    // This is the callback function for the event handler
    // It should either increment the value, decrement the value,
    // or stop changing the value in the <p> based on the button that is clicked

    let counter = document.getElementById("counter-two")
    counter.innerText = parseInt(event.target.value) + parseInt(counter.innerText)
  }

  const buttons = document.getElementsByClassName("challenge-two")
  for (let button of buttons) {
    button.addEventListener("click", changeValue)
  }

  let stop = document.getElementById("stop")
  stop.addEventListener("click", function stopper() {
    for (let button of buttons) {
      button.removeEventListener("click", changeValue)
    }
    stop.removeEventListener("click", stopper)
  })

}