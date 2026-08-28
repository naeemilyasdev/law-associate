/* ===== NAVBAR SCROLL EFFECT ===== */
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const body = document.body;
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Hamburger menu toggle
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close menu when link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.navbar')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

/* ===== FORM SUBMISSION ===== */
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Create mailto link
            const mailtoLink = `mailto:basharatabdullah9@gmail.com?subject=${encodeURIComponent('Legal Consultation Request: ' + subject)}&body=${encodeURIComponent(`Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
            
            // Open default email client
            window.location.href = mailtoLink;
            
            // Show success message
            alert('Thank you for your consultation request. Please complete the email in your email client to submit.');
            
            // Reset form
            contactForm.reset();
        });
    }
});

/* ===== CONSULTATION BUTTON HANDLERS ===== */
document.addEventListener('DOMContentLoaded', function() {
    const consultationButtons = document.querySelectorAll('.btn-consultation, .btn-primary');
    const scrollButtons = document.querySelectorAll('[data-scroll-target]');
    
    consultationButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Check if it's a form submit button
            if (this.type === 'submit') {
                return; // Let form handle it
            }
            
            // Scroll to contact section
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                e.preventDefault();
                contactSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    scrollButtons.forEach(button => {
        button.addEventListener('click', function() {
            const target = document.getElementById(this.dataset.scrollTarget);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

/* ===== SCROLL REVEAL ANIMATION ===== */
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', function() {
    // Observe elements for scroll reveal
    const elements = document.querySelectorAll(
        '.practice-card, .service-item, .feature-block, .timeline-item'
    );
    
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

/* ===== PRACTICE LINK HANDLERS ===== */
document.addEventListener('DOMContentLoaded', function() {
    const practiceLinks = document.querySelectorAll('.practice-link');
    
    practiceLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                contactSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

/* ===== FOOTER LINK SCROLL ===== */
document.addEventListener('DOMContentLoaded', function() {
    const footerLinks = document.querySelectorAll('.footer-nav a, .footer-practice a');
    
    footerLinks.forEach(link => {
        if (link.getAttribute('href').startsWith('#')) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        }
    });
});
