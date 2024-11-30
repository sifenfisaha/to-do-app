const dropdowns = document.querySelectorAll(".dropdown");
const plusBtn = document.querySelector(".plus");
const overlay = document.querySelector(".overlay");
const popUp = document.querySelector(".pop-up");
const cancel = document.querySelector("cancel");
//
function popUPMenu(e) {
  overlay.classList.toggle("hidden");
  popUp.classList.toggle("hidden");
}
function cancelPopUp(e) {
  overlay.classList.toggle("hidden");
  popUp.classList.toggle("hidden");
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
