# Correction de l'alternance Image/Description - Page Réalisations

## Date : 7 juillet 2026

## 🐛 Problème identifié

L'alternance Image/Description sur la page réalisations ne fonctionnait pas correctement. Les éléments ne s'inversaient pas malgré la classe `.reverse`.

### Cause :
L'utilisation de `direction: rtl` (right-to-left) pour inverser l'ordre des éléments ne fonctionne pas de manière fiable avec CSS Grid dans tous les navigateurs.

```css
/* ❌ ANCIEN CODE (ne fonctionnait pas) */
.realisation-item.reverse {
    direction: rtl;
}

.realisation-item.reverse > * {
    direction: ltr;
}
```

---

## ✅ Solution appliquée

Utilisation de la propriété CSS `order` avec CSS Grid, qui est la méthode standard et fiable pour réorganiser les éléments.

```css
/* ✅ NOUVEAU CODE (fonctionne parfaitement) */

/* Normal : Image à gauche (order: 1), Contenu à droite (order: 2) */
.realisation-item .realisation-image {
    order: 1;
}

.realisation-item .realisation-content {
    order: 2;
}

/* Reverse : Contenu à gauche (order: 1), Image à droite (order: 2) */
.realisation-item.reverse .realisation-content {
    order: 1;
}

.realisation-item.reverse .realisation-image {
    order: 2;
}
```

---

## 📐 Résultat visuel

### Section 1 (sans .reverse)
```
┌─────────────┐   ┌─────────┐
│ IMAGE       │   │ DESCRI- │
│ (gauche)    │   │ PTION   │
└─────────────┘   └─────────┘
```

### Section 2 (avec .reverse)
```
┌─────────────┐   ┌─────────┐
│ DESCRI-     │   │ IMAGE   │
│ PTION       │   │ (droite)│
└─────────────┘   └─────────┘
```

### Section 3 (sans .reverse)
```
┌─────────────┐   ┌─────────┐
│ IMAGE       │   │ DESCRI- │
│ (gauche)    │   │ PTION   │
└─────────────┘   └─────────┘
```

---

## 🎯 Affichage final sur la page

### Réalisation 1 : **Charpente métallique**
- IMAGE (gauche) | DESCRIPTION (droite)

### Réalisation 2 : **Soudure industrielle**
- DESCRIPTION (gauche) | IMAGE (droite)

### Réalisation 3 : **Carrosserie métallique**
- IMAGE (gauche) | DESCRIPTION (droite)

### Réalisation 4 : **Hangar métallique**
- DESCRIPTION (gauche) | IMAGE (droite)

### Réalisation 5 : **Équipements industriels**
- IMAGE (gauche) | DESCRIPTION (droite)

---

## 📱 Responsive Design

### Desktop (>768px)
- Alternance image/texte fonctionne comme prévu
- Grille 2 colonnes

### Mobile (<768px)
- Une seule colonne
- Image toujours en haut
- Description toujours en bas
- Order réinitialisé pour cohérence mobile

```css
@media (max-width: 768px) {
    .realisation-item .realisation-image,
    .realisation-item.reverse .realisation-image {
        order: 1; /* Image en haut */
    }
    
    .realisation-item .realisation-content,
    .realisation-item.reverse .realisation-content {
        order: 2; /* Description en bas */
    }
}
```

---

## 💡 Avantages de la nouvelle méthode

✅ **Compatible** : Fonctionne sur tous les navigateurs modernes
✅ **Fiable** : Méthode standard CSS Grid
✅ **Simple** : Code plus clair et maintenable
✅ **Performant** : Pas de hack avec direction RTL
✅ **Responsive** : Contrôle précis sur mobile

---

## 📝 Fichier modifié

**Fichier :** `css/style.css`

**Section :** REALISATIONS PAGE - ALTERNATING LAYOUT

**Lignes modifiées :** Remplacement complet de la logique d'alternance

---

## 🎉 Résultat

L'alternance image/description fonctionne maintenant **parfaitement** :
- ✅ Ligne 1 : Image gauche, Description droite
- ✅ Ligne 2 : Description gauche, Image droite
- ✅ Ligne 3 : Image gauche, Description droite
- ✅ Ligne 4 : Description gauche, Image droite
- ✅ Ligne 5 : Image gauche, Description droite

**La page est maintenant prête et l'alternance fonctionne comme demandé !** 🚀
