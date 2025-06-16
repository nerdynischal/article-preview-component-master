const shareBtn = document.querySelector(".share-btn");
const shareIcon = document.getElementById("share-icon");
const iconContainer = document.querySelector(".icon-container");
const shareContainer = document.querySelector(".share-container");

shareBtn.addEventListener("click", () => {
  if (shareContainer.style.display === "flex") {
    shareIcon.style.fill = "#6E8098";
    shareContainer.style.display = "none";
    shareBtn.style.transform = "translateY(0px)";
    iconContainer.style.background = "var(--light-grayish-blue)";
  } else {
    shareContainer.style.display = "flex";
    shareIcon.style.fill = "white";
    iconContainer.style.background = "var(--desaturated-dark-blue)";
    if (self.innerWidth < 698) {
      shareBtn.style.transform = "translateY(12px)";
    }
  }
});
