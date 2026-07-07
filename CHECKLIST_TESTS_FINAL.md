# ✅ CHECKLIST DE TESTS FINALE - SITE ATC

## À tester avant mise en production

### 🌐 NAVIGATION GÉNÉRALE

#### Menu principal
- [ ] **Logo ATC** → Retour à l'accueil depuis toutes les pages
- [ ] **Accueil** → index.html
- [ ] **Services** → Dropdown avec 3 sous-menus
  - [ ] Flexibles hydrauliques
  - [ ] Solutions métalliques  
  - [ ] Charpentes métalliques
- [ ] **Produits** → pages/produits.html
- [ ] **Galerie** → pages/galerie.html (27 images)
- [ ] **Réalisations** → pages/realisations.html (alternance)
- [ ] **À propos** → pages/about.html
- [ ] **Contact** → pages/contact.html
- [ ] **Demander un devis** → pages/devis.html

#### Navigation mobile
- [ ] **Menu hamburger** fonctionne
- [ ] **Fermeture** en cliquant sur un lien
- [ ] **Sous-menus** accessibles sur mobile

---

### 📸 PAGE GALERIE (pages/galerie.html)

#### Affichage desktop
- [ ] **4 colonnes maximum** sur grand écran (>1280px)
- [ ] **3 colonnes** sur desktop (1024px-1280px)
- [ ] **2 colonnes** sur tablette (768px-1024px)
- [ ] **1 colonne** sur mobile (<768px)

#### Images et contenu
- [ ] **27 images** s'affichent correctement
- [ ] **Légendes** visibles en bas de chaque image
- [ ] **Effets de survol** : zoom + élévation
- [ ] **Images uniformes** : hauteur 300px

---

### 🏗️ PAGE RÉALISATIONS (pages/realisations.html)

#### Structure alternée
- [ ] **Ligne 1** : Image gauche | Description droite (Charpente métallique)
- [ ] **Ligne 2** : Description gauche | Image droite (Soudure industrielle)  
- [ ] **Ligne 3** : Image gauche | Description droite (Carrosserie métallique)
- [ ] **Ligne 4** : Description gauche | Image droite (Hangar métallique)
- [ ] **Ligne 5** : Image gauche | Description droite (Équipements industriels)

#### Contenu de chaque projet
- [ ] **Badge coloré** avec catégorie visible
- [ ] **Titre** du projet affiché
- [ ] **Description** complète lisible
- [ ] **4 points clés** avec icônes ✓
- [ ] **Métadonnées** : Lieu (Douala) + Année (2026)

#### Responsive
- [ ] **Desktop** : Alternance fonctionne
- [ ] **Mobile** : Image en haut, texte en bas (1 colonne)

---

### 📝 FORMULAIRES WHATSAPP

#### 1. Formulaire Contact (pages/contact.html)

**Tests de validation :**
- [ ] **Champs vides** → Bordures rouges + message d'erreur
- [ ] **Email invalide** → Erreur de validation
- [ ] **Tous champs valides** → Message de succès

**Test d'envoi WhatsApp :**
- [ ] Remplir : Nom, Email, Téléphone, Sujet, Message
- [ ] Cliquer "Envoyer"
- [ ] **WhatsApp s'ouvre** automatiquement
- [ ] **Message formaté** correctement avec émojis :
  ```
  *NOUVEAU MESSAGE DE CONTACT*
  
  📝 *Nom:* [Votre nom]
  📧 *Email:* [Votre email]
  📞 *Téléphone:* [Votre tel]
  📌 *Sujet:* [Sujet]
  
  💬 *Message:*
  [Votre message]
  ```
- [ ] **Numéro correct** : +237 682 82 82 26
- [ ] **Formulaire se vide** après 1 seconde

#### 2. Formulaire Devis (pages/devis.html)

**Tests de validation :**
- [ ] **Champs requis** vérifiés
- [ ] **Type de besoin** obligatoire

**Test d'envoi WhatsApp :**
- [ ] Remplir tous les champs
- [ ] **WhatsApp s'ouvre** avec message formaté :
  ```
  *NOUVELLE DEMANDE DE DEVIS*
  
  📝 *Nom:* [Nom]
  📧 *Email:* [Email]
  📞 *Téléphone:* [Tel]
  🏷️ *Type de besoin:* [Type sélectionné]
  
  📋 *Détails:*
  [Détails du projet]
  ```

#### 3. Devis Rapide (index.html - page d'accueil)

**Test d'envoi WhatsApp :**
- [ ] Remplir : Nom, Téléphone, Type, Détails
- [ ] **WhatsApp s'ouvre** avec message :
  ```
  *DEMANDE DE DEVIS RAPIDE*
  
  📝 *Nom:* [Nom]
  📞 *Téléphone:* [Tel]
  🏷️ *Type:* [Type de besoin]
  📋 *Détails:* [Détails]
  ```

---

### 🦶 FOOTER UNIFIÉ

#### Vérifier sur CHAQUE page (13 pages)

**Colonne 1 - À propos :**
- [ ] **Logo ATC** + slogan visible
- [ ] **Description** de l'entreprise
- [ ] **Lien WhatsApp** social fonctionnel

**Colonne 2 - Navigation :**
- [ ] Accueil → index.html
- [ ] À propos → about.html
- [ ] Services → services.html
- [ ] Réalisations → realisations.html
- [ ] Contact → contact.html

**Colonne 3 - Services :**
- [ ] Flexibles hydrauliques → flexibles-hydrauliques.html
- [ ] Solutions métalliques → solutions-metalliques.html  
- [ ] Charpentes métalliques → charpentes.html
- [ ] Demande de devis → devis.html

**Colonne 4 - Contact :**
- [ ] **Adresse** : B.P : 1239, Douala, Cameroun
- [ ] **Téléphone** : (+237) 682 82 82 26 (cliquable tel:)
- [ ] **Email** : atctourcam2@gmail.com (cliquable mailto:)
- [ ] **Mentions légales** → legal-notice.html
- [ ] **Confidentialité** → privacy.html

**Copyright :**
- [ ] "© 2026 ATC. Tous droits réservés."

---

### 🔗 ÉLÉMENTS FLOTTANTS

#### Bouton retour en haut
- [ ] **Apparaît** après scroll vers le bas
- [ ] **Disparaît** en haut de page  
- [ ] **Cliquable** et remonte en douceur
- [ ] **Visible** sur toutes les pages

#### Bouton WhatsApp flottant
- [ ] **Toujours visible** en bas à droite
- [ ] **Lien correct** : wa.me/237682828226
- [ ] **S'ouvre** dans nouvel onglet
- [ ] **Icône WhatsApp** visible
- [ ] **Présent** sur toutes les pages

---

### 🔤 ENCODAGE ET AFFICHAGE

#### Vérifier l'affichage correct des accents
- [ ] **Footer** : "À propos", "Réalisations", "métalliques" s'affichent bien
- [ ] **Navigation** : Pas de caractères bizarres (Ã©, Ã , etc.)
- [ ] **Contenu** : Texte français lisible partout

---

### 📱 RESPONSIVE DESIGN

#### Tester sur différentes tailles
- [ ] **Desktop** (>1280px) : 4 colonnes galerie, alternance réalisations
- [ ] **Laptop** (1024px-1280px) : 3 colonnes galerie
- [ ] **Tablette** (768px-1024px) : 2 colonnes galerie
- [ ] **Mobile** (<768px) : 1 colonne galerie, réalisations empilées

#### Menu mobile
- [ ] **Hamburger** visible et fonctionnel
- [ ] **Menu** s'ouvre/ferme correctement
- [ ] **Liens** accessibles et cliquables

---

### 🚀 PERFORMANCE

#### Temps de chargement
- [ ] **Images** se chargent rapidement
- [ ] **Animations** fluides
- [ ] **Navigation** réactive

#### Compatibilité navigateurs
- [ ] **Chrome** ✓
- [ ] **Firefox** ✓  
- [ ] **Safari** ✓
- [ ] **Edge** ✓

---

## 📋 CHECKLIST RAPIDE (5 minutes)

### Tests essentiels à faire absolument :

1. [ ] **Navigation** : Cliquer sur chaque lien du menu
2. [ ] **Galerie** : Vérifier les 27 images et la grille 4 colonnes
3. [ ] **Réalisations** : Vérifier l'alternance image ↔ texte sur 5 projets
4. [ ] **Formulaire contact** : Tester l'envoi WhatsApp
5. [ ] **Footer** : Vérifier sur 2-3 pages que c'est identique
6. [ ] **Mobile** : Tester le menu hamburger
7. [ ] **WhatsApp flottant** : Vérifier qu'il s'ouvre bien

---

## ⚠️ PROBLÈMES POTENTIELS À SURVEILLER

### Si quelque chose ne fonctionne pas :

**Navigation :**
- Vérifier les chemins relatifs (../ pour pages/, ./ pour index)

**Formulaires :**
- Vérifier que jQuery est chargé
- Vérifier la console JavaScript pour erreurs

**Images :**
- Vérifier les noms de fichiers (caractères spéciaux, espaces)
- Vérifier les chemins images/galerie/ et images/realisation/

**WhatsApp :**
- Vérifier le numéro +237682828226
- Tester sur différents appareils (desktop/mobile)

---

## ✅ VALIDATION FINALE

Une fois tous les tests OK :

- [ ] **Le site fonctionne** sur desktop et mobile
- [ ] **Les formulaires** envoient sur WhatsApp  
- [ ] **La galerie** affiche 27 images en grille
- [ ] **Les réalisations** alternent bien image/texte
- [ ] **Le footer** est identique partout
- [ ] **L'encodage** affiche correctement les accents
- [ ] **Navigation** fluide entre toutes les pages

**🎉 Site ATC prêt pour la mise en production !** 🚀