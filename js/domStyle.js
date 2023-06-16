// section styleing
style();
function style() {
  const divs = document.getElementsByClassName("div");
  for (const div of divs) {
    div.style.border = "2px solid gray";
    div.style.padding = "8px";
    div.style.textAlign = "justify";
    div.style.backgroundColor = "#7fffd4e0";
    div.style.color = "black";
    div.style.borderRadius = "15px";
  }

  const myH1 = document.getElementById("h1");
  myH1.style.textAlign = "center";
}
