/* script.js */

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".navbar ul li a");
    const productImages = document.querySelector(".product-carousel");
    let isScrolling = true;

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Product carousel auto-scroll
    function scrollImages() {
        if (isScrolling) {
            productImages.scrollLeft += 1;
            if (productImages.scrollLeft >= productImages.scrollWidth - productImages.clientWidth) {
                productImages.scrollLeft = 0;
            }
        }
    }
    
    let scrollInterval = setInterval(scrollImages, 30);

    productImages.addEventListener("click", function () {
        isScrolling = !isScrolling;
        if (isScrolling) {
            scrollInterval = setInterval(scrollImages, 30);
        } else {
            clearInterval(scrollInterval);
        }
    });

    // Highlight active navigation link
    window.addEventListener("scroll", function () {
        let currentSection = "";
        document.querySelectorAll("section").forEach(section => {
            const sectionTop = section.offsetTop - 60;
            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute("id");
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) === currentSection) {
                link.classList.add("active");
            }
        });
    });

    // Show Map Functionality
    const showMapButton = document.getElementById("showMap");
    const mapContainer = document.getElementById("mapContainer");
    const mapFrame = document.getElementById("mapFrame");

    showMapButton.addEventListener("click", function () {
        if (mapContainer.style.display === "none") {
            mapContainer.style.display = "block";
            mapFrame.src = "https://www.google.com/maps/embed?..."; // Add your Google Maps embed URL here
            showMapButton.textContent = "Hide Map";
        } else {
            mapContainer.style.display = "none";
            mapFrame.src = "";
            showMapButton.textContent = "Show Map";
        }
    });
});