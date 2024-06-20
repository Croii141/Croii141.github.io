document.addEventListener('DOMContentLoaded', function() {
    const displayImage = document.getElementById('display-image');
    const featureItems = document.querySelectorAll('.feature-item');

    featureItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const newImage = this.getAttribute('data-image');
            displayImage.style.opacity = 0; // Fade out
            setTimeout(() => {
                displayImage.src = newImage;
                displayImage.style.opacity = 1; // Fade in
            }, 500); // Match the transition duration
        });

        item.addEventListener('mouseleave', function() {
            displayImage.style.opacity = 0; // Fade out
            setTimeout(() => {
                displayImage.src = "images/hublogo.png"; // Default image
                displayImage.style.opacity = 1; // Fade in
            }, 500); // Match the transition duration
        });
    });
});


function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav');
    const navMenu = document.querySelector('.nav-menu');

    nav.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
});


