import { runData, runComments } from "./storeData.js";
const toggleMenu = () => {
  let getMenuBtn = document.getElementById("menuBtn");
  let getMenuItems = document.getElementById("menuItems");

  getMenuBtn.addEventListener("click", () => {
    getMenuBtn.classList.toggle("openHamburger");
    getMenuItems.classList.toggle("flex");
    getMenuItems.classList.toggle("hidden");
  });
};
const displayData = () => {
  let receiveData = runData();
  let addItems = document.getElementById("addItem");
  for (let index = 0; index < receiveData.length; index++) {
    receiveData[index].map((ft) => {
      addItems.innerHTML += `
        <div class="flex items-center space-x-2">
          <div class="px-4 py-2 text-white rounded-full bg-blue-400 md:py-1">
            ${ft.id}
            </div>
            <span class="text-white font-bold"> ${ft.name}</span>
          <div class="text-base font-bold md:mb-3 md:hidden">
            <h3>
              ${ft.topic}
            </h3>
          </div>
       </div>
      <div class="hidden mb-3 text-lg font-bold md:block">
        <h3>
         ${ft.topic}
        </h3>
        <div class="text-angylightGray">
        <p>
          ${ft.feedback}
        </p>
       </div>
      </div>   
    `;
    });
  }
};
const showComments = () => {
  let receiveComments = runComments();
  let getComments = document.getElementById("comments");
  for (let index = 0; index < receiveComments.length; index++) {
    receiveComments[index].map((cm) => {
      getComments.innerHTML += `
      <div class='mr-10 p-3  rounded-lg bg-blue-300 flex'>
      <img src=${cm.srcImg} alt=${cm.srcImg} class="w-15 -mt-20">
      <h3 class="text-lg font-bold mt-10">${cm.name}</h3>
      <p class="text-sm text-angylightGray pt-5 mt-20">
       ${cm.comments}
      </p>
      </div>`;
    });
  }
};

toggleMenu();
displayData();
showComments();
