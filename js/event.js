document.getElementById("btn").addEventListener("click", function (event) {
  const newTextarea = document.getElementById("textarea");
  const myInput = document.getElementById("my-input");
  const msg = document.getElementById("top-h1");
  if (myInput.value == "" && newTextarea.value == "") {
    msg.innerText = "Title And blog Body can't be empty...";
    msg.style.color = "red";
  } else {
    const section = document.getElementById("section1");

    const newDiv = document.createElement("div");
    newDiv.classList.add("div");

    const newH1 = document.createElement("h1");
    newH1.setAttribute("id", "h1");
    newH1.innerText = myInput.value;

    const newP = document.createElement("p");
    newP.innerText = newTextarea.value;

    //child appending
    section.appendChild(newDiv);
    newDiv.appendChild(newH1);
    newDiv.appendChild(newP);
    style();

    myInput.value = "";
    newTextarea.value = "";
    msg.innerText = "Type your blog here...";
    msg.style.color = "blue";
  }
});
