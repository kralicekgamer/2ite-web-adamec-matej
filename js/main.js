document.addEventListener('DOMContentLoaded', () => {
    initNavToggle();
    initScrollEffects();
    initModal();
    initFormValidation();
});

/**
 * 1. MOBILE MENU TOGGLE
 */
function initNavToggle() {
    const toggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');
    const navLinks = document.querySelectorAll('.nav-link');

    toggle.addEventListener('click', () => {
        const isExpanded = toggle.getAttribute('aria-expanded') === 'true';

        toggle.setAttribute('aria-expanded', !isExpanded);
        toggle.classList.toggle('active');
        navList.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            toggle.setAttribute('aria-expanded', 'false');
            toggle.classList.remove('active');
            navList.classList.remove('active');
        });
    });
}

/**
 * 2. SCROLL EFFECTS (Sticky Header)
 */
function initScrollEffects() {
    const header = document.getElementById('header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

/**
 * 3. MODAL LOGIC
 */
function initModal() {
    const modal = document.getElementById('projectModal');
    const closeBtn = document.querySelector('.close-modal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const cards = document.querySelectorAll('.project-card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const title = card.getAttribute('data-title');
            const desc = card.getAttribute('data-desc');

            modalTitle.textContent = title;
            modalDesc.textContent = desc;
            modal.classList.add('active');
        });
    });

    const closeModal = () => modal.classList.remove('active');

    closeBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

/**
 * 4. FORM VALIDATION
 */
function initFormValidation() {
    const form = document.getElementById('contactForm');
    const toast = document.getElementById('toast');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;

        const inputs = form.querySelectorAll('input, textarea');

        inputs.forEach(input => {
            const errorMsg = input.nextElementSibling;

            if (!input.checkValidity()) {
                isValid = false;
                input.style.borderColor = 'var(--accent-orange)';
                errorMsg.style.display = 'block';
            } else {
                input.style.borderColor = 'var(--border-color)';
                errorMsg.style.display = 'none';
            }
        });

        if (isValid) {
            showToast();
            form.reset();
        }
    });

    function showToast() {
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }
}