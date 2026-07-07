# Suppression de la partie Actualités

## Date : 7 juillet 2026

## Modifications effectuées

### ✅ Fichiers supprimés :
1. **`pages/actualites.html`** - Page complète des actualités

### ✅ Fichiers modifiés :

#### 1. `js/main.js`
**Changements :**
- ✅ Suppression du lien "Actualités" dans la navigation
- ✅ Suppression de toutes les traductions liées aux actualités (FR et EN)
  - `nav.news` (Actualités / News)
  - `page.news.title` (Actualités ATC / ATC news)
  - `page.news.subtitle` (descriptions)
  - `news.subtitle` (Actualités / News)
  - `news.title` (Dernières nouvelles / Latest updates)

**Menu de navigation mis à jour :**
```
Accueil → Services → Produits → Galerie → Réalisations → À propos → Contact → Demander un devis
```

#### 2. `index.html`
**Changements :**
- ✅ Suppression de la section "Actualités" de la page d'accueil
- ✅ Conservation de la section "Demande de devis" qui reste pleinement fonctionnelle

**Avant :** Section avec 2 colonnes (Actualités | Devis)
**Après :** Section avec 1 colonne (Devis uniquement)

## Impact

### Navigation
- Le menu principal ne contient plus de lien vers les actualités
- Navigation plus épurée et focalisée sur les services principaux

### Page d'accueil
- Section actualités retirée
- Focus renforcé sur les services, la galerie et le formulaire de devis
- Meilleure fluidité de navigation

### Maintenance
- Moins de contenu à maintenir
- Concentration sur les contenus essentiels (services, produits, réalisations)

## Pages conservées

✅ Toutes les autres pages restent intactes :
- Services (flexibles hydrauliques, solutions métalliques, charpentes)
- Produits
- Galerie (avec affichage en grille 4 colonnes max)
- Réalisations (avec affichage en grille 4 colonnes max)
- À propos
- Contact
- Devis

## Résumé

La partie actualités a été complètement supprimée du site :
- 1 fichier HTML supprimé
- 2 fichiers JS/HTML modifiés
- 8 clés de traduction retirées
- Navigation simplifiée
- Aucun impact sur les autres fonctionnalités

Le site reste pleinement fonctionnel et mieux organisé autour des services principaux de l'entreprise.
