/* ===================================
   NAVIGATION UNIFIÉE - JAVASCRIPT SIMPLE ET EFFICACE
   =================================== */

class UnifiedNavigation {
    constructor() {
        this.hamburger = document.getElementById('hamburger');
        this.navMenu = document.getElementById('navMenu');
        this.body = document.body;
        this.overlay = null;
        this.isOpen = false;
        
        this.init();
    }
    
    init() {
        console.log('🚀 Initialisation Navigation Unifiée');
        
        // Vérifier les éléments requis
        if (!this.hamburger || !this.navMenu) {
            console.error('❌ Éléments navigation manquants:', {
                hamburger: !!this.hamburger,
                navMenu: !!this.navMenu
            });
            return;
        }
        
        // Créer l'overlay
        this.createOverlay();
        
        // Event listeners
        this.setupEventListeners();
        
        console.log('✅ Navigation Unifiée initialisée');
    }
    
    createOverlay() {
        // Pas d'overlay nécessaire - on utilise seulement le flou CSS
        this.overlay = null;
    }
    
    setupEventListeners() {
        // Hamburger toggle
        this.hamburger.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            this.toggleMenu();
        });
        
        // Click outside menu to close
        document.addEventListener('click', (e) => {
            if (this.isOpen && !this.navMenu.contains(e.target) && !this.hamburger.contains(e.target)) {
                this.closeMenu();
            }
        });
        
        // Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isOpen) {
                this.closeMenu();
            }
        });
        
        // Resize window
        window.addEventListener('resize', () => {
            if (window.innerWidth > 1024 && this.isOpen) {
                this.closeMenu();
            }
        });
        
        // Navigation links
        this.navMenu.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                // Ne pas fermer si c'est un dropdown toggle
                if (!link.closest('.nav-dropdown')) {
                    setTimeout(() => this.closeMenu(), 150);
                }
            });
        });
        
        // Dropdown toggles
        this.setupDropdowns();
    }
    
    setupDropdowns() {
        const dropdowns = document.querySelectorAll('.nav-dropdown');
        
        dropdowns.forEach(dropdown => {
            const toggle = dropdown.querySelector('.dropdown-toggle');
            
            if (toggle) {
                toggle.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    // Fermer les autres dropdowns
                    dropdowns.forEach(other => {
                        if (other !== dropdown) {
                            other.classList.remove('open');
                        }
                    });
                    
                    // Toggle ce dropdown
                    dropdown.classList.toggle('open');
                });
            }
        });
    }
    
    toggleMenu() {
        if (this.isOpen) {
            this.closeMenu();
        } else {
            this.openMenu();
        }
    }
    
    openMenu() {
        console.log('📱 Ouverture menu mobile');
        
        // Classes simples
        this.hamburger.classList.add('active');
        this.navMenu.classList.add('active');
        this.body.classList.add('menu-open');
        
        // Styles de base seulement
        this.navMenu.style.right = '0';
        
        // FORCER LES Z-INDEX ULTRA ÉLEVÉS POUR LA NAVIGATION
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            navbar.style.zIndex = '9999999999';
        }
        this.navMenu.style.zIndex = '9999999998';
        this.hamburger.style.zIndex = '10000000000';
        
        // FORCER TOUT LE CONTENU DE LA PAGE EN ARRIÈRE-PLAN
        const allElements = document.querySelectorAll('main, section, article, .container, .page-section, .content-card, .service-block, .hero-industrial, footer, div:not(.navbar):not(.nav-menu):not(.nav-wrapper):not(.nav-list):not(.logo)');
        allElements.forEach(element => {
            if (!element.closest('.navbar') && !element.closest('.nav-menu')) {
                element.style.zIndex = '-999999';
                element.style.position = 'relative';
            }
        });
        
        // Bloquer scroll
        this.body.style.overflow = 'hidden';
        
        this.isOpen = true;
        
        // Accessibilité
        this.hamburger.setAttribute('aria-expanded', 'true');
        this.navMenu.setAttribute('aria-hidden', 'false');
        
        console.log('✅ Menu ouvert avec z-index forcés');
    }
    
    closeMenu() {
        console.log('📱 Fermeture menu mobile');
        
        // Classes simples
        this.hamburger.classList.remove('active');
        this.navMenu.classList.remove('active');
        this.body.classList.remove('menu-open');
        
        // Reset styles
        this.navMenu.style.right = '';
        
        // RESET Z-INDEX POUR LA NAVIGATION
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            navbar.style.zIndex = '';
        }
        this.navMenu.style.zIndex = '';
        this.hamburger.style.zIndex = '';
        
        // RESET Z-INDEX POUR TOUT LE CONTENU
        const allElements = document.querySelectorAll('main, section, article, .container, .page-section, .content-card, .service-block, .hero-industrial, footer, div:not(.navbar):not(.nav-menu):not(.nav-wrapper):not(.nav-list):not(.logo)');
        allElements.forEach(element => {
            element.style.zIndex = '';
            element.style.position = '';
        });
        
        // Restaurer scroll
        this.body.style.overflow = '';
        
        this.isOpen = false;
        
        // Accessibilité
        this.hamburger.setAttribute('aria-expanded', 'false');
        this.navMenu.setAttribute('aria-hidden', 'true');
        
        console.log('✅ Menu fermé avec reset z-index');
    }
    
    // Méthodes publiques pour debug
    getStatus() {
        return {
            isOpen: this.isOpen,
            hamburgerExists: !!this.hamburger,
            navMenuExists: !!this.navMenu,
            overlayExists: !!this.overlay,
            windowWidth: window.innerWidth
        };
    }
    
    forceClose() {
        if (this.isOpen) {
            this.closeMenu();
        }
    }
}

// ===================================
// AUTO-INITIALISATION
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 DOM Ready - Initialisation Navigation');
    
    // Initialiser la navigation unifiée
    window.unifiedNav = new UnifiedNavigation();
    
    // Debug info
    console.log('📊 Navigation Status:', window.unifiedNav.getStatus());
});

// ===================================
// NAVIGATION ACTIVE HIGHLIGHTING
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        
        const href = link.getAttribute('href');
        if (href && (currentPath.includes(href) || 
           (currentPath === '/' && href === 'index.html') ||
           (currentPath.endsWith('/') && href === 'index.html'))) {
            link.classList.add('active');
        }
    });
});

// ===================================
// EXPORT POUR COMPATIBILITÉ
// ===================================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = UnifiedNavigation;
}