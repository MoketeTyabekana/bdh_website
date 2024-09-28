// navigation

document.getElementById('prevSlide').addEventListener('click', () => {
    console.log('Previous slide');
    // Implement previous slide functionality
});

document.getElementById('nextSlide').addEventListener('click', () => {
    console.log('Next slide');
    // Implement next slide functionality
});

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// services Code
document.querySelectorAll('.apply-btn').forEach(button => {
    button.addEventListener('click', function() {
        alert('Thank you for your interest! We will contact you soon with more information.');
    });
});


// footer code

document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Mission, Vision and Goals
document.addEventListener('DOMContentLoaded', function() {
    const mvvItems = document.querySelectorAll('.mvv-item');
    
    mvvItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        item.addEventListener('mouseout', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});


// Our team

document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.team-slider');
    const btnLeft = document.querySelector('.slider-btn-left');
    const btnRight = document.querySelector('.slider-btn-right');

    btnLeft.addEventListener('click', () => {
        slider.scrollBy({ left: -270, behavior: 'smooth' });
    });

    btnRight.addEventListener('click', () => {
        slider.scrollBy({ left: 270, behavior: 'smooth' });
    });

    // Keyboard navigation
    slider.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            slider.scrollBy({ left: -270, behavior: 'smooth' });
        } else if (e.key === 'ArrowRight') {
            slider.scrollBy({ left: 270, behavior: 'smooth' });
        }
    });

    // Touch swipe functionality
    let touchStartX = 0;
    let touchEndX = 0;

    slider.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, false);

    slider.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, false);

    function handleSwipe() {
        if (touchEndX < touchStartX) {
            slider.scrollBy({ left: 270, behavior: 'smooth' });
        }
        if (touchEndX > touchStartX) {
            slider.scrollBy({ left: -270, behavior: 'smooth' });
        }
    }
});