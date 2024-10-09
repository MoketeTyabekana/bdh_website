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