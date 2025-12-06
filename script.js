document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const hiddenElements = document.querySelectorAll('.glass-card, .section-title, .hero-content');
    hiddenElements.forEach((el) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });

    // Simple particle effect for the hero visual (Canvas)
    // Note: A full library like particles.js could be used, but we'll do a custom lightweight one here if needed.
    // For now, the CSS background animation handles the global vibe.

    // Glitch effect randomization
    const glitchText = document.querySelector('.glitch');
    if (glitchText) {
        setInterval(() => {
            const r1 = Math.random() * 10;
            const r2 = Math.random() * 10;
            glitchText.style.setProperty('--r1', `${r1}px`);
            glitchText.style.setProperty('--r2', `${r2}px`);
        }, 2000);
    }

    // Hamburger Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
});
