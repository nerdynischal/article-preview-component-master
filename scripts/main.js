console.log("Linked and ready to go");

const shareBtn = document.querySelector(".share-btn");
const shareBtnClose = document.querySelector(".share-btn-close");
const shareContainer = document.querySelector(".share-container");

const card = document.querySelector(".card-container");

shareBtn.addEventListener("click", () => {
  shareContainer.style.display = "flex";
});

shareBtnClose.addEventListener("click", () => {
  shareContainer.style.display = "none";
});
