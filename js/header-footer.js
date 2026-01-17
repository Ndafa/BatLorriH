/**
 * BaTLorriH Header and Footer Component Manager
 * This file provides reusable header and footer components for all pages
 * Usage: Include this script in your HTML pages and call loadHeaderFooter()
 */

// Header HTML Component
const headerHTML = `
    <header>
        <div class="container">
            <div class="header-container">
                <a href="index.html" class="header-logo">
                    <div class="logo-icon">BL</div>
                    <div class="logo-text">BaTLorriH</div>
                </a>
                
                <nav class="nav-links">
                    <a href="index.html" class="nav-link">Home</a>
                    <a href="how-it-works.html" class="nav-link">How It Works</a>
                    <a href="vehicles.html" class="nav-link">Vehicles</a>
                    <a href="book.html" class="nav-link">Book Now</a>
                    <a href="drivers.html" class="nav-link">Drive With Us</a>
                    <a href="about.html" class="nav-link">About</a>
                    <a href="contact.html" class="nav-link">Contact</a>
                    <a href="book.html" class="btn btn-primary">
                        <i class="fas fa-shipping-fast"></i> Get Started
                    </a>
                </nav>
                
                <button class="mobile-menu-btn" aria-label="Toggle menu">
                    <i class="fas fa-bars"></i>
                </button>
            </div>
        </div>
    </header>
`;

// Footer HTML Component
const footerHTML = `
    <footer>
        <div class="container">
            <div class="footer-container">
                <div class="footer-brand">
                    <a href="index.html" class="footer-logo">
                        <div class="logo-icon" title="BaTLorriH Logo">BL</div>
                        <div class="logo-text">BaTLorriH</div>
                    </a>
                    <p class="footer-description">
                        Namibia's leading digital logistics platform connecting shippers with verified transport providers across the country.
                    </p>
                    <div class="social-links">
                        <a href="#" class="social-link" aria-label="Facebook">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" class="social-link" aria-label="Twitter">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="#" class="social-link" aria-label="Instagram">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="#" class="social-link" aria-label="LinkedIn">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                        <a href="#" class="social-link" aria-label="WhatsApp">
                            <i class="fab fa-whatsapp"></i>
                        </a>
                    </div>
                </div>
                
                <div class="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="index.html"><i class="fas fa-chevron-right"></i> Home</a></li>
                        <li><a href="how-it-works.html"><i class="fas fa-chevron-right"></i> How It Works</a></li>
                        <li><a href="vehicles.html"><i class="fas fa-chevron-right"></i> Vehicle Types</a></li>
                        <li><a href="book.html"><i class="fas fa-chevron-right"></i> Book a Vehicle</a></li>
                        <li><a href="drivers.html"><i class="fas fa-chevron-right"></i> Drive With Us</a></li>
                    </ul>
                </div>
                
                <div class="footer-links">
                    <h3>Support</h3>
                    <ul>
                        <li><a href="contact.html"><i class="fas fa-chevron-right"></i> Contact Us</a></li>
                        <li><a href="#"><i class="fas fa-chevron-right"></i> Help Center</a></li>
                        <li><a href="#"><i class="fas fa-chevron-right"></i> Safety Center</a></li>
                        <li><a href="#"><i class="fas fa-chevron-right"></i> Community Guidelines</a></li>
                        <li><a href="#"><i class="fas fa-chevron-right"></i> Privacy Policy</a></li>
                        <li><a href="#"><i class="fas fa-chevron-right"></i> Terms of Service</a></li>
                    </ul>
                </div>
                
                <div class="footer-contact">
                    <h3>Contact Us</h3>
                    <a href="tel:+264612345678">
                        <i class="fas fa-phone"></i> +264 61 234 5678
                    </a>
                    <a href="mailto:info@batlorrih.com.na">
                        <i class="fas fa-envelope"></i> info@batlorrih.com.na
                    </a>
                    <a href="https://wa.me/264811234567" target="_blank">
                        <i class="fab fa-whatsapp"></i> +264 81 123 4567
                    </a>
                    <a href="#">
                        <i class="fas fa-map-marker-alt"></i> Windhoek, Namibia
                    </a>
                </div>
            </div>
            
            <div class="footer-bottom">
                <p>&copy; <span id="currentYear">2026</span> BaTLorriH Logistics. All rights reserved. | Connecting Namibia, One Load at a Time</p>
            </div>
        </div>
    </footer>
`;

/**
 * Load header and footer into the page
 * Call this function on page load
 */
function loadHeaderFooter() {
    document.addEventListener('DOMContentLoaded', function() {
        // Insert header at the very beginning of body
        const bodyElement = document.body;
        
        // Create a temporary div to hold the header HTML
        const headerDiv = document.createElement('div');
        headerDiv.innerHTML = headerHTML;
        bodyElement.insertBefore(headerDiv.firstElementChild, bodyElement.firstChild);
        
        // Insert footer at the end of body
        const footerDiv = document.createElement('div');
        footerDiv.innerHTML = footerHTML;
        bodyElement.appendChild(footerDiv.firstElementChild);
        
        // Initialize header and footer functionality
        initializeHeaderFooter();
    });
}

/**
 * Initialize header and footer interactive features
 */
function initializeHeaderFooter() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', function() {
            const isOpen = navLinks.style.display === 'flex';
            navLinks.style.display = isOpen ? 'none' : 'flex';
            
            if (!isOpen) {
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.right = '0';
                navLinks.style.background = 'rgba(255, 255, 255, 0.98)';
                navLinks.style.backdropFilter = 'blur(10px)';
                navLinks.style.padding = '2rem';
                navLinks.style.gap = '1rem';
                navLinks.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
                navLinks.style.zIndex = '1000';
                navLinks.style.borderTop = '2px solid';
                navLinks.style.borderImage = 'linear-gradient(90deg, var(--pmd-blue), var(--green-primary)) 1';
                navLinks.style.animation = 'slideDown 0.3s ease-out';
            }
        });
        
        // Close menu when a link is clicked
        const navLinksArray = document.querySelectorAll('.nav-link');
        navLinksArray.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.style.display = 'none';
            });
        });
    }
    
    // Set active navigation link based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinksArray = document.querySelectorAll('.nav-link');
    
    navLinksArray.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage || 
            (currentPage === '' && linkHref === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (header) {
            if (window.scrollY > 50) {
                header.style.background = 'rgba(255, 255, 255, 0.98)';
                header.style.backdropFilter = 'blur(10px)';
                header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.background = '';
                header.style.backdropFilter = '';
                header.style.boxShadow = '';
            }
        }
    });
    
    // Set current year in footer
    const currentYearElement = document.getElementById('currentYear');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
}

// Auto-load on script load
loadHeaderFooter();
