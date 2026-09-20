// Modern website interactions

function showMessage() {
    const message = document.getElementById("message");
    message.textContent = "🎉 দারুণ! JavaScript কাজ করছে — তোমার ওয়েবসাইট এখন আরও modern!";
}

function toggleDarkMode() {
    const body = document.body;
    const button = document.getElementById("themeButton");
    const isLight = body.classList.toggle("light");

    localStorage.setItem("theme", isLight ? "light" : "dark");
    button.textContent = isLight ? "🌙" : "☀️";
}

function loadTheme() {
    const savedTheme = localStorage.getItem("theme");
    const button = document.getElementById("themeButton");

    if (savedTheme === "light") {
        document.body.classList.add("light");
        button.textContent = "🌙";
    } else {
        button.textContent = "☀️";
    }
}

function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("open");
}

function closeMenu() {
    document.getElementById("navMenu").classList.remove("open");
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function setupScrollFeatures() {
    const topButton = document.getElementById("topButton");
    const navLinks = document.querySelectorAll(".nav a");

    window.addEventListener("scroll", () => {
        topButton.classList.toggle("show", window.scrollY > 500);
    });

    navLinks.forEach(link => {
        link.addEventListener("click", closeMenu);
    });
}

function setupRevealAnimations() {
    const items = document.querySelectorAll(".reveal");

    if (!("IntersectionObserver" in window)) {
        items.forEach(item => item.classList.add("visible"));
        return;
    }

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.12 }
    );

    items.forEach(item => observer.observe(item));
}

document.addEventListener("DOMContentLoaded", () => {
    loadTheme();
    setupScrollFeatures();
    setupRevealAnimations();
});
