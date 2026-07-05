document.addEventListener('DOMContentLoaded', () => {

    // ==========================================================================
    // Part A: Interactive Mouse-Chase Glow Aura Engine
    // ==========================================================================
    const glowOrbElement = document.getElementById('heroGlowOrb');

    if (glowOrbElement) {
        window.addEventListener('mousemove', (event) => {
            const targetX = event.clientX - 300;
            const targetY = event.clientY - 300;
            glowOrbElement.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;
        });
    }

    // ==========================================================================
    // Part B: High-Performance Scroll Reveal Intersection Observer
    // ==========================================================================
    const revealTargetNodes = document.querySelectorAll('.reveal-on-scroll');

    const observerConfigOptions = {
        root: null,
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
      };

    const scrollIntersectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerConfigOptions);

    revealTargetNodes.forEach(node => {
        scrollIntersectionObserver.observe(node);
    });

    // ==========================================================================
    // Part C: Firebase Contact Form Handling Engine (Aligned with HTML IDs)
    // ==========================================================================
    const gatewayFormElement = document.getElementById('contactForm');
    const feedbackStatusOutput = document.getElementById('formStatus');

    if (gatewayFormElement) {
        gatewayFormElement.addEventListener('submit', async (event) => {
            event.preventDefault();

            const inputSenderName = document.getElementById('userName').value.trim();
            const inputSenderEmail = document.getElementById('userEmail').value.trim();
            const inputSenderMessage = document.getElementById('userMessage').value.trim();

            if (!inputSenderName || !inputSenderEmail || !inputSenderMessage) {
                renderFormFeedback('All fields are strictly required for security validation.', 'error');
                return;
            }

            if (!window.FirebaseEngine) {
                renderFormFeedback('System Error: Database connection layer not initialized.', 'error');
                return;
            }

            try {
                const { getFirestore, collection, addDoc, serverTimestamp } = window.FirebaseEngine;
                const db = getFirestore();

                await addDoc(collection(db, 'messages'), {
                    name: inputSenderName,
                    email: inputSenderEmail,
                    message: inputSenderMessage,
                    timestamp: serverTimestamp()
                });

                renderFormFeedback('Transmission successful! Connection gateway secured.', 'success');
                gatewayFormElement.reset();

            } catch (runtimeError) {
                console.error("Database Write Rejection Details: ", runtimeError);
                renderFormFeedback('Data transmission rejected. Check your connection metrics.', 'error');
            }
        });
    }

    function renderFormFeedback(dynamicMessage, feedbackStatusType) {
        if (!feedbackStatusOutput) return;
        
        feedbackStatusOutput.textContent = dynamicMessage;
        feedbackStatusOutput.className = 'form-status-feedback-msg'; 
        feedbackStatusOutput.classList.add(feedbackStatusType);

        setTimeout(() => {
            feedbackStatusOutput.textContent = '';
            feedbackStatusOutput.className = 'form-status-feedback-msg';
        }, 6000);
    }

    // ==========================================================================
    // Part D: Mobile System Navigation Drawer Toggle Logic
    // ==========================================================================
    const menuToggleBtn = document.getElementById('mobileMenuBtn');
    const menuLinksTray = document.getElementById('navMenuLinks');
    const internalNavLinks = document.querySelectorAll('.nav-menu-links a');

    if (menuToggleBtn && menuLinksTray) {
        const toggleMenuContext = () => {
            menuToggleBtn.classList.toggle('is-active');
            menuLinksTray.classList.toggle('is-active');
        };

        menuToggleBtn.addEventListener('click', toggleMenuContext);

        internalNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (menuLinksTray.classList.contains('is-active')) {
                    toggleMenuContext();
                }
            });
        });
    }

    // ==========================================================================
    // Part E: Premium Top-to-Bottom Window Scrolling Engine
    // ==========================================================================
    const backToTopBtn = document.getElementById('backToTopBtn');

    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                backToTopBtn.classList.add('is-visible');
            } else {
                backToTopBtn.classList.remove('is-visible');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});