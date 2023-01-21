const toggleBtn = document.getElementById("toggle-sidebar-btn");
const closeButton = document.getElementById("close-sidebar");

const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

toggleBtn.addEventListener("click", (e) => {
    sidebar.style.display = "block";
    overlay.style.display = "block";
});

overlay.addEventListener("click", () => {
    sidebar.style.display = "none";
    overlay.style.display = "none";
});

closeButton.addEventListener("click", () => {
    sidebar.style.display = "none";
    overlay.style.display = "none";
});