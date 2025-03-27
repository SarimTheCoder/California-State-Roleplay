// =========================
// Vertical Navigation Bar
// =========================
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".new-side-nav ul");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });
});

// =========================
// Back to Top Button
// =========================
document.addEventListener("DOMContentLoaded", () => {
    const backToTopButton = document.getElementById("back-to-top");

    // Show the button when the user scrolls down 100px
    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            backToTopButton.style.display = "flex"; // Show the button
        } else {
            backToTopButton.style.display = "none"; // Hide the button
        }
    });

    // Scroll to the top when the button is clicked
    backToTopButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // Smooth scrolling
        });
    });
});

// =========================
// Collapsible Departments Section
// =========================
document.addEventListener("DOMContentLoaded", () => {
    const collapseButton = document.querySelector(".collapse-btn");
    const departmentList = document.querySelector(".department-list");

    collapseButton.addEventListener("click", () => {
        departmentList.classList.toggle("collapsed");

        // Update button text based on state
        if (departmentList.classList.contains("collapsed")) {
            collapseButton.textContent = "Show Departments";
        } else {
            collapseButton.textContent = "Hide Departments";
        }
    });
});

// =========================
// Toggle Menu (Mobile Navigation)
// =========================
function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}

// =========================
// Theme Toggle (Dark/Light Mode)
// =========================
document.addEventListener("DOMContentLoaded", () => {
    const themeToggleButton = document.getElementById("theme-toggle");
    const body = document.body;

    // Set default theme to dark mode
    body.classList.remove("light-mode");

    // Toggle theme on button click
    themeToggleButton.addEventListener("click", () => {
        body.classList.toggle("light-mode");

        // Update button text/icon
        if (body.classList.contains("light-mode")) {
            themeToggleButton.textContent = "🌞"; // Light mode icon
        } else {
            themeToggleButton.textContent = "🌙"; // Dark mode icon
        }
    });
});

// =========================
// Smooth Scrolling for Anchor Links
// =========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    });
});

// =========================
// Highlight Active Link in Navigation
// =========================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".new-side-nav a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 50) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});