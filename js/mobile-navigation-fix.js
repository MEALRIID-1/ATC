/* ===================================
   MOBILE NAVIGATION - JAVASCRIPT MODERNE
   Approche UI/UX professionnelle
   =================================== */

class MobileNavigation {
    constructor() {
        this.hamburger = document.getElementById('hamburger');
        this.navMenu = document.getElementById('navMenu');
        this.body = document.body;
        this.overlay = null;
        this.isOpen = false;
        
        this.init();
    }
    
    init() {
        // Debug des éléments HTML
        console.log('🔍 Debug éléments navigation:');
        console.log('- Hamburger:', this.hamburger ? '✅ Trouvé' : '❌ Manquant');
        console.log('- NavMenu:', this.navMenu ? '✅ Trouvé' : '❌ Manquant');
        console.log('- NavMenu HTML:', this.navMenu?.innerHTML ? 'Contenu présent' : 'Vide');
        console.log('- Liens navigation:', this.navMenu?.querySelectorAll('.nav-link').length || 0);
        
        // Créer l'overlay
        this.createOverlay();
        
        // Event listeners
        this.hamburger?.addEventListener('click', (e) => this.toggleMenu(e));
        this.overlay?.addEventListener('click', () => this.closeMenu());
        
        // Fermer avec Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isOpen) {
                this.closeMenu();
            }
        });
        
        // Fermer sur redimensionnement
        window.addEventListener('resize', () => {
            if (window.innerWidth > 1024 && this.isOpen) {
                this.closeMenu();
            }
        });
        
        // Fermer quand on clique sur un lien
        this.navMenu?.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                // Délai pour permettre la navigation
                setTimeout(() => this.closeMenu(), 100);
            });
        });
        
        // Gestion des dropdowns
        this.initDropdowns();
        
        console.log('✅ Mobile Navigation initialisée');
    }
    
    createOverlay() {
        // Créer l'overlay s'il n'existe pas
        if (!document.querySelector('.mobile-overlay')) {
            this.overlay = document.createElement('div');
            this.overlay.className = 'mobile-overlay';
            document.body.appendChild(this.overlay);
        } else {
            this.overlay = document.querySelector('.mobile-overlay');
        }
    }
    
    toggleMenu(e) {
        e.preventDefault();
        e.stopPropagation();
        
        if (this.isOpen) {
            this.closeMenu();
        } else {
            this.openMenu();
        }
    }
    
    openMenu() {
        console.log('🔄 Ouverture du menu mobile');
        
        // États des classes
        this.hamburger?.classList.add('active');
        this.navMenu?.classList.add('active');
        this.overlay?.classList.add('active');
        this.body.classList.add('menu-open');
        
        // FORCER L'AFFICHAGE AVEC STYLES INLINE (PRIORITÉ ABSOLUE)
        if (this.navMenu) {
            // Styles forcés inline pour garantir l'affichage
            this.navMenu.style.cssText = `
                position: fixed !important;
                top: 0 !important;
                right: 0 !important;
                width: 320px !important;
                height: 100vh !important;
                background: #004080 !important;
                z-index: 99999 !important;
                display: block !important;
                visibility: visible !important;
                opacity: 1 !important;
                padding: 80px 30px 30px !important;
                overflow-y: auto !important;
                box-shadow: -10px 0 30px rgba(0, 0, 0, 0.5) !important;
                transition: all 0.3s ease !important;
            `;
            
            // Forcer l'affichage de la nav-list
            const navList = this.navMenu.querySelector('.nav-list');
            if (navList) {
                navList.style.cssText = `
                    display: block !important;
                    list-style: none !important;
                    margin: 0 !important;
                    padding: 0 !important;
                    width: 100% !important;
                `;
            }
            
            // Forcer l'affichage de tous les liens
            const navLinks = this.navMenu.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                link.style.cssText = `
                    display: block !important;
                    color: #ffffff !important;
                    font-size: 16px !important;
                    font-weight: 600 !important;
                    padding: 16px 0 !important;
                    text-decoration: none !important;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
                    width: 100% !important;
                `;
            });
            
            // Boutons spéciaux
            const langSwitcher = this.navMenu.querySelector('.lang-switcher');
            if (langSwitcher) {
                langSwitcher.style.cssText = `
                    display: block !important;
                    width: 100% !important;
                    background: rgba(255, 255, 255, 0.1) !important;
                    color: #ffffff !important;
                    border: 1px solid rgba(255, 255, 255, 0.2) !important;
                    padding: 12px 20px !important;
                    border-radius: 6px !important;
                    font-weight: 600 !important;
                    cursor: pointer !important;
                    margin-top: 15px !important;
                `;
            }
            
            const ctaButton = this.navMenu.querySelector('.btn-nav-cta');
            if (ctaButton) {
                ctaButton.style.cssText = `
                    display: block !important;
                    width: 100% !important;
                    background: linear-gradient(135deg, #FF6600 0%, #e55a00 100%) !important;
                    color: #ffffff !important;
                    padding: 12px 20px !important;
                    border-radius: 6px !important;
                    font-weight: 700 !important;
                    text-align: center !important;
                    border: none !important;
                    cursor: pointer !important;
                    margin-top: 10px !important;
                    text-decoration: none !important;
                `;
            }
        }
        
        // Overlay forcé
        if (this.overlay) {
            this.overlay.style.cssText = `
                position: fixed !important;
                top: 0 !important;
                left: 0 !important;
                width: 100vw !important;
                height: 100vh !important;
                background: rgba(0, 0, 0, 0.5) !important;
                z-index: 99998 !important;
                opacity: 1 !important;
                visibility: visible !important;
                backdrop-filter: blur(2px) !important;
            `;
        }
        
        // Bloquer le défilement
        this.body.style.overflow = 'hidden';
        this.body.style.position = 'fixed';
        this.body.style.width = '100%';
        
        this.isOpen = true;
        
        // Accessibilité
        this.hamburger?.setAttribute('aria-expanded', 'true');
        this.navMenu?.setAttribute('aria-hidden', 'false');
        
        console.log('✅ Menu mobile ouvert avec styles forcés');
    }
    
    closeMenu() {
        console.log('🔄 Fermeture du menu mobile');
        
        // États des classes
        this.hamburger?.classList.remove('active');
        this.navMenu?.classList.remove('active');
        this.overlay?.classList.remove('active');
        this.body.classList.remove('menu-open');
        
        // NETTOYER TOUS LES STYLES FORCÉS
        if (this.navMenu) {
            this.navMenu.style.cssText = '';
            
            // Nettoyer les styles des enfants aussi
            const allElements = this.navMenu.querySelectorAll('*');
            allElements.forEach(element => {
                element.style.cssText = '';
            });
        }
        
        if (this.overlay) {
            this.overlay.style.cssText = '';
        }
        
        // Restaurer le défilement
        this.body.style.overflow = '';
        this.body.style.position = '';
        this.body.style.width = '';
        
        this.isOpen = false;
        
        // Accessibilité
        this.hamburger?.setAttribute('aria-expanded', 'false');
        this.navMenu?.setAttribute('aria-hidden', 'true');
        
        console.log('✅ Menu mobile fermé');
    }
    
    initDropdowns() {
        const dropdowns = document.querySelectorAll('.nav-dropdown');
        
        dropdowns.forEach(dropdown => {
            const toggle = dropdown.querySelector('.dropdown-toggle');
            
            toggle?.addEventListener('click', (e) => {
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
        });
    }
    
    // Méthode publique pour forcer la fermeture
    forceClose() {
        if (this.isOpen) {
            this.closeMenu();
        }
    }
    
    // Debug method
    getStatus() {
        return {
            isOpen: this.isOpen,
            hamburgerExists: !!this.hamburger,
            navMenuExists: !!this.navMenu,
            overlayExists: !!this.overlay,
            menuVisible: this.navMenu ? getComputedStyle(this.navMenu).visibility : 'unknown'
        };
    }
}

// ===================================
// INITIALISATION AUTOMATIQUE
// ===================================

// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', function() {
    // Vérifier si on est sur mobile
    if (window.innerWidth <= 1024) {
        console.log('📱 Détection mobile - Initialisation navigation');
        
        // Initialiser la navigation mobile
        window.mobileNav = new MobileNavigation();
        
        // Debug dans la console
        console.log('🔧 Status navigation:', window.mobileNav.getStatus());
        
        // Test automatique (uniquement en développement)
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            console.log('🧪 Mode développement détecté');
            
            // Tester l'ouverture après 2 secondes (pour debug)
            // setTimeout(() => {
            //     console.log('🧪 Test ouverture automatique');
            //     window.mobileNav.openMenu();
            //     
            //     setTimeout(() => {
            //         console.log('🧪 Test fermeture automatique');
            //         window.mobileNav.closeMenu();
            //     }, 2000);
            // }, 2000);
        }
    }
});

// ===================================
// FALLBACK JQUERY (COMPATIBILITY)
// ===================================

// Si jQuery existe, ajouter support legacy
if (typeof jQuery !== 'undefined') {
    jQuery(document).ready(function($) {
        // Fallback pour l'ancien système
        $('#hamburger').off('click').on('click', function(e) {
            if (window.mobileNav) {
                window.mobileNav.toggleMenu(e);
            }
        });
        
        console.log('🔄 Fallback jQuery activé');
    });
}

// Export pour utilisation externe
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MobileNavigation;
}

// Global pour le navigateur
window.MobileNavigation = MobileNavigation;