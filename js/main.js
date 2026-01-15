// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '100%';
        navLinks.style.left = '0';
        navLinks.style.right = '0';
        navLinks.style.background = 'rgba(255, 255, 255, 0.98)';
        navLinks.style.backdropFilter = 'blur(10px)';
        navLinks.style.padding = '2rem';
        navLinks.style.gap = '1rem';
        navLinks.style.boxShadow = 'var(--shadow-lg)';
        navLinks.style.borderTop = '2px solid';
        navLinks.style.borderImage = 'linear-gradient(90deg, var(--pmd-blue), var(--green-primary)) 1';
    });
}

// Animation persistence helpers
function getAnimatedIds() {
    try {
        return JSON.parse(localStorage.getItem('animatedIds') || '[]');
    } catch (e) {
        return [];
    }
}

function setAnimatedId(id) {
    if (!id) return;
    const ids = getAnimatedIds();
    if (!ids.includes(id)) {
        ids.push(id);
        localStorage.setItem('animatedIds', JSON.stringify(ids));
    }
}

// Set active nav link based on current page
document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage || 
            (currentPage === '' && linkHref === 'index.html') ||
            (linkHref === 'index.html' && currentPage === '')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    // Animate elements on scroll with persistence
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'none';
                if (entry.target.dataset.animId) {
                    setAnimatedId(entry.target.dataset.animId);
                }
            }
        });
    }, observerOptions);
    
    // Observe elements to animate (and restore previously animated)
    document.querySelectorAll('.stat-card, .hero-animation').forEach((el, index) => {
        el.dataset.animId = el.dataset.animId || `hero-${index}`;
        const ids = getAnimatedIds();
        if (ids.includes(el.dataset.animId)) {
            el.style.opacity = '1';
            el.style.transform = 'none';
            el.classList.add('animate-fade-in');
        }
        observer.observe(el);
    });
    
    // Parallax effect for hero background
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.backgroundPosition = `center ${scrolled * 0.5}px`;
        }
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});

// Enhanced JavaScript for all pages
document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '100%';
            navLinks.style.left = '0';
            navLinks.style.right = '0';
            navLinks.style.background = 'rgba(255, 255, 255, 0.98)';
            navLinks.style.backdropFilter = 'blur(10px)';
            navLinks.style.padding = '2rem';
            navLinks.style.gap = '1rem';
            navLinks.style.boxShadow = 'var(--shadow-lg)';
            navLinks.style.borderTop = '2px solid';
            navLinks.style.borderImage = 'linear-gradient(90deg, var(--pmd-blue), var(--green-primary)) 1';
            navLinks.style.zIndex = '1000';
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navLinks && navLinks.style.display === 'flex' && 
            !navLinks.contains(e.target) && 
            !mobileMenuBtn.contains(e.target)) {
            navLinks.style.display = 'none';
        }
    });
    
    // Set active nav link
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinksAll = document.querySelectorAll('.nav-link');
    
    navLinksAll.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage || 
            (currentPage === '' && linkHref === 'index.html') ||
            (linkHref === 'index.html' && currentPage === '')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'none';
                
                // Add specific animations based on element type
                if (entry.target.classList.contains('vehicle-card')) {
                    entry.target.style.animationDelay = `${entry.target.dataset.delay || '0'}s`;
                }
                
                // Animate counters
                if (entry.target.classList.contains('stat-counter')) {
                    animateCounter(entry.target);
                }
                
                // Persist that this element was animated
                if (entry.target.dataset.animId) {
                    setAnimatedId(entry.target.dataset.animId);
                }
            }
        });
    }, observerOptions);
    
    // Observe all animatable elements (persist animation state)
    document.querySelectorAll('.vehicle-card, .step, .feature-card, .stat-card').forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.dataset.delay = index * 0.1;
        el.dataset.animId = el.dataset.animId || `anim-${index}`;
        const ids = getAnimatedIds();
        if (ids.includes(el.dataset.animId)) {
            el.style.opacity = '1';
            el.style.transform = 'none';
            el.classList.add('animate-fade-in');
            if (el.classList.contains('stat-counter')) {
                animateCounter(el);
            }
        }
        observer.observe(el);
    });
    
    // Counter animation function
    function animateCounter(element) {
        const target = parseInt(element.textContent);
        const duration = 9000;
        const increment = target / (duration / 16);
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target.toLocaleString();
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current).toLocaleString();
            }
        }, 16);
    }
    
    // Parallax effect
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.parallax');
        
        parallaxElements.forEach(el => {
            const speed = el.dataset.speed || 0.5;
            el.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Form submission handling
    const forms = document.querySelectorAll('form[data-form]');
    forms.forEach(form => {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            // Show loading state
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
            submitBtn.disabled = true;
            
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Show success message
            const successMsg = document.createElement('div');
            successMsg.className = 'form-success';
            successMsg.innerHTML = `
                <i class="fas fa-check-circle"></i>
                <span>Request submitted successfully! We'll contact you soon.</span>
            `;
            successMsg.style.cssText = `
                background: linear-gradient(135deg, var(--green-primary), var(--green-light));
                color: white;
                padding: 1rem;
                border-radius: var(--radius);
                margin-top: 1rem;
                display: flex;
                align-items: center;
                gap: 0.5rem;
                animation: slideUp 0.3s ease-out;
            `;
            
            form.appendChild(successMsg);
            
            // Reset form after success
            setTimeout(() => {
                form.reset();
                successMsg.remove();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 3000);
        });
    });
    
    // Initialize tooltips
    const tooltips = document.querySelectorAll('[data-tooltip]');
    tooltips.forEach(tooltip => {
        tooltip.addEventListener('mouseenter', (e) => {
            const tip = document.createElement('div');
            tip.textContent = tooltip.dataset.tooltip;
            tip.className = 'tooltip';
            tip.style.cssText = `
                position: absolute;
                background: var(--gray-800);
                color: white;
                padding: 0.5rem 1rem;
                border-radius: var(--radius);
                font-size: 0.875rem;
                z-index: 10000;
                white-space: nowrap;
                pointer-events: none;
                transform: translateY(-100%) translateX(-50%);
                left: 50%;
                top: -10px;
            `;
            
            document.body.appendChild(tip);
            tooltip.tooltipElement = tip;
        });
        
        tooltip.addEventListener('mouseleave', () => {
            if (tooltip.tooltipElement) {
                tooltip.tooltipElement.remove();
            }
        });
    });
});

/**
 * Interactive UI Engine
 * Features: 3D Tilt, Magnetic Hover, Smooth Scroll, and Persistent Animations
 */

document.addEventListener('DOMContentLoaded', () => {
    // --- 1. CORE UTILITIES ---
    const getAnimatedIds = () => {
        try { return JSON.parse(localStorage.getItem('animatedIds') || '[]'); } 
        catch { return []; }
    };

    const setAnimatedId = (id) => {
        if (!id) return;
        const ids = getAnimatedIds();
        if (!ids.includes(id)) {
            ids.push(id);
            localStorage.setItem('animatedIds', JSON.stringify(ids));
        }
    };

    // --- 2. 3D TILT EFFECT ENGINE ---
    // Apply this to any element with class 'tilt-card'
    const init3DTilt = () => {
        const cards = document.querySelectorAll('.vehicle-card, .stat-card, .feature-card');
        
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                // Calculate rotation (max 15 degrees)
                const rotateX = ((y - centerY) / centerY) * -15;
                const rotateY = ((x - centerX) / centerX) * 15;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
                card.style.transition = 'transform 0.1s ease-out';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
                card.style.transition = 'transform 0.5s ease-in-out';
            });
        });
    };

    // --- 3. MAGNETIC BUTTONS ---
    const initMagneticButtons = () => {
        const buttons = document.querySelectorAll('.btn-primary, .mobile-menu-btn');
        
        buttons.forEach(btn => {
            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
            });
            
            btn.addEventListener('mouseleave', () => {
                btn.style.transform = `translate(0px, 0px)`;
            });
        });
    };

    // --- 4. NAVIGATION & MOBILE MENU ---
    const initNavigation = () => {
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const navLinks = document.querySelector('.nav-links');
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';

        // Toggle Logic
        if (mobileMenuBtn && navLinks) {
            mobileMenuBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                navLinks.classList.toggle('active');
                // We'll use CSS classes for the "flex/none" logic for better performance
            });
        }

        // Active Link Highlighting
        document.querySelectorAll('.nav-link').forEach(link => {
            const href = link.getAttribute('href');
            if (href === currentPage || (currentPage === '' && href === 'index.html')) {
                link.classList.add('active');
            }
        });

        // Close menu on outside click
        document.addEventListener('click', (e) => {
            if (navLinks?.classList.contains('active') && !navLinks.contains(e.target)) {
                navLinks.classList.remove('active');
            }
        });
    };

    // --- 5. SCROLL ANIMATIONS (Intersection Observer) ---
    const initScrollAnimations = () => {
        const observerOptions = { threshold: 0.15, rootMargin: '0px 0px -50px 0px' };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    el.classList.add('is-visible');
                    
                    if (el.classList.contains('stat-counter')) {
                        animateCounter(el);
                    }
                    
                    if (el.dataset.animId) setAnimatedId(el.dataset.animId);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.vehicle-card, .step, .feature-card, .stat-card, .stat-counter').forEach((el, i) => {
            el.dataset.animId = el.dataset.animId || `anim-${i}`;
            
            // Check persistence
            if (getAnimatedIds().includes(el.dataset.animId)) {
                el.classList.add('is-visible');
                if (el.classList.contains('stat-counter')) animateCounter(el);
            }
            
            observer.observe(el);
        });
    };

    // --- 6. COUNTER ENGINE ---
    function animateCounter(el) {
        if (el.dataset.counted === "true") return;
        el.dataset.counted = "true";
        
        const target = parseInt(el.innerText.replace(/,/g, ''));
        const duration = 2000; 
        const start = 0;
        let startTime = null;

        function step(timestamp) {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const current = Math.floor(progress * (target - start) + start);
            el.innerText = current.toLocaleString();
            if (progress < 1) window.requestAnimationFrame(step);
        }
        window.requestAnimationFrame(step);
    }

    // --- 7. PARALLAX EFFECT ---
    const initParallax = () => {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            document.querySelectorAll('.parallax').forEach(el => {
                const speed = el.dataset.speed || 0.4;
                el.style.transform = `translateY(${scrolled * speed}px)`;
            });
            
            // Hero background shift
            const hero = document.querySelector('.hero');
            if (hero) hero.style.backgroundPositionY = `${scrolled * 0.5}px`;
        });
    };

    // --- 8. SMOOTH ANCHORS ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- 9. HERO ANIMATION (GSAP) ---
    function initHeroAnimation() {
        // Respect reduced motion
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        if (typeof gsap === 'undefined') return;

        try { gsap.registerPlugin(ScrollTrigger); } catch(e) {}

        const truck = document.querySelector('#hero-truck');
        const wheels = document.querySelectorAll('.hero-wheel');
        const clouds = document.querySelectorAll('.hero-cloud');
        const roadLines = document.querySelectorAll('#road-lines rect');
        const cargo = document.querySelector('#hero-cargo');

        if (!truck) return;

        // subtle intro with slightly tightened timing to match reference
        gsap.set([truck, clouds, roadLines], { autoAlpha: 1 });

        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
        tl.from('#hero-sky', { y: -14, autoAlpha: 0, duration: 0.7 })
          .from('#hero-ground', { y: 14, autoAlpha: 0, duration: 0.75 }, 0)
          .from(truck, { x: -520, duration: 1.25, ease: 'expo.out' }, 0.05)
          .to(truck, { y: '-=8', duration: 0.42, yoyo: true, repeat: 1, ease: 'sine.inOut' }, '>-0.1');

        // continuous subtle loops (tuned)
        gsap.to(truck, { y: '-=5', duration: 1.2, yoyo: true, repeat: -1, ease: 'sine.inOut' });
        const wheelTween = gsap.to(wheels, { rotation: 360, duration: 0.72, ease: 'linear', repeat: -1, transformOrigin: 'center' });
        gsap.to(clouds, { x: '+=320', duration: 50, ease: 'none', repeat: -1 });
        gsap.to(roadLines, { x: '-=140', duration: 3.2, ease: 'none', repeat: -1 });

        if (cargo) gsap.to(cargo, { rotation: 3, duration: 1.05, yoyo: true, repeat: -1, transformOrigin: 'center' });

        // micro-interactions (hover/tap/keyboard)
        if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            // Hover - desktop
            truck.addEventListener('mouseenter', () => {
                gsap.to(truck, { y: '-=12', scale: 1.015, duration: 0.28, ease: 'power2.out' });
                wheelTween.timeScale(1.8);
                if (cargo) gsap.to(cargo, { rotation: 7, duration: 0.35, yoyo: true, repeat: 1 });
            });

            truck.addEventListener('mouseleave', () => {
                gsap.to(truck, { y: '+=12', scale: 1, duration: 0.35, ease: 'power2.out' });
                wheelTween.timeScale(1);
                if (cargo) gsap.to(cargo, { rotation: 3, duration: 0.6, yoyo: true, repeat: -1 });
            });

            // Touch - quick nudge
            truck.addEventListener('touchstart', (e) => {
                e.preventDefault();
                gsap.fromTo(truck, { y: 0 }, { y: '-=10', duration: 0.12, yoyo: true, repeat: 1, ease: 'sine.inOut' });
                if (cargo) gsap.fromTo(cargo, { rotation: 0 }, { rotation: 8, duration: 0.18, yoyo: true, repeat: 1, transformOrigin: 'center' });
            }, { passive: false });

            // Keyboard (Enter/Space triggers nudge)
            truck.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ' ) {
                    e.preventDefault();
                    gsap.fromTo(truck, { y: 0 }, { y: '-=10', duration: 0.14, yoyo: true, repeat: 1, ease: 'sine.inOut' });
                }
            });

            // Cloud micro-hover
            clouds.forEach(c => {
                c.addEventListener('mouseenter', () => gsap.to(c, { y: '-=6', scale: 1.02, duration: 0.35, ease: 'power2.out' }));
                c.addEventListener('mouseleave', () => gsap.to(c, { y: '+=6', scale: 1, duration: 0.45, ease: 'power2.out' }));
                c.addEventListener('touchstart', (ev) => {
                    ev.preventDefault();
                    gsap.fromTo(c, { y: 0 }, { y: -8, duration: 0.12, yoyo: true, repeat: 1 });
                }, { passive: false });
            });
        }

        // parallax on scroll (kept same)
        try {
            gsap.to(truck, {
                yPercent: -5,
                scrollTrigger: {
                    trigger: '.hero',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 0.6
                }
            });
        } catch(e) { /* ignore if ScrollTrigger missing */ }
    }

    // --- INITIALIZE ALL ---
    initNavigation();
    init3DTilt();
    initMagneticButtons();
    initScrollAnimations();
    initParallax();
    initHeroAnimation();
});