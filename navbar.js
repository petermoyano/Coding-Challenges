let sidebarOpen = false;
const hamburgerButton = document.getElementsByClassName("hamburger-icon")[0];
const closeIcon = document.getElementById("close-icon");
const sidebar = document.getElementsByClassName("sidebar")[0];

function navbar() {
    if (sidebarOpen) {
        sidebar.classList.remove("hide");
    } else {
        sidebar.classList.add("hide");
    }
    sidebarOpen = !sidebarOpen;
}
