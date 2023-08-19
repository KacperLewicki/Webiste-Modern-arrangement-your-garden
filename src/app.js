
const searchIcon = document.querySelector(".search-icon");
const searchBox = document.querySelector(".search input[type='text']");
const searchDropdown = document.querySelector(".search-dropdown");
const menu = document.querySelector(".menu");
const offerBtn = document.getElementById("offerBtn");
const offerSubMenu = document.getElementById("offerSubMenu");
const photo7 = document.getElementById("photo7");
const photo8 = document.getElementById("photo8");
const photo9 = document.getElementById("photo9");
const photo4 = document.getElementById("photo4");
const photo2 = document.getElementById("photo2");
const photo6 = document.getElementById("photo6");
const rozwinBtn = document.getElementById("rozwinBtn");

offerBtn.addEventListener("mouseover", () => {
    offerSubMenu.classList.remove("hidden");
  });
  
  offerSubMenu.addEventListener("mouseleave", () => {
    offerSubMenu.classList.add("hidden");
  });


searchIcon.addEventListener("mouseenter", () => {
  searchBox.classList.remove("hidden");
  searchDropdown.classList.remove("hidden");
  menu.classList.add("hidden");
  searchIcon.classList.add("hidden");
});

searchBox.addEventListener("mouseleave", () => {
  searchBox.classList.add("hidden");
  searchDropdown.classList.add("hidden");
  menu.classList.remove("hidden");
  searchIcon.classList.remove("hidden");
});

searchBox.addEventListener("focus", () => {
  searchDropdown.classList.remove("hidden");
});

searchBox.addEventListener("blur", () => {
  searchDropdown.classList.add("hidden");
});


document.addEventListener("DOMContentLoaded", () => {

  photo7.style.display = "none";
  photo8.style.display = "none";
  photo9.style.display = "none";

const rozwinBtn = document.getElementById("rozwinBtn");
  rozwinBtn.addEventListener("click", () => {
   
    if (photo7.style.display === "none") {
      photo7.style.display = "block";
      photo8.style.display = "block";
      photo9.style.display = "block";
    } else {
      photo7.style.display = "none";
      photo8.style.display = "none";
      photo9.style.display = "none";
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  let isExpanded = false;
  rozwinBtn.addEventListener("click", () => {
     
      if (photo4.classList.contains("blur")) {
          photo4.classList.remove("blur");
          photo2.classList.remove("blur");
          photo6.classList.remove("blur");
          rozwinBtn.textContent = "Zwiń";
      } else {
          photo4.classList.add("blur");
          photo2.classList.add("blur");
          photo6.classList.add("blur");
          rozwinBtn.textContent = "Rozwiń";
      }
      isExpanded = !isExpanded;
  });
});
