// Form Validation and Dynamic Pricing
document.addEventListener("DOMContentLoaded", function () {

    // Array of background images
    const images = [
        'https://glscanada.ca/wp-content/uploads/2018/10/landscaping-and-snow-removal.jpg',
        'https://www.deere.ca/assets/images/region-4/products/attachments/attachments-and-implements/utiilty-tractor-attachments-accessories/snow-removal/snow-removal-hero-image-1366x347.jpg',
        'https://www.agsod.com/wp-content/uploads/2018/04/lawn-mower.jpg',
    ];

    let currentImageIndex = 0;

    // Function to change the background image
    function changeBackgroundImage() {
        const banner = document.getElementById('banner');
        banner.style.backgroundImage = `url(${images[currentImageIndex]})`;
    }

    // Automatically change image every 5 seconds
    setInterval(function() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        changeBackgroundImage();
    }, 5000);

    // Change image with arrow button clicks
    document.getElementById('prev').addEventListener('click', function() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        changeBackgroundImage();
    });

    document.getElementById('next').addEventListener('click', function() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        changeBackgroundImage();
    });

    // Initial background image load
    changeBackgroundImage();









    const form = document.getElementById("quote-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Get form values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const age = parseInt(document.getElementById("age").value, 10);
        const landSize = parseFloat(document.getElementById("land-size").value);

        // Validate inputs
        if (!name || !email || isNaN(age) || isNaN(landSize)) {
            alert("Please fill out all fields correctly.");
            return;
        }

        // Check age
        if (age < 18) {
            alert("You must be 18 or older to request a quote. Age limit is 18.");
            return;
        }

        // Calculate pricing
        const basePrice = 0.1; // Price per square foot
        let totalPrice = landSize * basePrice;

        // Apply summer promotion (10% off)
        const isSummer = new Date().getMonth() >= 5 && new Date().getMonth() <= 8;
        if (isSummer) {
            totalPrice *= 0.9; // Apply 10% discount
        }
        // Apply winter promotion (15% off for snow shoveling)
        const isWinter = new Date().getMonth() === 11 || new Date().getMonth() === 0 || new Date().getMonth() === 1;
        if (isWinter) {
            totalPrice *= 0.85; // Apply 15% discount for winter
        }

        // Display the results
        alert(`Thank you, ${name}! Based on your land size of ${landSize} sq. ft., the estimated price is $${totalPrice.toFixed(2)}.`);
    });

    // Promotion Popup
    const promotionPopup = () => {
        if (isSummer) {
        alert("🌞 Summer Special! Get 10% off on all lawn mowing services!");
        }
        if (isWinter) {
            alert("❄️ Winter Special! Get 15% off on all snow shoveling services!");
        }
    };

        promotionPopup(); // Show popup on page load
        
    
});

