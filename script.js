/* ===== NAVBAR SCROLL EFFECT ===== */
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            hamburger.setAttribute('aria-expanded', String(!isExpanded));
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (hamburger) {
                hamburger.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
            }
            if (navMenu) {
                navMenu.classList.remove('active');
            }
        });
    });

    document.addEventListener('click', function(event) {
        const nav = document.querySelector('.navbar');
        if (nav && !event.target.closest('.navbar')) {
            if (hamburger) {
                hamburger.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
            }
            if (navMenu) {
                navMenu.classList.remove('active');
            }
        }
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (!targetId || targetId === '#') {
                return;
            }

            const target = document.querySelector(targetId);
            if (!target) {
                return;
            }

            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
});

/* ===== FORM SUBMISSION ===== */
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('name')?.value.trim() || '';
            const phone = document.getElementById('phone')?.value.trim() || '';
            const email = document.getElementById('email')?.value.trim() || '';
            const subject = document.getElementById('subject')?.value.trim() || 'General legal inquiry';
            const message = document.getElementById('message')?.value.trim() || '';

            if (!name || !phone || !email || !message) {
                alert('Please fill in all required fields before sending your consultation request.');
                return;
            }

            const mailtoLink = `mailto:basharatabdullah9@gmail.com?subject=${encodeURIComponent('Legal Consultation Request: ' + subject)}&body=${encodeURIComponent(`Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\nMessage:\n${message}`)}`;

            window.location.href = mailtoLink;
            alert('Your email app has been opened with your consultation request. Please send the email to complete the submission.');
            contactForm.reset();
        });
    }
});

/* ===== CONSULTATION BUTTON HANDLERS ===== */
document.addEventListener('DOMContentLoaded', function() {
    const consultationButtons = document.querySelectorAll('.btn-consultation, .btn-primary');
    const scrollButtons = document.querySelectorAll('[data-scroll-target]');
    const whatsappLinks = document.querySelectorAll('.whatsapp-link');

    consultationButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            if (this.type === 'submit') {
                return;
            }

            if (this.classList.contains('whatsapp-link')) {
                return;
            }

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

    whatsappLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const phone = this.dataset.phone || '923016077567';
            const message = this.dataset.message || 'Assalam o Alaikum, I would like to discuss a legal matter.';
            const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

            window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
        });
    });

    scrollButtons.forEach(button => {
        button.addEventListener('click', function() {
            const target = document.getElementById(button.dataset.scrollTarget);
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
    const elements = document.querySelectorAll('.practice-card, .service-item, .feature-block, .timeline-item');

    if ('IntersectionObserver' in window) {
        elements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(8px)';
            el.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            observer.observe(el);
        });
    }
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
        if (link.getAttribute('href') && link.getAttribute('href').startsWith('#')) {
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
