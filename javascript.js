let listInHTML = document.querySelector(".list");
let fromInput = document.querySelector("input"); //inputdan daxil edilen goturulur
let inInputDeletebuttn = document.querySelector(".main_input img");
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
      inInputDeletebuttn.style.display = "none";
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
        inInputDeletebuttn.style.display = "block";
      }
      if (listInHTML.childElementCount === 0) {
        listInHTML.style.display = "none";
      }
    });
  });
});
let downSort = document.querySelector(".sort img:first-child");
let upSort = document.querySelector(".sort img:last-child");
downSort.addEventListener("click", () => {
  downSort.style.display = "none";
  upSort.style.display = "block";
  let selectListItems = [...document.querySelectorAll(".list-item")];
  selectListItems.sort((a, b) => {
    return parseInt(b.innerText) - parseInt(a.innerText);
  });
  listInHTML.replaceChildren(...listInHTML.children, ...selectListItems);
});
downSort.addEventListener("mouseover", () => {
  downSort.setAttribute("src", "/img/Sort_black_A-Z.png");
});
downSort.addEventListener("mouseout", () => {
  downSort.setAttribute("src", "/img/Sort_blur_A-Z.png");
});
upSort.addEventListener("click", () => {
  upSort.style.display = "none";
  downSort.style.display = "block";
  let selectListItems = [...document.querySelectorAll(".list-item")];
  selectListItems.sort((a, b) => {
    return parseInt(a.innerText) - parseInt(b.innerText);
  });
  listInHTML.replaceChildren(...listInHTML.children, ...selectListItems);
});
upSort.addEventListener("mouseover", () => {
  upSort.setAttribute("src", "/img/Sort_black_Z-A.png");
});
upSort.addEventListener("mouseout", () => {
  upSort.setAttribute("src", "/img/Sort_blur_Z-A.png");
});
inInputDeletebuttn.addEventListener("click", () => {
  fromInput.value = "";
});
inInputDeletebuttn.addEventListener("mouseover", () => {
  inInputDeletebuttn.setAttribute("src", "/img/delete_button_2.png");
});
inInputDeletebuttn.addEventListener("mouseout", () => {
  inInputDeletebuttn.setAttribute("src", "/img/delete_button.png");
});
