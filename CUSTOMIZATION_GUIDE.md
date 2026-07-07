# Guide de Personnalisation - Site ATC

## 🎨 Modifier les Couleurs

### Palette Actuelle
La palette de couleurs est définie dans `css/style.css` avec des variables CSS :

```css
:root {
    --primary-color: #2563eb;      /* Bleu principal */
    --secondary-color: #7c3aed;    /* Violet */
    --accent-color: #ec4899;       /* Rose */
    --dark-color: #0f172a;         /* Noir profond */
    --light-color: #f8fafc;        /* Blanc cassé */
    --text-color: #334155;         /* Gris foncé */
    --text-light: #64748b;         /* Gris clair */
}
```

### Pour Changer les Couleurs
1. Ouvrir `css/style.css`
2. Trouver la section `:root` au début du fichier
3. Remplacer les valeurs hexadécimales par vos couleurs
4. Le changement s'appliquera automatiquement partout

### Suggestions de Palettes Alternatives

#### Palette Tech (Bleu/Cyan)
```css
--primary-color: #0ea5e9;
--secondary-color: #06b6d4;
--accent-color: #8b5cf6;
```

#### Palette Corporate (Bleu Marine/Or)
```css
--primary-color: #1e40af;
--secondary-color: #1e3a8a;
--accent-color: #f59e0b;
```

#### Palette Moderne (Vert/Bleu)
```css
--primary-color: #10b981;
--secondary-color: #14b8a6;
--accent-color: #3b82f6;
```

## 📝 Modifier le Contenu

### Logo et Nom de l'Entreprise
Le logo "ATC" apparaît dans :
- Navigation : `<span class="logo-text">ATC</span>`
- Footer : `<span class="logo-text">ATC</span>`

Pour personnaliser :
1. Remplacer le texte "ATC" par votre nom d'entreprise
2. Ou ajouter une image : `<img src="images/logo.png" alt="ATC">`

### Coordonnées de Contact
À modifier dans **toutes les pages** (footer) et dans `pages/contact.html` :

```html
<!-- Adresse -->
<span>123 Avenue Technologique<br>Ville, Pays</span>

<!-- Téléphone -->
<span>+33 1 23 45 67 89</span>

<!-- Email -->
<span>contact@atc.com</span>
```

### Réseaux Sociaux
Liens dans le footer et page contact :

```html
<a href="#" class="social-link"><i class="fab fa-facebook-f"></i></a>
<a href="#" class="social-link"><i class="fab fa-twitter"></i></a>
<a href="#" class="social-link"><i class="fab fa-linkedin-in"></i></a>
<a href="#" class="social-link"><i class="fab fa-instagram"></i></a>
```

Remplacer `href="#"` par vos URLs réelles.

## 📊 Modifier les Statistiques

Dans `index.html`, section hero-stats :

```html
<div class="stat-number" data-count="500">0</div>
<div class="stat-label">Projets Réalisés</div>
```

Changer la valeur de `data-count` pour vos chiffres réels.

## 🖼️ Remplacer les Images

### Structure des Images
```
images/
├── about-preview.jpg      # Image à propos (accueil)
├── project-1.jpg          # Projet 1
├── project-2.jpg          # Projet 2
├── project-3.jpg          # Projet 3
├── team-meeting.jpg       # Équipe (page à propos)
├── team-1.jpg à team-4.jpg # Photos d'équipe
└── service-*.jpg          # Images services
```

### Renommer vos Images WhatsApp
```bash
# Dans le dossier images/
Renommer :
WhatsApp Image 2026-07-06 at 14.41.57.jpeg → about-preview.jpg
WhatsApp Image 2026-07-06 at 14.41.58.jpeg → project-1.jpg
WhatsApp Image 2026-07-06 at 14.41.59.jpeg → team-meeting.jpg
(etc...)
```

## ⚙️ Paramètres des Animations

Dans `js/main.js`, modifier les paramètres AOS :

```javascript
AOS.init({
    duration: 1000,      // Durée en ms (1000 = 1 seconde)
    easing: 'ease-in-out', // Type d'animation
    once: true,          // Animation une seule fois ?
    mirror: false,       // Animation au scroll inverse ?
    offset: 100          // Décalage avant activation (px)
});
```

### Types d'Easing Disponibles
- `ease-in-out` - Fluide au début et à la fin
- `ease-in` - Lent au début, rapide à la fin
- `ease-out` - Rapide au début, lent à la fin
- `linear` - Vitesse constante

## 📱 Configurer Google Maps

Dans `pages/contact.html`, section map :

1. Obtenir votre code iframe Google Maps :
   - Aller sur Google Maps
   - Chercher votre adresse
   - Cliquer sur "Partager" > "Intégrer une carte"
   - Copier le code iframe

2. Remplacer l'iframe existant dans le HTML

## ✉️ Configurer le Formulaire de Contact

### Option 1 : Formspree (Gratuit)
1. Créer un compte sur https://formspree.io
2. Créer un nouveau formulaire
3. Modifier l'action du formulaire :

```html
<form action="https://formspree.io/f/VOTRE_ID" method="POST">
```

### Option 2 : Backend PHP (nécessite serveur)
Créer un fichier `contact.php` :

```php
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);
    
    $to = "contact@atc.com";
    $subject = "Nouveau message depuis le site";
    $body = "Nom: $name\nEmail: $email\n\nMessage:\n$message";
    
    mail($to, $subject, $body);
    
    header("Location: thank-you.html");
    exit();
}
?>
```

## 🚀 Hébergement et Mise en Ligne

### Hébergeurs Recommandés
1. **Netlify** (Gratuit) - https://netlify.com
2. **Vercel** (Gratuit) - https://vercel.com
3. **GitHub Pages** (Gratuit) - https://pages.github.com
4. **OVH** (Payant) - https://ovh.com

### Déploiement sur Netlify (Simple)
1. Créer un compte Netlify
2. Glisser-déposer le dossier `ATC/`
3. Votre site est en ligne !

## 🔧 Optimisations Supplémentaires

### Optimiser les Images
Avant la mise en ligne, compresser toutes les images avec :
- TinyPNG : https://tinypng.com
- Squoosh : https://squoosh.app

### Activer HTTPS
Si hébergement propre :
- Utiliser Let's Encrypt (gratuit)
- Ou certificat SSL de votre hébergeur

### SEO Basique
Dans chaque page HTML, personnaliser :

```html
<meta name="description" content="Votre description unique">
<title>Votre Titre - ATC</title>
```

### Performance
1. Minifier CSS et JS avant production
2. Utiliser un CDN pour les bibliothèques
3. Activer la mise en cache navigateur

## 📞 Support
Pour toute question technique, référez-vous au README.md ou contactez le développeur.

## ✅ Checklist Avant Mise en Ligne

- [ ] Remplacer toutes les images placeholder
- [ ] Modifier les coordonnées de contact
- [ ] Personnaliser les couleurs si nécessaire
- [ ] Configurer le formulaire de contact
- [ ] Ajouter les liens réseaux sociaux
- [ ] Optimiser toutes les images
- [ ] Tester sur mobile, tablette, desktop
- [ ] Vérifier tous les liens
- [ ] Configurer Google Maps
- [ ] Tester le formulaire de contact
- [ ] Ajouter Google Analytics (optionnel)

---

Bon courage pour la personnalisation ! 🚀
