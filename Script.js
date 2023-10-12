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
                    




// JavaScript for changing background color every 5 seconds
const colors =["#000080", "#000000", "#191970", "#C0C0C0", "#4169E1"]
let currentIndex = 0; // Start with the first color

function changeBackgroundColor() {
    document.body.style.backgroundColor = colors[currentIndex]; // Change the background color
    currentIndex = (currentIndex + 1) % colors.length; // Move to the next color
}

// Call the function to change the background color every 5 seconds
setInterval(changeBackgroundColor, 5000);
