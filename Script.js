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
                    




// Get the container element
var container = document.getElementById("iframeContainer");

// Function to read links from links.txt
function readLinksFromFile() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "links.txt", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var links = xhr.responseText.split("\n"); // Assuming each link is on a new line
            createIframes(links);
        }
    };
    xhr.send();
}

// Function to create and add iframes with buttons
function createIframes(links) {
    for (var i = 0; i < links.length; i++) {
        var link = links[i].trim();
        if (link !== "") {
            var iframe = document.createElement("iframe");
            iframe.src = link;
            iframe.className = "iframe"; // Apply the "iframe" class for styling

            // Create a button to open the link in a new tab
            var openButton = document.createElement("button");
            openButton.innerText = "Open";

            // Use a function to capture the correct link for the button
            openButton.addEventListener("click", (function (url) {
                return function () {
                    window.open(url, "_blank");
                };
            })(link));

            // Create a container div for the iframe and button
            var containerDiv = document.createElement("div");
            containerDiv.appendChild(iframe);
            containerDiv.appendChild(openButton);

            container.appendChild(containerDiv);
        }
    }
}

// Call the function to read links from the file and create iframes with buttons
readLinksFromFile();
                          





























/*
// JavaScript for changing background color every 5 seconds
const colors =["#000080", "#000000", "#191970", "#C0C0C0", "#4169E1"]
let currentIndex = 0; // Start with the first color

function changeBackgroundColor() {
    document.body.style.backgroundColor = colors[currentIndex]; // Change the background color
    currentIndex = (currentIndex + 1) % colors.length; // Move to the next color
}

// Call the function to change the background color every 5 seconds
setInterval(changeBackgroundColor, 5000);
*/
