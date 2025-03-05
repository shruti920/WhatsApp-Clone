document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const body = document.body;

    // Dark mode toggle
    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        darkModeToggle.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌙';
    });

    // Sticky header background change on scroll
    window.addEventListener('scroll', function () {
        const header = document.querySelector('.sticky-header');
        header.style.backgroundColor = window.scrollY > 50 ? "#128C7E" : "#25D366";
    });

    // Menu toggle functionality
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
        if (!navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
            navMenu.classList.remove('active');
        }
    });
});
 
