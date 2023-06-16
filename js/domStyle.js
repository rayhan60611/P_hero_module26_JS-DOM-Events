// section styleing
const divs = document.getElementsByClassName("div");
for (const div of divs) {
  div.style.border = "2px solid gray";
  div.style.padding = "8px";
  div.style.textAlign = "justify";
  div.style.backgroundColor = "lightgray";
  div.style.color = "blue";
  div.style.borderRadius = "15px";
}

const myH1 = document.getElementById("h1");
myH1.style.textAlign = "center";
