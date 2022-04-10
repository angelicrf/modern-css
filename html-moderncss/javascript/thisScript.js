const toggleMenu = () => {
  console.log("func clicked");
  let getMenuBtn = document.getElementById("menuBtn");
  let getMenuItems = document.getElementById("menuItems");

  getMenuBtn.addEventListener("click", () => {
    console.log("toggled");
    getMenuBtn.classList.toggle("openHamburger");
    getMenuItems.classList.toggle("flex");
    getMenuItems.classList.toggle("hidden");
  });
};
toggleMenu();
