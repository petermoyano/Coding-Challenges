let sidebarOpen = false;

const hamburgerButton = document.getElementsByClassName("hamburger-icon")[0];
const closeIcon = document.getElementById("close-icon");
const sidebar = document.getElementsByClassName("sidebar")[0];

hamburgerButton.addEventListener("click", () => {
    sidebarOpen = true;
    sidebar.classList.remove("hide");
});
closeIcon.addEventListener("click", () => {
    sidebarOpen = false;
    sidebar.classList.add("hide");
});
