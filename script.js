// Mobile Navigation Menu

const menuToggle =
document.querySelector(".menu-toggle");

const siteNav = 
document.querySelector(".site-nav");

if (menuToggle && siteNav) {

    menuToggle.addEventListener("click", function() {
          const isOpen =   
    siteNav.classList.toggle("is-open");

    menuToggle.setAttribute("aria-expanded", isOpen);

        menuToggle.setAttribute("aria-label", isOpen ? "close navigation menu" : 
        "Open navigation menu");

        menuToggle.textContent = isOpen ? "✖" : "☰";
    });
}

// Structural Projects Carousel

const structuralPhotos = [
    {
        src:"images/struct1.jpg",
        alt:"First structural photo"
    },
    {
        src:"images/struct2.jpg",
        alt:"Second structural photo"
    },
    {
        src:"images/struct3.jpg",
        alt:"Third structural photo"
    },
    {
        src:"images/struct4.jpg",
        alt:"Fourth structural photo"
    },
    {
        src:"images/struct5.jpg",
        alt:"Fifth structural photo"
    },
    {
        src:"images/struct6.jpg",
        alt:"Sixth structural photo"
    }
];

const architecturalPhotos = [
    {
        src: "images/arch1.jpg",
        alt: "First architectural project"
    },
    {
        src: "images/arch2.jpg",
        alt: "Second architectural project"
    },
    {
        src: "images/arch3.jpg",
        alt: "Third architectural project"
    },
    {
        src: "images/arch4.JPG",
        alt: "Fourth architectural project"
    },
    {
        src: "images/arch6.jpeg",
        alt: "Sixth architectural project"
    },
    {
        src: "images/arch7.jpg",
        alt: "Seventh architectural project"
    },
    {
        src: "images/arch8.jpg",
        alt: "Eigth architectural project"
    }
]; 

const civilPhotos = [
    {
        src: "images/civil1.jpg",
        alt: "First civil engineering project"
    },
    {
        src: "images/civil2.jpg",
        alt: "Second civil engineering project"
    },
    {
        src: "images/civil3.jpg",
        alt: "Third civil engineering project"
    }
];

// Reusable Photo Carousel

function initializeCarousel(carousel, photos) {
    
    if (!carousel || photos.length === 0) {
        return;
    }

    const carouselImage =

carousel.querySelector(".carousel-image");

    const previousButton = 

carousel.querySelector(".carousel-prev");

    const nextButton = 

carousel.querySelector(".carousel-next");

    const photoCounter =

carousel.querySelector(".carousel-counter");

let currentIndex = 0

function showPhoto(index) {

    if (index < 0) {
        index = photos.length - 1;
    }

    if (index >= photos.length) {
        index = 0;
    }

    currentIndex = index;

    carouselImage.src =
    photos[currentIndex].src;

    carouselImage.alt =
    photos[currentIndex].alt;

    photoCounter.textContent = 
        `Photo ${currentIndex + 1} of ${photos.length}`;
}

    previousButton.addEventListener("click", function() {
        showPhoto(currentIndex - 1);

    });

    nextButton.addEventListener("click", function() {
        showPhoto(currentIndex + 1);

    });

    showPhoto(0);
}

initializeCarousel(document.querySelector("#structural-carousel"), structuralPhotos);

initializeCarousel(document.querySelector("#architectural-carousel"), architecturalPhotos);

initializeCarousel(document.querySelector("#civil-carousel"), civilPhotos);
