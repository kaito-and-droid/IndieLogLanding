// Copy code functionality
function copyCode(button) {
    const codeBlock = button.previousElementSibling;
    const code = codeBlock.textContent;

    navigator.clipboard.writeText(code).then(() => {
        const originalText = button.textContent;
        button.textContent = 'Copied!';
        button.style.background = '#10b981';
        button.style.borderColor = '#10b981';
        button.style.color = '#ffffff';

        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = '';
            button.style.borderColor = '';
            button.style.color = '';
        }, 2000);
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80; // navbar height
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 15, 30, 0.95)';
    } else {
        navbar.style.background = 'rgba(10, 15, 30, 0.8)';
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for fade-in
document.querySelectorAll('.feature-card, .step, .demo-input, .demo-output').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Terminal typing animation
function typeTerminal() {
    const lines = document.querySelectorAll('.terminal-line');
    lines.forEach((line, index) => {
        line.style.opacity = '0';
        setTimeout(() => {
            line.style.opacity = '1';
            line.style.animation = 'fadeIn 0.5s ease';
        }, index * 200);
    });
}

// Run terminal animation when in view
const terminalObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            typeTerminal();
            terminalObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const terminal = document.querySelector('.terminal');
if (terminal) {
    terminalObserver.observe(terminal);
}

// Add CSS for fade-in animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Email signup for Pro Dashboard early access
const emailForm = document.querySelector('.email-signup');
if (emailForm) {
    emailForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const emailInput = this.querySelector('input[type="email"]');
        const submitBtn = this.querySelector('button');
        const email = emailInput.value;

        if (!email) return;

        // Simulate form submission
        const originalText = submitBtn.textContent;
        submitBtn.textContent = '✓ Added to waitlist!';
        submitBtn.style.background = '#10b981';
        emailInput.disabled = true;

        // Reset after 3 seconds
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.style.background = '';
            emailInput.value = '';
            emailInput.disabled = false;
        }, 3000);

        console.log('Pro Dashboard early access signup:', email);
        // TODO: Add your API endpoint to save emails
        // fetch('/api/waitlist', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ email })
        // });
    });
}

// Track button clicks (for analytics if needed)
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', function() {
        const buttonText = this.textContent.trim();
        console.log('CTA clicked:', buttonText);
        // Add your analytics tracking here
        // e.g., gtag('event', 'click', { 'button': buttonText });
    });
});

// Add visual feedback for feature cards
document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    });
});

// Mobile menu toggle - create only once
let burgerButton = null;
const navContent = document.querySelector('.nav-content');
const navLinks = document.querySelector('.nav-links');

function initMobileMenu() {
    // Check if burger button already exists
    if (!burgerButton) {
        burgerButton = document.createElement('button');
        burgerButton.className = 'mobile-menu-toggle';
        burgerButton.innerHTML = '☰';
        burgerButton.style.cssText = `
            background: none;
            border: none;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
            padding: 0.5rem;
        `;

        burgerButton.addEventListener('click', () => {
            const isVisible = navLinks.style.display === 'flex';
            navLinks.style.display = isVisible ? 'none' : 'flex';
        });

        navContent.appendChild(burgerButton);
    }

    // Show/hide burger based on screen size
    if (window.innerWidth <= 768) {
        burgerButton.style.display = 'block';
        navLinks.style.display = 'none';
    } else {
        burgerButton.style.display = 'none';
        navLinks.style.display = 'flex';
    }
}

window.addEventListener('resize', initMobileMenu);
initMobileMenu();
