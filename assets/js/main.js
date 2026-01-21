// ================================
// MOBILE MENU TOGGLE
// ================================

const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        });
    });
}

// ================================
// SMOOTH SCROLLING
// ================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const navHeight = document.querySelector('.nav').offsetHeight;
                const targetPosition = target.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ================================
// NAVBAR SCROLL EFFECT
// ================================

let lastScroll = 0;
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        nav.style.transform = 'translateY(0)';
        return;
    }
    
    if (currentScroll > lastScroll && currentScroll > 100) {
        // Scrolling down
        nav.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up
        nav.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
});

// ================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe timeline items
document.querySelectorAll('.timeline-item').forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(item);
});

// Observe education cards
document.querySelectorAll('.education-card').forEach((card) => {
    observer.observe(card);
});

// Observe project cards
document.querySelectorAll('.project-card').forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.15}s`;
    observer.observe(card);
});

// Observe expertise items
document.querySelectorAll('.expertise-item').forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'all 0.5s ease';
    item.style.transitionDelay = `${index * 0.1}s`;
    
    observer.observe(item);
    
    // Add visible class manually for IntersectionObserver
    const expertiseObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                expertiseObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    expertiseObserver.observe(item);
});

// ================================
// PARALLAX EFFECT FOR HERO
// ================================

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    const geometricAccent = document.querySelector('.geometric-accent');
    
    if (heroContent && scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
        heroContent.style.opacity = 1 - (scrolled / window.innerHeight);
    }
    
    if (geometricAccent && scrolled < window.innerHeight) {
        geometricAccent.style.transform = `translate(${scrolled * 0.1}px, ${scrolled * -0.15}px)`;
    }
});

// ================================
// ACTIVE SECTION HIGHLIGHTING
// ================================

const sections = document.querySelectorAll('section[id]');
const navLinksArray = document.querySelectorAll('.nav-link');

function highlightNavigation() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinksArray.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightNavigation);

// ================================
// LOADING ANIMATION
// ================================

window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// ================================
// CONTACT METHOD HOVER EFFECTS
// ================================

document.querySelectorAll('.contact-method').forEach(method => {
    method.addEventListener('mouseenter', function() {
        this.querySelector('.method-icon').style.transform = 'rotate(360deg)';
    });
    
    method.addEventListener('mouseleave', function() {
        this.querySelector('.method-icon').style.transform = 'rotate(0deg)';
    });
});

// Add transition to method icons
document.querySelectorAll('.method-icon').forEach(icon => {
    icon.style.transition = 'transform 0.5s ease';
});

// ================================
// EXPERTISE ITEM SEQUENTIAL ANIMATION
// ================================

const expertiseItems = document.querySelectorAll('.expertise-item');
expertiseItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.1}s`;
});

// ================================
// CONSOLE GREETING
// ================================

console.log('%c👷‍♂️ Ahmed - Bauingenieur Portfolio', 'font-size: 20px; font-weight: bold; color: #1a365d;');
console.log('%cInteressiert an meiner Arbeit? Lassen Sie uns reden!', 'font-size: 14px; color: #c17843;');
console.log('%cKontakt: ahmed@example.com', 'font-size: 12px; color: #4a5568;');