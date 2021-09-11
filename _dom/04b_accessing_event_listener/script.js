/* 
  ? In the left most column, there are three inputs for your name, the language you are currently learning, and cohort. After typing data in and submitting the form the value from each input is interpolated into the <p> underneath the form into the following format: "Hello `name`, hope you are enjoying learning about `language` in `cohort`
 */

function challengeOne() {
  
  let form = document.querySelector("form")
  form.addEventListener("submit", event => {
    event.preventDefault()
    
    const [nameDiv, languageDiv, cohortDiv] = event.target.children
    let nameValue = nameDiv.children[1].value
    let languageValue = languageDiv.children[1].value
    let cohortValue = cohortDiv.children[1].value

    document.getElementById("output").innerText = `Hello ${nameValue}, hope you are enjoying learning about ${languageValue} in ${cohortValue}`

  });
};

/*
  ? We can have one button with text that will change to "Light Mode" when it's dark and "Dark Mode" when it's light. Each time the button is pressed, the column should change themes and the button text will change as well.
*/

function challengeTwo() {

  let btn = document.querySelector("#change-theme")
  btn.addEventListener("click", event => {
    event.preventDefault()
    let div = document.getElementById("challenge-two")
    if (div.classList.contains("darkmode")) {
      div.classList.remove("darkmode")
      btn.innerText = "Dark Mode"
    } else {
      div.classList.add("darkmode")
      btn.innerText = "Light Mode"
    }
  });

};

/*
  ? There is one red div that is the only draggable element. There are ten orange divs that are the "receivers", onto which the red div can be dragged. The difficulty here is that there are so many of the orange elements that need event listeners. Instead of doing each manually, find out how to iterate over the collection of orange divs. The red div can be dropped into any of the orange divs, but when its dropped onto the last one it should change from red to green. If it is placed back on one of the other orange divs it should return back to its initial red colour.
*/

function challengeThree() {
  
  function drag(dragevent) {
    dragevent.dataTransfer.setData("text", dragevent.target.id);
  }

  function drop(dropevent) {
    dropevent.preventDefault();
    let data = dropevent.dataTransfer.getData("text");
    let child = document.getElementById(data)
    dropevent.target.appendChild(child)

    if (dropevent.target.id == "to") {
      child.style.backgroundColor = "green"
    } else {
      child.style.backgroundColor = "red"
    }

  } 

  function allowDrop(allowdropevent) {
    allowdropevent.preventDefault();
  } 

  let divs = document.getElementsByClassName("drag")
  for (let div of divs) {
    div.addEventListener("dragover", allowDrop)
    div.addEventListener("drop", drop)
    console.log(div);
  }

  document.getElementById("dragger").addEventListener("dragstart", drag)

}