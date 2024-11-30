const dropdowns = document.querySelectorAll(".dropdown");
const plusBtn = document.querySelector(".plus");
const overlay = document.querySelector(".overlay");
const popUp = document.querySelector(".pop-up");
const cancel = document.querySelector(".cancel");
const apply = document.querySelector(".apply");
const formInput = document.querySelector(".form-input");
const ItemsContainer = document.querySelector(".items");
const h = document.querySelector(".heading");
const header = document.querySelector(".header");
const img = document.querySelector(".imgh");
//
const checkUi = () => {
  const items = ItemsContainer.querySelectorAll("div");
  if (items.length === 0) {
    h.className = "hidden";
    header.className = "hidden";
    img.className = "imgh";
  } else {
    h.className = "heading";
    header.className = "header";
    img.className = "hidden";
  }
};
checkUi();
// console.log(itemInput.value);
function popUPMenu(e) {
  overlay.classList.remove("hidden");
  popUp.classList.remove("hidden");
}

function cancelPopUp(e) {
  overlay.classList.add("hidden");
  popUp.classList.add("hidden");
}
dropdowns.forEach((dropdown) => {
  const select = dropdown.querySelector(".select");
  const caret = dropdown.querySelector(".caret");
  const menu = dropdown.querySelector(".menu");
  const options = menu.querySelectorAll("li");
  const selected = dropdown.querySelector(".selected");

  select.addEventListener("click", () => {
    select.classList.toggle("select-clicked");
    caret.classList.toggle("caret-rotate");
    menu.classList.toggle("menu-open");
  });

  options.forEach((option) => {
    option.addEventListener("click", () => {
      selected.innerHTML = option.innerHTML;
      select.classList.remove("select-clicked");
      caret.classList.remove("caret-rotate");
      menu.classList.remove("menu-open");

      options.forEach((element) => {
        element.classList.remove("active");
      });
      option.classList.add("active");
    });
  });
});
plusBtn.addEventListener("click", popUPMenu);
cancel.addEventListener("click", cancelPopUp);
const AddBtn = document.querySelector(".btn");
const itemsLiist = document.querySelector(".items");
function createDiv(classes) {
  const div = document.createElement("div");
  div.className = classes;
  return div;
}
function createSpan(classes) {
  const span = document.createElement("span");
  span.className = classes;
  return span;
}
function addItems(e) {
  e.preventDefault();
  const item = createDiv("item");
  const checkbox = createDiv("checkbox");
  const action = createDiv("actions");
  const text = formInput.value;
  checkbox.innerHTML = ' <ion-icon name="checkmark-outline"></ion-icon>';
  const chekboxContainer = createDiv("chekbox-container");
  chekboxContainer.appendChild(checkbox);
  chekboxContainer.appendChild(document.createTextNode(text));
  const edit = createSpan("edit");
  const deleteEl = createSpan("delet");
  edit.innerHTML = '<ion-icon name="pencil-outline"></ion-icon>';
  deleteEl.innerHTML = '<ion-icon name="trash-outline"></ion-icon>';
  action.appendChild(deleteEl);
  // action.appendChild(edit);
  item.appendChild(chekboxContainer);
  item.appendChild(action);
  itemsLiist.appendChild(item);
  formInput.value = "";
  checkUi();
  // console.log(item);
}
// event
apply.addEventListener("click", addItems);
apply.addEventListener("click", cancelPopUp);
