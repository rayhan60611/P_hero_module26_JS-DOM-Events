document.getElementById("btn").addEventListener("click", function (event) {
  const newTextarea = document.getElementById("textarea").value;
  const myInput = document.getElementById("my-input").value;

  const section = document.getElementById("section1");

  const newDiv = document.createElement("div");
  newDiv.classList.add("div");

  const newH1 = document.createElement("h1");
  newH1.innerText = myInput;

  const newP = document.createElement("p");
  newP.innerText = newTextarea;

  //child appending
  section.appendChild(newDiv);
  newDiv.appendChild(newH1);
  newDiv.appendChild(newP);
});
