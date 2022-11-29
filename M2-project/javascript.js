let listInHTML = document.querySelector(".list");
let fromInput = document.querySelector("input"); //inputdan daxil edilen goturulur
let addbutton = document.querySelector(".button-main"); //buttonu goturduk

addbutton.addEventListener("click", () => {
  if (fromInput.value === "") {
  } else {
    let createDiv = document.createElement("div"); //div yaratdiq
    createDiv.classList.add("list-item");
    let createPtag = document.createElement("p"); //P yaratiq
    let createImg = document.createElement("img");
    createImg.classList.add("list-img");
    createImg.src = "./delete button.png";
    createPtag.innerText = fromInput.value;
    createDiv.appendChild(createPtag);
    listInHTML.appendChild(createDiv).appendChild(createImg);
    fromInput.value = "";
    if (listInHTML.childElementCount >= 5) {
      fromInput.style.display = "none";
    }
  }
  let deleteButtonAll = document.querySelectorAll(".list-img"); //delete button elde edirik
  deleteButtonAll.forEach((deleteButton) => {
    deleteButton.addEventListener("click", () => {
      deleteButton.parentElement.remove();
      if (listInHTML.childElementCount <= 5) {
        fromInput.style.display = "block";
      }
    });
  });
});
