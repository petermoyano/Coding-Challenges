let sidebarOpen = false;
const hamburgerButton = document.getElementsByClassName("hamburger-icon")[0];
const closeIcon = document.getElementsByClassName("close-icon")[0];
const sidebar = document.getElementsByClassName("sidebar")[0];

function navbarFunctionality() {
    if (sidebarOpen) {
        sidebar.classList.remove("hide");
    } else {
        sidebar.classList.add("hide");
    }
    sidebarOpen = !sidebarOpen;
}
