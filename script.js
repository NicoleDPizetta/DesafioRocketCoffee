function showMenu() {
  if (menuLinks.style.display == "block") {
    menuLinks.style.display = "none";
  } else {
    menuLinks.style.display = "block";
  }
}

function changeMenuIcon() {
  const checked = document.querySelector("#checkboxMenu:checked") !== null;
  console.log(checked);

  if (checked == true) {
    menuBurger.setAttribute("src", "./assets/menu-buguer-close.svg");
    heroSection.style.display = "none";
  } else {
    menuBurger.setAttribute("src", "./assets/menu-buguer-open.svg");
    heroSection.style.display = "contents";
  }
}
