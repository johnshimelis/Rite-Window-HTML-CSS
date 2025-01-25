function toggleMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  // Toggle the visibility of the mobile menu
  if (mobileMenu.style.display === "flex") {
    mobileMenu.style.display = "none";
  } else {
    mobileMenu.style.display = "flex";
  }
}

// Ensure proper state of menus when resizing
window.addEventListener("resize", () => {
  const mobileMenu = document.getElementById("mobileMenu");
  if (window.innerWidth >= 1024) {
    mobileMenu.style.display = "none"; // Hide mobile menu on desktop
  }
});