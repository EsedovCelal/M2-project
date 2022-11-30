let listInHTML = document.querySelector(".list");
let fromInput = document.querySelector("input"); //inputdan daxil edilen goturulur
let addbutton = document.querySelector(".button-main"); //buttonu goturduk

addbutton.addEventListener("click", () => {
  if (fromInput.value !== "") {
    listInHTML.style.display = "block";
    let createDiv = document.createElement("div"); //div yaratdiq
    createDiv.classList.add("list-item");
    let createPtag = document.createElement("p"); //P yaratiq
    createPtag.contentEditable = true;
    let createImg = document.createElement("img");
    createImg.classList.add("list-img");
    createImg.src = "/img/delete_button.png";
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
    deleteButton.addEventListener("mouseover", () => {
      deleteButton.setAttribute("src", "/img/delete_button_2.png");
    });
    deleteButton.addEventListener("mouseout", () => {
      deleteButton.setAttribute("src", "/img/delete_button.png");
    });
    deleteButton.addEventListener("click", () => {
      deleteButton.parentElement.remove();
      if (listInHTML.childElementCount <= 5) {
        fromInput.style.display = "block";
      }
      if (listInHTML.childElementCount === 0) {
        listInHTML.style.display = "none";
      }
    });
  });
});

let selectSortIcon = document.querySelector(".sort img");
selectSortIcon.addEventListener("mouseover", () => {
  selectSortIcon.setAttribute("src", "/img/Sort_black_A-Z.png");
});
selectSortIcon.addEventListener("mouseout", () => {
  selectSortIcon.setAttribute("src", "/img/Sort_blur_A-Z.png");
});

selectSortIcon.addEventListener("click", () => {
  let selectListItems = [...document.querySelectorAll(".list-item")];
  selectListItems.sort((a, b) => {
    return parseInt(b.innerText) - parseInt(a.innerText);
  });
  listInHTML.replaceChildren(...listInHTML.children, ...selectListItems);
});
