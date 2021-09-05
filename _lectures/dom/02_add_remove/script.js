function activity() {
  // 1. Anchor code here
  let a = document.querySelector("a")
  a.innerHTML = "DOM Manipulation";

  // 2. List Item code here
  let ul = document.querySelector("ul")
  let li1 = ul.children[ul.children.length - 1]
  ul.removeChild(li1);

  // 3. Form code here
  let form = document.querySelector("form")
  let label = document.createElement("label")
  label.innerHTML = "Name:"
  form.prepend(label);

  // 4. Paragraph code here
  let qs = document.getElementById("question")
  let answer = document.createElement("p")
  answer.innerHTML = "42"
  qs.appendChild(answer);

}

activity()