const toggleButton = document.querySelector("#header-menu");
const hiddenLinks = document.querySelector("#hiddenLinks");

toggleButton.addEventListener("click", () => {
    hiddenLinks.classList.toggle("hidden");
});