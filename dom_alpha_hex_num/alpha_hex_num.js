const text = document.getElementById("chart");
let row = "";

for (let i = 1; i >= 0; i -= 0.01) {
  i = Math.round(i * 100) / 100;
  let alpha = Math.round(i * 255);
  let hex = (alpha + 0x10000).toString(16).substr(-2).toUpperCase();
  let perc = Math.round(i * 100);
  row +=
    "<tr><td>" +
    perc +
    "%</td><td> " +
    hex +
    "</td><td>" +
    alpha +
    "</td></tr>";
}

text.innerHTML += row;
