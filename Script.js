// JavaScript for smooth scrolling navigation
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('#nav-menu a');

    for (const link of navLinks) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }
});
                    
