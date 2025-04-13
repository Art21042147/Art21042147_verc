/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

// Images zoom 
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".img-interactive").forEach(img => {
        img.addEventListener("click", function () {
            this.classList.toggle("enlarged");
        });
    });
});

// Telegram bot

document.getElementById("contactForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    const message = document.getElementById("messageText").value.trim();
    if (message === "") {
        alert("Please enter a message!");
        return;
    }

    const url = "https://art21042147.vercel.app/api/sendMessage";

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text: message })
        });

        if (response.ok) {
            document.getElementById("submitSuccessMessage").classList.remove("d-none");
            document.getElementById("submitErrorMessage").classList.add("d-none");
            document.getElementById("contactForm").reset();
        } else {
            console.error("Error sending message:", response.status, response.statusText);
            document.getElementById("submitSuccessMessage").classList.add("d-none");
            document.getElementById("submitErrorMessage").classList.remove("d-none");
        }
    } catch (error) {
        console.error("Request error:", error);
        document.getElementById("submitSuccessMessage").classList.add("d-none");
        document.getElementById("submitErrorMessage").classList.remove("d-none");
    }
});

function scrollGallery(direction) {
    const container = document.querySelector('.scroll-gallery-container');
    const scrollAmount = 200;
    container.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
}
