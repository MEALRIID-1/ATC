// ===================================
// MAIN JAVASCRIPT
// ===================================

$(document).ready(function() {
    'use strict';

    // ===================================
    // LOADER
    // ===================================
    $(window).on('load', function() {
        setTimeout(function() {
            $('.loader-wrapper').addClass('fade-out');
        }, 500);
    });

    // ===================================
    // NAVIGATION
    // ===================================
    
    // Sticky Navigation
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 50) {
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        }
    });

    const currentPath = window.location.pathname.replace(/\\/g, '/');
    const isInsidePages = currentPath.includes('/pages/');

    function pageHref(fileName) {
        if (fileName === 'index.html') {
            return isInsidePages ? '../index.html' : 'index.html';
        }

        return isInsidePages ? fileName : 'pages/' + fileName;
    }

    function buildSharedNavigation() {
        // Force rebuild navigation HTML
        const navHtml = `
            <ul class="nav-list">
                <li><a href="${pageHref('index.html')}" class="nav-link" data-page="index" data-i18n="nav.home">Accueil</a></li>
                <li class="nav-dropdown">
                    <a href="${pageHref('services.html')}" class="nav-link" data-page="services" data-i18n="nav.services">Services <i class="fas fa-chevron-down"></i></a>
                    <button class="dropdown-toggle" type="button" aria-label="Toggle services submenu"><i class="fas fa-chevron-down"></i></button>
                    <ul class="dropdown-menu">
                        <li><a href="${pageHref('flexibles-hydrauliques.html')}" data-i18n="nav.flexibles">Flexibles hydrauliques</a></li>
                        <li><a href="${pageHref('solutions-metalliques.html')}" data-i18n="nav.metal">Solutions métalliques</a></li>
                        <li><a href="${pageHref('charpentes.html')}" data-i18n="nav.structures">Charpentes métalliques</a></li>
                    </ul>
                </li>
                <li><a href="${pageHref('produits.html')}" class="nav-link" data-page="produits" data-i18n="nav.products">Produits</a></li>
                <li><a href="${pageHref('galerie.html')}" class="nav-link" data-page="galerie" data-i18n="nav.gallery">Galerie</a></li>
                <li><a href="${pageHref('realisations.html')}" class="nav-link" data-page="realisations" data-i18n="nav.projects">Réalisations</a></li>
                <li><a href="${pageHref('about.html')}" class="nav-link" data-page="about" data-i18n="nav.about">À propos</a></li>
                <li><a href="${pageHref('contact.html')}" class="nav-link" data-page="contact" data-i18n="nav.contact">Contact</a></li>
                <li><a href="${pageHref('devis.html')}" class="nav-link btn-nav-cta" data-page="devis" data-i18n="nav.quote">Demander un devis</a></li>
                <li><button class="lang-switcher" id="langSwitcher" type="button" aria-label="Switch language">EN</button></li>
            </ul>`;

        // Always rebuild - force it even if content exists
        $('#navMenu').html(navHtml);
        
        // Debug log
        console.log('Navigation built successfully. Menu items count:', $('#navMenu .nav-link').length);
    }

    function highlightCurrentPage() {
        const fileName = currentPath.split('/').pop() || 'index.html';
        const activePage = fileName === '' ? 'index' : fileName.replace('.html', '');
        const servicePages = ['services', 'flexibles-hydrauliques', 'solutions-metalliques', 'charpentes'];
        const pageToHighlight = servicePages.includes(activePage) ? 'services' : activePage;

        $('#navMenu .nav-link').removeClass('active');
        $('#navMenu .nav-link[data-page="' + pageToHighlight + '"]').addClass('active');
    }

    // Build navigation immediately when document is ready
    buildSharedNavigation();
    highlightCurrentPage();
    
    // Also rebuild on window load to be extra sure
    $(window).on('load', function() {
        if ($('#navMenu').children().length === 0) {
            console.log('Rebuilding navigation on window load...');
            buildSharedNavigation();
            highlightCurrentPage();
        }
    });

    let mobileMenuScrollTop = 0;

    function ensureNavigationBuilt() {
        if ($('#navMenu').children().length === 0) {
            buildSharedNavigation();
            highlightCurrentPage();
        }
    }

    function openMobileMenu() {
        ensureNavigationBuilt();

        mobileMenuScrollTop = $(window).scrollTop();
        $('#hamburger').addClass('active').attr('aria-expanded', 'true');
        $('#navMenu').addClass('active').attr('aria-hidden', 'false');
        // Scroll lock sans position:fixed (évite le stacking context qui casse z-index)
        $('body').addClass('menu-open');
        $('html').css('overflow', 'hidden');
    }

    function closeMobileMenu() {
        $('#hamburger').removeClass('active').attr('aria-expanded', 'false');
        $('#navMenu').removeClass('active').attr('aria-hidden', 'true');
        $('.nav-dropdown').removeClass('open');
        $('body').removeClass('menu-open');
        $('html').css('overflow', '');
    }

    $('#hamburger').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();

        if ($('#navMenu').hasClass('active')) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    });

    $(document).on('click', '.dropdown-toggle', function(e) {
        e.preventDefault();
        e.stopPropagation();
        const dropdown = $(this).closest('.nav-dropdown');
        const isOpen = dropdown.toggleClass('open').hasClass('open');

        if (isOpen) {
            dropdown.siblings('.nav-dropdown').removeClass('open');
        }
    });

    $(document).on('click', '.nav-link', function() {
        if (!$(this).closest('.nav-dropdown').length && $('#navMenu').hasClass('active')) {
            closeMobileMenu();
        }
    });

    $(document).on('click', function(e) {
        if ($('#navMenu').hasClass('active') && !$(e.target).closest('.nav-wrapper').length) {
            closeMobileMenu();
        }
    });

    $(document).on('keydown', function(e) {
        if (e.which === 27 && $('#navMenu').hasClass('active')) {
            closeMobileMenu();
        }
    });

    $(window).on('resize', function() {
        if ($(window).width() > 1024 && $('#navMenu').hasClass('active')) {
            closeMobileMenu();
        }
    });

    // Keep the active navigation item aligned with the current page
    $(window).on('hashchange popstate', highlightCurrentPage);

    // ===================================
    // SMOOTH SCROLL
    // ===================================
    $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').on('click', function(e) {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && 
            location.hostname === this.hostname) {
            
            let target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            
            if (target.length) {
                e.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top - 80
                }, 800, 'swing');
            }
        }
    });

    // ===================================
    // COUNTER ANIMATION
    // ===================================
    function animateCounter(element) {
        const target = parseInt($(element).data('count'));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;

        const timer = setInterval(function() {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            $(element).text(Math.floor(current) + (target === 98 ? '%' : ''));
        }, 16);
    }

    // Trigger counter animation when in viewport
    let counterAnimated = false;
    $(window).on('scroll', function() {
        if (!counterAnimated) {
            $('.stat-number').each(function() {
                const elementTop = $(this).offset().top;
                const elementBottom = elementTop + $(this).outerHeight();
                const viewportTop = $(window).scrollTop();
                const viewportBottom = viewportTop + $(window).height();

                if (elementBottom > viewportTop && elementTop < viewportBottom) {
                    animateCounter(this);
                    counterAnimated = true;
                }
            });
        }
    });

    // ===================================
    // BACK TO TOP BUTTON
    // ===================================
    const backToTop = $('#backToTop');

    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 300) {
            backToTop.addClass('visible');
        } else {
            backToTop.removeClass('visible');
        }
    });

    backToTop.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 800, 'swing');
    });

    // ===================================
    // AOS ANIMATION INITIALIZATION
    // ===================================
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false,
        offset: 100
    });

    // Refresh AOS on window resize
    $(window).on('resize', function() {
        AOS.refresh();
    });

    // ===================================
    // PARALLAX EFFECT
    // ===================================
    $(window).on('scroll', function() {
        const scrolled = $(window).scrollTop();
        $('.hero-background').css('transform', 'translateY(' + (scrolled * 0.5) + 'px)');
    });

    // ===================================
    // IMAGE LAZY LOADING
    // ===================================
    function lazyLoadImages() {
        const images = $('img[data-src]');
        
        images.each(function() {
            const img = $(this);
            const imageTop = img.offset().top;
            const imageBottom = imageTop + img.outerHeight();
            const viewportTop = $(window).scrollTop();
            const viewportBottom = viewportTop + $(window).height();

            if (imageBottom > viewportTop && imageTop < viewportBottom) {
                img.attr('src', img.data('src'));
                img.removeAttr('data-src');
            }
        });
    }

    $(window).on('scroll resize', lazyLoadImages);
    lazyLoadImages();

    // ===================================
    // FORM VALIDATION (for contact forms)
    // ===================================
    
    // Fonction pour envoyer via WhatsApp
    function sendToWhatsApp(formData, formType) {
        const phone = '237682828226'; // Numéro WhatsApp ATC
        let message = '';
        
        if (formType === 'contact') {
            message = `*NOUVEAU MESSAGE DE CONTACT*\n\n`;
            message += `📝 *Nom:* ${formData.name}\n`;
            message += `📧 *Email:* ${formData.email}\n`;
            if (formData.phone) {
                message += `📞 *Téléphone:* ${formData.phone}\n`;
            }
            if (formData.subject) {
                message += `📌 *Sujet:* ${formData.subject}\n`;
            }
            message += `\n💬 *Message:*\n${formData.message}`;
        } else if (formType === 'devis') {
            message = `*NOUVELLE DEMANDE DE DEVIS*\n\n`;
            message += `📝 *Nom:* ${formData.name}\n`;
            if (formData.email) {
                message += `📧 *Email:* ${formData.email}\n`;
            }
            message += `📞 *Téléphone:* ${formData.phone}\n`;
            message += `🏷️ *Type de besoin:* ${formData.type}\n`;
            if (formData.message) {
                message += `\n📋 *Détails:*\n${formData.message}`;
            }
        } else if (formType === 'quote') {
            message = `*DEMANDE DE DEVIS RAPIDE*\n\n`;
            message += `📝 *Nom:* ${formData.name}\n`;
            message += `📞 *Téléphone:* ${formData.phone}\n`;
            message += `🏷️ *Type:* ${formData.type}\n`;
            if (formData.details) {
                message += `📋 *Détails:* ${formData.details}`;
            }
        }
        
        // Encoder le message pour URL
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;
        
        // Ouvrir WhatsApp
        window.open(whatsappUrl, '_blank');
        
        return true;
    }
    
    // Gestion du formulaire de contact
    $('.contact-form').on('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;
        const form = $(this);
        
        form.find('input[required], textarea[required]').each(function() {
            if ($(this).val().trim() === '') {
                isValid = false;
                $(this).addClass('error');
            } else {
                $(this).removeClass('error');
            }
        });

        // Email validation
        const emailInput = form.find('input[type="email"]');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (emailInput.length && emailInput.val() && !emailRegex.test(emailInput.val())) {
            isValid = false;
            emailInput.addClass('error');
        }

        if (isValid) {
            // Collecter les données
            const formData = {
                name: form.find('input[name="name"], #contact-name, #name').val(),
                email: form.find('input[name="email"], #contact-email, #email').val(),
                phone: form.find('input[name="phone"], #contact-phone, #phone').val(),
                subject: form.find('input[name="subject"], #contact-subject, #subject').val(),
                message: form.find('textarea[name="message"], #contact-message, #message').val()
            };
            
            // Envoyer via WhatsApp
            if (sendToWhatsApp(formData, 'contact')) {
                showNotification('Redirection vers WhatsApp...', 'success');
                setTimeout(() => {
                    form[0].reset();
                }, 1000);
            }
        } else {
            showNotification('Veuillez remplir tous les champs requis.', 'error');
        }
    });
    
    // Gestion du formulaire de devis
    $('.devis-form').on('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;
        const form = $(this);
        
        form.find('input[required], textarea[required], select[required]').each(function() {
            if ($(this).val().trim() === '') {
                isValid = false;
                $(this).addClass('error');
            } else {
                $(this).removeClass('error');
            }
        });

        if (isValid) {
            // Collecter les données
            const formData = {
                name: form.find('input[name="name"], #devis-name').val(),
                email: form.find('input[name="email"], #devis-email').val(),
                phone: form.find('input[name="phone"], #devis-phone').val(),
                type: form.find('select[name="type"], #devis-type').val(),
                message: form.find('textarea[name="message"], #devis-message').val()
            };
            
            // Envoyer via WhatsApp
            if (sendToWhatsApp(formData, 'devis')) {
                showNotification('Redirection vers WhatsApp...', 'success');
                setTimeout(() => {
                    form[0].reset();
                }, 1000);
            }
        } else {
            showNotification('Veuillez remplir tous les champs requis.', 'error');
        }
    });
    
    // Gestion du formulaire de devis rapide (homepage)
    $('.quote-form').on('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;
        const form = $(this);
        
        form.find('input[required], textarea[required], select[required]').each(function() {
            if ($(this).val().trim() === '') {
                isValid = false;
                $(this).addClass('error');
            } else {
                $(this).removeClass('error');
            }
        });

        if (isValid) {
            // Collecter les données
            const formData = {
                name: form.find('#quote-name').val(),
                phone: form.find('#quote-phone').val(),
                type: form.find('#quote-type').val(),
                details: form.find('#quote-message').val()
            };
            
            // Envoyer via WhatsApp
            if (sendToWhatsApp(formData, 'quote')) {
                showNotification('Redirection vers WhatsApp...', 'success');
                setTimeout(() => {
                    form[0].reset();
                }, 1000);
            }
        } else {
            showNotification('Veuillez remplir tous les champs requis.', 'error');
        }
    });

    // Remove error class on input
    $('input, textarea, select').on('input change', function() {
        $(this).removeClass('error');
    });

    // ===================================
    // NOTIFICATION SYSTEM
    // ===================================
    function showNotification(message, type) {
        const notification = $('<div class="notification ' + type + '">' + message + '</div>');
        
        $('body').append(notification);
        
        setTimeout(function() {
            notification.addClass('show');
        }, 100);

        setTimeout(function() {
            notification.removeClass('show');
            setTimeout(function() {
                notification.remove();
            }, 300);
        }, 3000);
    }

    // ===================================
    // ATC GALLERY, FAQ AND LANGUAGE SWITCHER
    // ===================================
    const translations = {
        fr: {
            'nav.home': 'Accueil',
            'nav.services': 'Services',
            'nav.flexibles': 'Flexibles hydrauliques',
            'nav.metal': 'Solutions métalliques',
            'nav.structures': 'Charpentes métalliques',
            'nav.products': 'Produits',
            'nav.gallery': 'Galerie',
            'nav.projects': 'Réalisations',
            'nav.about': 'À propos',
            'nav.contact': 'Contact',
            'nav.quote': 'Demander un devis',
            'hero.badge': 'Atelier industriel à Douala',
            'hero.title': 'Fabrication de tout matériel en métal',
            'hero.subtitle': 'Flexibles hydrauliques, solutions métalliques industrielles et charpentes métalliques conçues pour durer, avec un service rapide, précis et orienté projet.',
            'hero.quote': 'Demander un devis',
            'hero.contact': 'Contactez-nous',
            'section.poles': 'Nos pôles d\'activité',
            'section.expertise': 'Une expertise industrielle <span class="highlight">complète</span>',
            'section.expertiseText': 'Nous accompagnons les entreprises et chantiers avec des solutions métalliques et hydrauliques pensées pour la performance, la sécurité et la disponibilité.',
            'about.subtitle': 'À propos',
            'about.title': 'Une entreprise au service de la <span class="highlight">fiabilité</span>',
            'about.text': 'ATC - Atelier Tour du Cameroun met son savoir-faire au service des professionnels qui recherchent des solutions métalliques robustes et un dépannage hydraulique réactif.',
            'page.about.title': 'À propos d\'ATC',
            'page.about.subtitle': 'Une entreprise industrielle orientée qualité, réactivité et solutions sur mesure.',
            'page.services.title': 'Nos services',
            'page.services.subtitle': 'Des prestations industrielles conçues pour la performance, la sécurité et le délai.',
            'page.flexibles.title': 'Flexibles hydrauliques',
            'page.flexibles.subtitle': 'Fourniture, réparation, sertissage sur mesure et dépannage rapide.',
            'page.metal.title': 'Solutions métalliques',
            'page.metal.subtitle': 'Mezzanines, carrosseries pour camions et poutres métalliques en acier certifié.',
            'page.structures.title': 'Charpentes métalliques',
            'page.structures.subtitle': 'Hangars, entrepôts et structures sur mesure avec matériaux durables.',
            'page.products.title': 'Notre catalogue',
            'page.products.subtitle': 'Fiches techniques synthétiques, disponibilité et devis sur demande.',
            'page.gallery.title': 'Galerie ATC',
            'page.gallery.subtitle': 'Un aperçu visuel de notre atelier, de nos machines et de nos interventions.',
            'gallery.subtitle': 'Galerie',
            'gallery.title': 'Un aperçu de notre <span class="highlight">atelier</span>',
            'gallery.text': 'Les visuels ci-dessous utilisent les images déjà présentes dans le dossier images.',
            'quote.subtitle': 'Demande de devis',
            'quote.title': 'Réponse rapide en <span class="highlight">24h</span>',
            'quote.text': 'Formulaire simplifié pour les besoins urgents, les flexibles hydrauliques et les structures métalliques.',
            'faq.subtitle': 'FAQ',
            'faq.title': 'Support technique <span class="highlight">clair</span>'
        },
        en: {
            'nav.home': 'Home',
            'nav.services': 'Services',
            'nav.flexibles': 'Hydraulic hoses',
            'nav.metal': 'Metal solutions',
            'nav.structures': 'Steel structures',
            'nav.products': 'Products',
            'nav.gallery': 'Gallery',
            'nav.projects': 'Projects',
            'nav.about': 'About',
            'nav.contact': 'Contact',
            'nav.quote': 'Request a quote',
            'hero.badge': 'Industrial workshop in Douala',
            'hero.title': 'Manufacturing all metal equipment',
            'hero.subtitle': 'Hydraulic hoses, industrial metal solutions and steel structures built to last, with fast, precise and project-focused service.',
            'hero.quote': 'Request a quote',
            'hero.contact': 'Contact us',
            'section.poles': 'Our business lines',
            'section.expertise': 'A <span class="highlight">complete</span> industrial expertise',
            'section.expertiseText': 'We support companies and job sites with metal and hydraulic solutions designed for performance, safety and availability.',
            'about.subtitle': 'About',
            'about.title': 'A company built on <span class="highlight">reliability</span>',
            'about.text': 'ATC - Atelier Tour du Cameroun supports professionals who need robust metal solutions and responsive hydraulic repair service.',
            'page.about.title': 'About ATC',
            'page.about.subtitle': 'An industrial company focused on quality, responsiveness and tailor-made solutions.',
            'page.services.title': 'Our services',
            'page.services.subtitle': 'Industrial services designed for performance, safety and lead time.',
            'page.flexibles.title': 'Hydraulic hoses',
            'page.flexibles.subtitle': 'Custom supply, repair, crimping and fast assistance.',
            'page.metal.title': 'Metal solutions',
            'page.metal.subtitle': 'Mezzanines, truck bodies and steel beams made from certified steel.',
            'page.structures.title': 'Steel structures',
            'page.structures.subtitle': 'Warehouses, hangars and custom structures with durable materials.',
            'page.products.title': 'Our catalog',
            'page.products.subtitle': 'Concise technical sheets, availability and quotes on request.',
            'page.gallery.title': 'ATC gallery',
            'page.gallery.subtitle': 'A visual overview of our workshop, machines and work in the field.',
            'gallery.subtitle': 'Gallery',
            'gallery.title': 'A glimpse of our <span class="highlight">workshop</span>',
            'gallery.text': 'The images below are taken from the current images folder.',
            'quote.subtitle': 'Quote request',
            'quote.title': 'Fast response within <span class="highlight">24h</span>',
            'quote.text': 'A simplified form for urgent needs, hydraulic hoses and metal structures.',
            'faq.subtitle': 'FAQ',
            'faq.title': 'Clear technical <span class="highlight">support</span>'
        }
    };

    function applyLanguage(language) {
        $('[data-i18n]').each(function() {
            const key = $(this).data('i18n');
            const value = translations[language] && translations[language][key];
            if (value) {
                $(this).text(value);
            }
        });

        $('[data-i18n-html]').each(function() {
            const key = $(this).data('i18n-html');
            const value = translations[language] && translations[language][key];
            if (value) {
                $(this).html(value);
            }
        });

        $('html').attr('lang', language === 'en' ? 'en' : 'fr');
        $('#langSwitcher').text(language === 'en' ? 'FR' : 'EN');
        localStorage.setItem('atc-language', language);
    }

    const storedLanguage = localStorage.getItem('atc-language') || 'fr';
    applyLanguage(storedLanguage);

    $('#langSwitcher').on('click', function() {
        const nextLanguage = $('html').attr('lang') === 'en' ? 'fr' : 'en';
        applyLanguage(nextLanguage);
    });

    $('.hero-copy, .hero-visual, .section-intro, .content-card, .service-block, .value-card, .gallery-slider, .news-card, .quote-card, .faq-item, .page-figure').addClass('animate-on-scroll');
    $('.hero-copy').attr('data-animate', 'left');
    $('.hero-visual, .page-figure:last').attr('data-animate', 'right');

    $('[data-gallery-next]').on('click', function() {
        const track = $('#homepageGallery');
        track.animate({ scrollLeft: track.scrollLeft() + 360 }, 350);
    });

    $('[data-gallery-prev]').on('click', function() {
        const track = $('#homepageGallery');
        track.animate({ scrollLeft: track.scrollLeft() - 360 }, 350);
    });

    $('.faq-question').on('click', function() {
        const item = $(this).closest('.faq-item');
        item.toggleClass('open');
        item.siblings('.faq-item').removeClass('open');
    });

    function revealSections() {
        $('.animate-on-scroll').each(function() {
            const elementTop = $(this).offset().top;
            const viewportBottom = $(window).scrollTop() + $(window).height();
            if (elementTop < viewportBottom - 60) {
                $(this).addClass('in-view');
            }
        });
    }

    revealSections();
    $(window).on('scroll resize', debounce(revealSections, 30));

    // ===================================
    // PORTFOLIO FILTER (if on portfolio page)
    // ===================================
    $('.filter-btn').on('click', function() {
        const filter = $(this).data('filter');
        
        $('.filter-btn').removeClass('active');
        $(this).addClass('active');

        if (filter === 'all') {
            $('.portfolio-item').fadeIn(400);
        } else {
            $('.portfolio-item').fadeOut(400);
            $('.portfolio-item[data-category="' + filter + '"]').fadeIn(400);
        }
    });

    // ===================================
    // TYPEWRITER EFFECT (optional enhancement)
    // ===================================
    function typeWriter(element, text, speed) {
        let i = 0;
        const elem = $(element);
        elem.html('');
        
        function type() {
            if (i < text.length) {
                elem.html(elem.html() + text.charAt(i));
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }

    // Uncomment to use typewriter effect on hero title
    // if ($('.hero-title').length) {
    //     const originalText = $('.hero-title').text();
    //     typeWriter('.hero-title', originalText, 50);
    // }

    // ===================================
    // PERFORMANCE OPTIMIZATION
    // ===================================
    
    // Debounce function for scroll events
    function debounce(func, wait) {
        let timeout;
        return function() {
            const context = this;
            const args = arguments;
            clearTimeout(timeout);
            timeout = setTimeout(function() {
                func.apply(context, args);
            }, wait);
        };
    }

    // Apply debounce to scroll handlers
    $(window).on('scroll', debounce(function() {
        // Scroll handlers here
    }, 10));

    // ===================================
    // PRELOAD CRITICAL IMAGES
    // ===================================
    function preloadImages(urls) {
        urls.forEach(function(url) {
            const img = new Image();
            img.src = url;
        });
    }

    // Add your critical image URLs here
    const criticalImages = [
        'images/about-preview.jpg',
        'images/project-1.jpg',
        'images/project-2.jpg',
        'images/project-3.jpg'
    ];

    preloadImages(criticalImages);

    // ===================================
    // ACCESSIBILITY ENHANCEMENTS
    // ===================================
    
    // Keyboard navigation for mobile menu
    $('#hamburger').on('keypress', function(e) {
        if (e.which === 13 || e.which === 32) {
            e.preventDefault();
            $(this).click();
        }
    });

    // Focus trap in mobile menu
    $('#navMenu').on('keydown', function(e) {
        if (e.which === 27 && $(this).hasClass('active')) { // ESC key
            $('#hamburger').click();
        }
    });

    // Skip to main content link
    $('.skip-to-content').on('click', function(e) {
        e.preventDefault();
        $('main').attr('tabindex', '-1').focus();
    });

    // ===================================
    // ANIMATE ELEMENTS ON SCROLL
    // ===================================
    function animateOnScroll() {
        $('.animate-on-scroll').each(function() {
            const elementTop = $(this).offset().top;
            const elementBottom = elementTop + $(this).outerHeight();
            const viewportTop = $(window).scrollTop();
            const viewportBottom = viewportTop + $(window).height();

            if (elementBottom > viewportTop && elementTop < viewportBottom) {
                $(this).addClass('animated');
            }
        });
    }

    $(window).on('scroll', debounce(animateOnScroll, 50));
    animateOnScroll();

    // ===================================
    // DARK MODE TOGGLE (optional feature)
    // ===================================
    const darkModeToggle = $('#darkModeToggle');
    
    if (localStorage.getItem('darkMode') === 'enabled') {
        $('body').addClass('dark-mode');
    }

    darkModeToggle.on('click', function() {
        $('body').toggleClass('dark-mode');
        
        if ($('body').hasClass('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }
    });

    // ===================================
    // MOUSE CURSOR EFFECT (desktop only)
    // ===================================
    if ($(window).width() > 768) {
        const cursor = $('<div class="custom-cursor"></div>');
        const cursorFollower = $('<div class="cursor-follower"></div>');
        
        $('body').append(cursor).append(cursorFollower);

        $(document).on('mousemove', function(e) {
            cursor.css({
                left: e.clientX + 'px',
                top: e.clientY + 'px'
            });

            setTimeout(function() {
                cursorFollower.css({
                    left: e.clientX + 'px',
                    top: e.clientY + 'px'
                });
            }, 100);
        });

        $('a, button, .btn').on('mouseenter', function() {
            cursor.addClass('active');
            cursorFollower.addClass('active');
        }).on('mouseleave', function() {
            cursor.removeClass('active');
            cursorFollower.removeClass('active');
        });
    }

    // ===================================
    // CONSOLE MESSAGE
    // ===================================
    console.log('%c🚀 ATC Website', 'color: #2563eb; font-size: 20px; font-weight: bold;');
    console.log('%cDeveloped with ❤️', 'color: #64748b; font-size: 14px;');

});

// ===================================
// VANILLA JS FOR PERFORMANCE-CRITICAL OPERATIONS
// ===================================

// Intersection Observer for animations
if ('IntersectionObserver' in window) {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.addEventListener('DOMContentLoaded', function() {
        const elementsToObserve = document.querySelectorAll('.observe-animation');
        elementsToObserve.forEach(function(element) {
            observer.observe(element);
        });
    });
}

// Service Worker Registration (for PWA capabilities)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // Uncomment when you have a service worker file
        // navigator.serviceWorker.register('/sw.js').then(function(registration) {
        //     console.log('ServiceWorker registered:', registration);
        // }).catch(function(error) {
        //     console.log('ServiceWorker registration failed:', error);
        // });
    });
}
