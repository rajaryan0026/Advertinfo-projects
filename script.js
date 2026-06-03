document.addEventListener('DOMContentLoaded', () => {

    // 1. --- Custom Cursor Tracking ---
    const cursor = document.querySelector('.custom-cursor');
    const follower = document.querySelector('.custom-cursor-follower');
    
    if (cursor && follower) {
        let mouseX = 0, mouseY = 0;
        let followerX = 0, followerY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            // Instantly move the small center dot
            cursor.style.left = `${mouseX}px`;
            cursor.style.top = `${mouseY}px`;
        });

        // Smooth follow animation for the outer ring using lerp (Linear Interpolation)
        const renderCursor = () => {
            followerX += (mouseX - followerX) * 0.15;
            followerY += (mouseY - followerY) * 0.15;
            
            follower.style.left = `${followerX}px`;
            follower.style.top = `${followerY}px`;
            
            requestAnimationFrame(renderCursor);
        };
        requestAnimationFrame(renderCursor);

        // Hover effect on links and buttons
        const hoverTargets = document.querySelectorAll('a, button, .filter-btn, .faq-question, .masonry-item, .highlight-card, .service-card, .industry-card, .why-card');
        
        hoverTargets.forEach(target => {
            target.addEventListener('mouseenter', () => {
                document.body.classList.add('hover-active');
            });
            target.addEventListener('mouseleave', () => {
                document.body.classList.remove('hover-active');
            });
        });

        // Hide cursor when mouse leaves window
        document.addEventListener('mouseleave', () => {
            cursor.style.opacity = '0';
            follower.style.opacity = '0';
        });
        document.addEventListener('mouseenter', () => {
            cursor.style.opacity = '1';
            follower.style.opacity = '1';
        });
    }

    // 2. --- Loading Screen Fading ---
    const loaderScreen = document.querySelector('.loader-screen');
    if (loaderScreen) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                loaderScreen.classList.add('fade-out');
                // Trigger hero text animations after loader fades
                setTimeout(() => {
                    const heroTitle = document.querySelector('.hero-title-reveal h1');
                    if (heroTitle) heroTitle.style.animation = 'titleReveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards';
                }, 100);
            }, 1000); // Small delay to let user appreciate the loading transition
        });

        // Fallback in case load event takes too long
        setTimeout(() => {
            if (!loaderScreen.classList.contains('fade-out')) {
                loaderScreen.classList.add('fade-out');
            }
        }, 3000);
    }

    // 3. --- Navbar Scroll Styles ---
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // 4. --- Mobile Menu Toggle ---
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', () => {
            mobileToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close mobile menu on clicking any link
        const menuLinks = navLinks.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // 5. --- Staggered Scroll Reveal ---
    const revealElements = document.querySelectorAll('.scroll-reveal');
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                // Keep observing in case we want it to animate out/in, 
                // or unobserve to freeze it: observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // 6. --- Count-Up Statistics ---
    const statsContainer = document.querySelector('.hero-stats-strip');
    const statNums = document.querySelectorAll('.stat-num-val');
    let statsAnimated = false;

    if (statsContainer && statNums.length > 0) {
        const countUp = () => {
            statNums.forEach(num => {
                const target = parseInt(num.getAttribute('data-target'), 10);
                const duration = 2000; // 2 seconds
                const startTime = performance.now();

                const updateCount = (currentTime) => {
                    const elapsed = currentTime - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    
                    // Easing out function
                    const easeOutQuad = t => t * (2 - t);
                    const currentVal = Math.floor(easeOutQuad(progress) * target);

                    // Add appropriate comma formatting or plus sign formatting
                    if (target >= 1000) {
                        num.textContent = currentVal.toLocaleString('en-IN');
                    } else {
                        num.textContent = currentVal;
                    }

                    if (progress < 1) {
                        requestAnimationFrame(updateCount);
                    } else {
                        num.textContent = target >= 1000 ? target.toLocaleString('en-IN') : target;
                    }
                };
                requestAnimationFrame(updateCount);
            });
        };

        const statsObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !statsAnimated) {
                statsAnimated = true;
                countUp();
            }
        }, { threshold: 0.3 });

        statsObserver.observe(statsContainer);
    }

    // 7. --- Infinite Logo Marquee Cloning ---
    const marqueeTrack = document.querySelector('.marquee-track');
    if (marqueeTrack) {
        const marqueeItems = Array.from(marqueeTrack.children);
        // Duplicate elements to ensure smooth seamless looping
        marqueeItems.forEach(item => {
            const clone = item.cloneNode(true);
            marqueeTrack.appendChild(clone);
        });
    }

    // 8. --- Testimonials Carousel ---
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    const dotsContainer = document.querySelector('.carousel-dots');
    let currentSlide = 0;
    let carouselInterval;

    if (testimonialSlides.length > 0 && dotsContainer) {
        // Create navigation dots
        testimonialSlides.forEach((_, idx) => {
            const dot = document.createElement('button');
            dot.classList.add('dot');
            if (idx === 0) dot.classList.add('active');
            dot.setAttribute('aria-label', `Go to testimonial slide ${idx + 1}`);
            dotsContainer.appendChild(dot);

            dot.addEventListener('click', () => {
                goToSlide(idx);
                resetInterval();
            });
        });

        const dots = dotsContainer.querySelectorAll('.dot');

        const goToSlide = (index) => {
            testimonialSlides[currentSlide].classList.remove('active');
            dots[currentSlide].classList.remove('active');
            
            currentSlide = (index + testimonialSlides.length) % testimonialSlides.length;
            
            testimonialSlides[currentSlide].classList.add('active');
            dots[currentSlide].classList.add('active');
        };

        const nextSlide = () => {
            goToSlide(currentSlide + 1);
        };

        const startInterval = () => {
            carouselInterval = setInterval(nextSlide, 5000); // Change slide every 5s
        };

        const resetInterval = () => {
            clearInterval(carouselInterval);
            startInterval();
        };

        startInterval();
    }

    // 9. --- Portfolio Masonry Filters & Lightbox ---
    const filterBtns = document.querySelectorAll('.filter-btn');
    const masonryItems = document.querySelectorAll('.masonry-item');

    if (filterBtns.length > 0 && masonryItems.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Toggle active class on buttons
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filter = btn.getAttribute('data-filter');

                masonryItems.forEach(item => {
                    if (filter === 'all' || item.getAttribute('data-category') === filter) {
                        item.style.display = 'block';
                        // Add smooth transition effect
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'scale(1)';
                        }, 50);
                    } else {
                        item.style.opacity = '0';
                        item.style.transform = 'scale(0.8)';
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }

    // Lightbox modal functionality
    const lightbox = document.querySelector('.lightbox-modal');
    const lightboxImg = document.querySelector('.lightbox-img');
    const lightboxClose = document.querySelector('.lightbox-close');

    if (lightbox && lightboxImg && lightboxClose) {
        masonryItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const imgSrc = item.querySelector('.masonry-item-img').getAttribute('src');
                lightboxImg.setAttribute('src', imgSrc);
                lightbox.classList.add('active');
            });
        });

        const closeLightbox = () => {
            lightbox.classList.remove('active');
            setTimeout(() => {
                lightboxImg.setAttribute('src', '');
            }, 300);
        };

        lightboxClose.addEventListener('click', closeLightbox);
        
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox || e.target === lightboxClose) {
                closeLightbox();
            }
        });

        // Close on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && lightbox.classList.contains('active')) {
                closeLightbox();
            }
        });
    }

    // 10. --- FAQ Accordion ---
    const faqItems = document.querySelectorAll('.faq-item');
    if (faqItems.length > 0) {
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            const answer = item.querySelector('.faq-answer');

            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                // Close all other accordions
                faqItems.forEach(otherItem => {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.faq-answer').style.maxHeight = null;
                });

                if (!isActive) {
                    item.classList.add('active');
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                }
            });
        });
    }

    // 11. --- Premium Page Transitions ---
    const transitionOverlay = document.querySelector('.page-transition-overlay');
    const links = document.querySelectorAll('a[href]');

    if (transitionOverlay) {
        links.forEach(link => {
            // Check if link goes to a different html file (internal page link)
            const href = link.getAttribute('href');
            if (href && href.endsWith('.html') && !href.startsWith('http') && !link.getAttribute('target')) {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    transitionOverlay.classList.add('active');
                    
                    // Navigate after transition completes
                    setTimeout(() => {
                        window.location.href = href;
                    }, 500);
                });
            }
        });

        // Clear transition overlay on page load (coming back or newly loaded)
        window.addEventListener('pageshow', (event) => {
            if (event.persisted) {
                transitionOverlay.classList.remove('active');
            }
        });
    }

});
