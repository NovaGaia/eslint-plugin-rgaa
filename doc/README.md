# Documentation eslint-plugin-rgaa

Ce dossier contient la documentation complète du plugin ESLint pour la validation des critères RGAA.

## 📁 Structure

```
/rgaa/
├── .vitepress/
│   └── config.mjs          # Configuration VitePress
├── index.md                # Page d'accueil
├── guide.md                # Guide d'utilisation
├── contributing.md          # Guide de contribution
└── rgaa/                   # Documentation RGAA
    ├── index.md            # Vue d'ensemble RGAA
    ├── criteres/           # Critères RGAA (106 critères)
    │   ├── 1.1/
    │   │   ├── index.md    # Critère principal
    │   │   ├── annexe.md   # Références WCAG
    │   │   └── tests/      # Tests du critère
    │   └── ...
    ├── faq/                # Questions fréquentes
    └── glossaire/          # Glossaire (119 termes)
```

## 🚀 Démarrage rapide

### Prérequis
- Node.js 20+
- pnpm

### Installation
```bash
# Installer les dépendances
pnpm install

# Lancer le serveur de développement
pnpm run docs:serve
```

### Scripts disponibles

```bash
# Développement
pnpm run docs:serve          # Serveur de développement
pnpm run docs:watch          # Mode watch
pnpm run docs:build          # Build de production

# Traitement de la documentation RGAA
pnpm run docs:setup          # Script complet (recommandé)
pnpm run docs:add-titles     # Ajouter les titres
pnpm run docs:include-tests  # Inclure les tests
pnpm run docs:include-annexes # Inclure les annexes
pnpm run docs:fix-links      # Corriger les liens WCAG
pnpm run docs:fix-internal-links # Corriger les liens internes

# Publication
pnpm run docs:publish        # Publier sur GitHub Pages
```

## 🔄 Mise à jour de la documentation

### Processus automatique

1. **Placez les nouveaux fichiers** dans la structure appropriée
2. **Exécutez le script complet** :
   ```bash
   pnpm run docs:setup
   ```
3. **Testez la documentation** :
   ```bash
   pnpm run docs:serve
   ```
4. **Publiez** :
   ```bash
   pnpm run docs:publish
   ```

### Scripts individuels

Si vous devez traiter seulement certains aspects :

```bash
# Traitement sélectif
pnpm run docs:add-titles         # Titres seulement
pnpm run docs:include-tests      # Tests seulement
pnpm run docs:include-annexes   # Annexes seulement
pnpm run docs:fix-links          # Liens WCAG seulement
pnpm run docs:fix-internal-links # Liens internes seulement
```

## 📝 Structure des fichiers RGAA

### Critères
Chaque critère doit contenir :
- `index.md` : Critère principal avec frontmatter YAML
- `annexe.md` : Références WCAG et techniques
- `tests/` : Dossier avec les tests (1.md, 2.md, etc.)

### Glossaire
Les termes du glossaire sont des fichiers markdown avec :
- Frontmatter YAML contenant le titre
- Contenu de la définition
- Liens internes vers d'autres termes

### FAQ
Questions fréquentes organisées par thème.

## 🛠️ Développement

### Configuration VitePress

Le fichier `.vitepress/config.mjs` contient :
- Navigation principale
- Sidebar structurée
- Configuration du thème
- Liens sociaux
- Recherche locale

### Ajout de nouveaux critères

1. Créez le dossier du critère : `/rgaa/rgaa/criteres/X.Y/`
2. Ajoutez les fichiers : `index.md`, `annexe.md`, `tests/`
3. Exécutez : `pnpm run docs:setup`
4. Vérifiez avec : `pnpm run docs:serve`

### Ajout de nouveaux termes au glossaire

1. Créez le fichier : `/rgaa/rgaa/glossaire/terme.md`
2. Exécutez : `pnpm run docs:fix-internal-links`
3. Vérifiez les liens internes

## 🐛 Dépannage

### Problèmes courants

1. **Scripts échouent** : Vérifiez la structure des fichiers
2. **Liens cassés** : Relancez les scripts de correction
3. **Tests manquants** : Vérifiez les dossiers `tests/`
4. **Annexes manquantes** : Vérifiez les fichiers `annexe.md`

### Logs et débogage

Les scripts fournissent des logs détaillés :
- ✅ **Succès** : Fichiers traités avec succès
- ℹ️ **Info** : Fichiers ignorés (déjà traités ou sans contenu)
- ❌ **Erreur** : Problèmes rencontrés avec détails

## 📚 Ressources

- [Guide de contribution](contributing.md)
- [Configuration VitePress](https://vitepress.dev/)
- [RGAA Officiel](https://www.numerique.gouv.fr/publications/rgaa-accessibilite/)
- [WCAG 2.1](https://www.w3.org/WAI/WCAG21/quickref/)

## 🤝 Contribution

Pour contribuer à la documentation :

1. Lisez le [guide de contribution](contributing.md)
2. Suivez le processus de mise à jour décrit ci-dessus
3. Testez vos modifications avec `pnpm run docs:serve`
4. Soumettez une Pull Request

---

*Cette documentation est maintenue par la communauté eslint-plugin-rgaa pour faciliter l'implémentation des critères d'accessibilité dans vos projets web.*