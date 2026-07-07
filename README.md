# Site Vitrine ATC

## 🚀 Description
Site web professionnel et moderne pour ATC - Solutions technologiques innovantes.

## ✨ Caractéristiques

### Design
- Design moderne et épuré
- Animations fluides et élégantes
- Palette de couleurs professionnelle
- Interface utilisateur intuitive
- Effets de parallaxe et transitions

### Responsive
- 100% responsive (mobile, tablette, desktop)
- Optimisé pour tous les écrans
- Navigation mobile adaptative
- Images optimisées

### Pages
- **Accueil** : Hero section, services, à propos preview, portfolio
- **À Propos** : Histoire, mission, vision, équipe, statistiques
- **Services** : 6 services détaillés avec descriptions complètes
- **Réalisations** : Portfolio filtrable avec catégories
- **Contact** : Formulaire, informations, carte Google Maps

### Technologies Utilisées
- HTML5
- CSS3 (Variables CSS, Flexbox, Grid)
- JavaScript / jQuery
- AOS (Animate On Scroll)
- Font Awesome
- Google Fonts (Poppins, Montserrat)

## 📁 Structure du Projet

```
ATC/
├── index.html              # Page d'accueil
├── pages/
│   ├── about.html         # Page à propos
│   ├── services.html      # Page services
│   ├── realisations.html  # Page réalisations
│   └── contact.html       # Page contact
├── css/
│   ├── style.css          # Styles principaux
│   └── responsive.css     # Styles responsive
├── js/
│   └── main.js            # JavaScript principal
├── images/                # Dossier des images
└── README.md             # Documentation
```

## 🎨 Palette de Couleurs

- **Primaire** : #2563eb (Bleu)
- **Secondaire** : #7c3aed (Violet)
- **Accent** : #ec4899 (Rose)
- **Dark** : #0f172a (Noir profond)
- **Light** : #f8fafc (Blanc cassé)
- **Text** : #334155 (Gris foncé)

## 🚀 Démarrage Rapide

1. Ouvrir le dossier ATC
2. Lancer `index.html` dans un navigateur
3. Naviguer entre les pages via le menu

## 📱 Fonctionnalités

### Navigation
- Menu sticky qui change au scroll
- Menu hamburger pour mobile
- Navigation fluide entre les sections
- Indicateur de page active

### Animations
- Loader au chargement
- Animations au scroll (AOS)
- Transitions smooth
- Effets hover élégants
- Compteurs animés

### Formulaire Contact
- Validation des champs
- Messages d'erreur/succès
- Design moderne
- Champs requis marqués

### Performance
- Lazy loading des images
- Debounce sur les events scroll
- Préchargement des images critiques
- Code optimisé

## 🎯 Bonnes Pratiques

### Code
- Code propre et bien structuré
- Commentaires détaillés
- Nomenclature cohérente
- Réutilisabilité du code
- Séparation des concerns

### SEO
- Meta tags optimisés
- Structure sémantique HTML5
- Descriptions pertinentes
- URLs propres

### Accessibilité
- Navigation au clavier
- ARIA labels
- Contrastes respectés
- Focus visible

## 🔧 Personnalisation

### Couleurs
Modifier les variables CSS dans `css/style.css` :
```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #7c3aed;
    /* ... */
}
```

### Contenu
- Textes : Modifier directement dans les fichiers HTML
- Images : Remplacer dans le dossier `images/`
- Coordonnées : Modifier dans le footer et page contact

### Animations
Paramètres AOS dans `js/main.js` :
```javascript
AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true
});
```

## 📞 Support
Pour toute question ou assistance, contactez l'équipe de développement.

## 📄 Licence
© 2026 ATC. Tous droits réservés.

---

Développé avec ❤️ pour ATC
