/**
 * Richard Stallman Portfolio - Main JavaScript
 * 
 * This file contains all interactive functionality for the portfolio:
 * - Mobile navigation toggle
 * - Smooth scroll with active link highlighting
 * - Sticky header with shadow on scroll
 * - Scroll-triggered fade-in animations
 * - Project modal functionality
 * - Form validation
 * 
 * All functions are kept simple and well-commented for easy understanding.
 */

// ============================================
// INITIALIZATION - Runs when DOM is loaded
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    initNavToggle();
    initSmoothScroll();
    initScrollEffects();
    initModal();
    initFormValidation();
});

// ============================================
// MOBILE NAVIGATION TOGGLE
// ============================================
/**
 * Handles the mobile menu toggle button
 * Opens/closes the navigation menu on mobile devices
 * Also updates ARIA attributes for accessibility
 */
function initNavToggle() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    // Add click event to toggle button
    menuToggle.addEventListener('click', function() {
        // Toggle active class on button (for animation)
        this.classList.toggle('active');
        // Toggle active class on menu (for visibility)
        navMenu.classList.toggle('active');
        
        // Update ARIA attribute for screen readers
        const isExpanded = this.classList.contains('active');
        this.setAttribute('aria-expanded', isExpanded);
    });
    
    // Close menu when a link is clicked
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
        });
    });
}

// ============================================
// SMOOTH SCROLL & ACTIVE LINK HIGHLIGHTING
// ============================================
/**
 * Implements smooth scrolling to anchor links
 * Also highlights the active navigation link based on scroll position
 */
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    const sections = document.querySelectorAll('section[id]');
    
    // Smooth scroll when clicking navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Calculate offset for fixed header
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Highlight active link on scroll
    window.addEventListener('scroll', function() {
        let current = '';
        const headerHeight = document.querySelector('.header').offsetHeight;
        
        // Find which section is currently in view
        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight - 100;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop && 
                window.pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        // Update active class on navigation links
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
}

// ============================================
// SCROLL EFFECTS
// ============================================
/**
 * Handles scroll-based effects:
 * 1. Adds shadow to header when scrolling down
 * 2. Triggers fade-in animations for elements when they come into view
 */
function initScrollEffects() {
    const header = document.querySelector('.header');
    const fadeElements = document.querySelectorAll('.fade-in');
    
    // Add scroll event listener
    window.addEventListener('scroll', function() {
        // Add shadow to header when scrolled past 50px
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Check each fade-in element
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            // If element is in viewport, add visible class
            if (elementTop < windowHeight - 100) {
                element.classList.add('visible');
            }
        });
    });
    
    // Trigger check on load to show elements already in view
    window.dispatchEvent(new Event('scroll'));
}

// ============================================
// PROJECT MODAL
// ============================================
/**
 * Creates a modal popup for project details
 * Opens when clicking on project cards
 * Closes when clicking the X button or outside the modal
 */
function initModal() {
    const projectCards = document.querySelectorAll('.project-card');
    const modal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modalBody');
    const closeBtn = document.querySelector('.modal-close');
    
    // Project details data
    const projectData = {
        gnu: {
            title: 'GNU Operating System',
            description: 'The GNU Project was launched in 1983 to develop a complete Unix-like operating system composed entirely of free software. The name "GNU" is a recursive acronym for "GNU\'s Not Unix." Combined with the Linux kernel, GNU forms the basis of the operating systems used by millions of computers worldwide.',
            features: [
                'Complete free software operating system',
                'Unix-compatible design and tools',
                'Foundation for GNU/Linux distributions',
                'Includes essential system utilities and libraries'
            ],
            link: 'https://www.gnu.org'
        },
        gcc: {
            title: 'GNU Compiler Collection',
            description: 'GCC is a compiler system produced by the GNU Project supporting various programming languages. Originally written for C, it now supports C++, Objective-C, Fortran, Ada, Go, and more. GCC has been adopted as the standard compiler by most Unix-like systems.',
            features: [
                'Multi-language support (C, C++, Fortran, Ada, Go)',
                'Cross-platform compilation',
                'Advanced optimization capabilities',
                'Industry-standard compiler used globally'
            ],
            link: 'https://gcc.gnu.org'
        },
        emacs: {
            title: 'GNU Emacs',
            description: 'GNU Emacs is an extensible, customizable text editor that is also a powerful Lisp interpreter. Created by Richard Stallman in 1985, it represents one of the oldest free software projects still under development. Emacs can be extended using Emacs Lisp, making it highly customizable.',
            features: [
                'Extensible through Emacs Lisp',
                'Built-in documentation and tutorial',
                'Syntax highlighting for numerous languages',
                'Integrated debugging and project management'
            ],
            link: 'https://www.gnu.org/software/emacs/'
        },
        gpl: {
            title: 'GNU General Public License',
            description: 'The GPL is a widely-used free software license that guarantees end users the freedom to run, study, share, and modify the software. Written by Richard Stallman, the GPL pioneered the concept of copyleft, ensuring that derivative works remain free.',
            features: [
                'Copyleft licensing model',
                'Ensures software freedom is preserved',
                'Used by thousands of projects worldwide',
                'Multiple versions (GPLv2, GPLv3, AGPL)'
            ],
            link: 'https://www.gnu.org/licenses/gpl-3.0.html'
        },
        fsf: {
            title: 'Free Software Foundation',
            description: 'The Free Software Foundation is a nonprofit organization founded in 1985 to support the free software movement. The FSF promotes computer user freedom and defends the rights of all free software users through advocacy, education, and software development.',
            features: [
                'Advocacy for software freedom',
                'Educational programs and campaigns',
                'License compliance and support',
                'Global community of supporters'
            ],
            link: 'https://www.fsf.org'
        },
        gdb: {
            title: 'GNU Debugger',
            description: 'GDB is the standard debugger for the GNU operating system. It allows developers to see what is happening inside a program while it executes or what a program was doing at the moment it crashed. GDB supports multiple programming languages and platforms.',
            features: [
                'Multi-language debugging support',
                'Remote debugging capabilities',
                'Breakpoints and watchpoints',
                'Memory and register inspection'
            ],
            link: 'https://www.gnu.org/software/gdb/'
        }
    };
    
    // Open modal when clicking project card
    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            const projectId = this.getAttribute('data-project');
            const project = projectData[projectId];
            
            if (project) {
                // Build modal content
                let featuresHTML = project.features.map(f => `<li>${f}</li>`).join('');
                
                modalBody.innerHTML = `
                    <h2>${project.title}</h2>
                    <p>${project.description}</p>
                    <h3>Key Features</h3>
                    <ul style="margin-left: 1.5rem; margin-bottom: 1.5rem;">
                        ${featuresHTML}
                    </ul>
                    <a href="${project.link}" target="_blank" rel="noopener" class="cta-button">Learn More</a>
                `;
                
                // Show modal
                modal.classList.add('active');
                modal.setAttribute('aria-hidden', 'false');
                document.body.style.overflow = 'hidden'; // Prevent background scroll
            }
        });
    });
    
    // Close modal when clicking close button
    closeBtn.addEventListener('click', closeModal);
    
    // Close modal when clicking outside content
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
    
    // Function to close modal
    function closeModal() {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = ''; // Restore scroll
    }
}

// ============================================
// FORM VALIDATION
// ============================================
/**
 * Validates the contact form using HTML5 validation API
 * Shows custom error messages for better UX
 * Prevents submission and displays errors if validation fails
 */
function initFormValidation() {
    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    
    // Form submit handler
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Reset all error messages
        hideAllErrors();
        
        let isValid = true;
        
        // Validate name
        if (!nameInput.value.trim()) {
            showError('nameError', 'Please enter your name');
            isValid = false;
        }
        
        // Validate email
        if (!emailInput.value.trim()) {
            showError('emailError', 'Please enter your email address');
            isValid = false;
        } else if (!isValidEmail(emailInput.value)) {
            showError('emailError', 'Please enter a valid email address');
            isValid = false;
        }
        
        // Validate message
        if (!messageInput.value.trim()) {
            showError('messageError', 'Please enter your message');
            isValid = false;
        }
        
        // If all valid, show success message (no backend, so just alert)
        if (isValid) {
            alert('Thank you for your message! (Note: This is a demo form without backend functionality)');
            form.reset();
        }
    });
    
    // Real-time validation on blur
    nameInput.addEventListener('blur', function() {
        if (this.value.trim()) {
            hideError('nameError');
        }
    });
    
    emailInput.addEventListener('blur', function() {
        if (this.value.trim() && isValidEmail(this.value)) {
            hideError('emailError');
        }
    });
    
    messageInput.addEventListener('blur', function() {
        if (this.value.trim()) {
            hideError('messageError');
        }
    });
    
    // Helper function to validate email format
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Helper function to show error message
    function showError(errorId, message) {
        const errorElement = document.getElementById(errorId);
        errorElement.textContent = message;
        errorElement.classList.add('visible');
    }
    
    // Helper function to hide specific error
    function hideError(errorId) {
        const errorElement = document.getElementById(errorId);
        errorElement.classList.remove('visible');
    }
    
    // Helper function to hide all errors
    function hideAllErrors() {
        const errors = document.querySelectorAll('.error-message');
        errors.forEach(error => error.classList.remove('visible'));
    }
}