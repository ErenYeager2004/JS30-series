let scrollbarContainer = document.querySelector(".galary");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nxtBtn");
scrollbarContainer.addEventListener("wheel", (e) => {
  e.preventDefault();
  scrollbarContainer.scrollLeft += e.deltaY;
  scrollbarContainer.style.scrollBehavior = "auto";
});

nextBtn.addEventListener("click", () => {
  scrollbarContainer.style.scrollBehavior = "smooth";
  scrollbarContainer.scrollLeft += 900;
});

backBtn.addEventListener("click", () => {
  scrollbarContainer.style.scrollBehavior = "smooth";
  scrollbarContainer.scrollLeft -= 900;
});
