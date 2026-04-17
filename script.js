// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        // Prevent smooth scrolling logic for empty hash links
        if (href === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Parallax Effect for Hero Fireflies
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const fireflies = document.querySelectorAll('.firefly');
    
    fireflies.forEach((firefly, index) => {
        const speed = 0.1 + (index * 0.05);
        firefly.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});

// Contact form validation
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    let isValid = true;
    let errorMessage = '';

    if (name === '') {
        isValid = false;
        errorMessage += 'Name is required.\n';
    }

    if (email === '') {
        isValid = false;
        errorMessage += 'Email is required.\n';
    } else if (!isValidEmail(email)) {
        isValid = false;
        errorMessage += 'Please enter a valid email address.\n';
    }

    if (message === '') {
        isValid = false;
        errorMessage += 'Message is required.\n';
    }

    if (isValid) {
        // Here you would typically send the form data to a server
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    } else {
        alert('Please correct the following errors:\n' + errorMessage);
    }
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Auto-resize textarea based on content
const messageInput = document.getElementById('message');
if (messageInput) {
    messageInput.addEventListener('input', function() {
        this.style.height = 'auto';
        this.style.height = this.scrollHeight + 'px';
    });
}

// Add some additional animations
document.addEventListener('DOMContentLoaded', function() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    const cardObserverOptions = {
        threshold: 0.4, // Lowered threshold so it triggers earlier
        rootMargin: "0px 0px -10% 0px"
    };

    const isMobileMediaQuery = window.matchMedia('(max-width: 768px)');

    const cardObserver = new IntersectionObserver((entries) => {
        if (!isMobileMediaQuery.matches) return; // Only animate on mobile screens
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                entry.target.classList.remove('active');
            }
        });
    }, cardObserverOptions);
    
    serviceCards.forEach(card => {
        cardObserver.observe(card);
    });

    // Clean up active classes if window is resized to desktop width
    window.addEventListener('resize', () => {
        if (!isMobileMediaQuery.matches) { // If it's no longer a mobile screen
            serviceCards.forEach(card => card.classList.remove('active'));
        }
    });
});

// Stat Counter Animation
function animateStatNumbers() {
    const statNumbers = document.querySelectorAll('.stat-number');
    let hasAnimated = false;

    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasAnimated) {
                hasAnimated = true;
                statNumbers.forEach(stat => {
                    const finalValue = stat.textContent;
                    const numericValue = parseInt(finalValue.replace(/\D/g, ''));
                    const suffix = finalValue.replace(/[0-9]/g, '');
                    
                    let currentValue = 0;
                    const increment = Math.ceil(numericValue / 120);
                    
                    const counter = setInterval(() => {
                        currentValue += increment;
                        if (currentValue >= numericValue) {
                            currentValue = numericValue;
                            clearInterval(counter);
                        }
                        stat.textContent = currentValue.toLocaleString() + suffix;
                    }, 50);
                });
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const statsSection = document.querySelector('.stats');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }
}

// Initialize stat counter on page load
document.addEventListener('DOMContentLoaded', animateStatNumbers);


// FAQ Accordion Toggle
function toggleFaq(element) {
    const faqItem = element.parentElement;
    const isActive = faqItem.classList.contains('active');
    
    // Close all other FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Toggle current FAQ item
    if (!isActive) {
        faqItem.classList.add('active');
    }
}