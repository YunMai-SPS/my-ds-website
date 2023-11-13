document.addEventListener('DOMContentLoaded', function() {
    const panel = document.getElementById('sticky-panel');
    const panelPosition = panel.getBoundingClientRect().top + window.pageYOffset;

    window.addEventListener('scroll', function() {
        if (window.pageYOffset >= panelPosition) {
            panel.style.position = 'fixed';
            panel.style.top = '0';
        } else {
            panel.style.position = 'static';
        }
    });
});



// JavaScript for smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 60, // Adjust for the fixed header height
                    behavior: "smooth",
                });
            }
        });
    });
});
