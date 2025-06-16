console.log("Linked and ready to go");

const shareBtn = document.querySelector(".share-btn");
const shareIcon = document.getElementById("share-icon");
const iconContainer = document.querySelector(".icon-container");
const shareContainer = document.querySelector(".share-container");

const card = document.querySelector(".card-container");

shareBtn.addEventListener("click", () => {
  if (shareContainer.style.display === "none") {
    shareContainer.style.display = "flex";
    shareIcon.style.fill = "white";
    iconContainer.style.background = "var(--desaturated-dark-blue)";
    //console.log(self.innerWidth);
    if (self.innerWidth < 698) {
      shareBtn.style.transform = "translateY(12px)";
    }
  } else {
    shareIcon.style.fill = "#6E8098";
    shareContainer.style.display = "none";
    shareBtn.style.transform = "translateY(0px)";
    iconContainer.style.background = "var(--light-grayish-blue)";
  }
});
