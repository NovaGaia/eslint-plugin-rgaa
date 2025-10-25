# Scripts de Documentation

Ce dossier contient les scripts pour gérer la documentation du projet ESLint Plugin RGAA.

## Scripts Disponibles

### Scripts de Migration

- **`migrate-structure.js`** : Migre la structure de documentation de l'ancienne organisation plate vers la nouvelle organisation thématique
- **`restore-structure.js`** : Restaure la structure de documentation de l'organisation thématique vers l'organisation plate
- **`test-migration.js`** : Teste le script de migration pour vérifier son bon fonctionnement

### Scripts d'Intégration

- **`integrate-content.js`** : Intègre le contenu complet des tests et annexes dans les pages de critères
- **`validate-integration.js`** : Valide que l'intégration du contenu est identique au backup

### Scripts de Traitement

- **`add-titles.js`** : Ajoute des titres aux pages de critères
- **`include-tests.js`** : Intègre les tests dans les pages de critères
- **`include-annexes.js`** : Intègre les annexes dans les pages de critères
- **`fix-wcag-links.js`** : Corrige les liens WCAG
- **`fix-internal-links.js`** : Corrige les liens internes
- **`add-titles-faq-glossaire.js`** : Ajoute des titres aux pages FAQ et glossaire

## Commandes NPM

```bash
# Migration de structure
pnpm docs:migrate          # Migre doc-init vers doc
pnpm docs:restore          # Restaure doc vers doc-restore
pnpm docs:test-migration   # Teste la migration

# Intégration de contenu
pnpm docs:integrate-content    # Intègre le contenu complet
pnpm docs:validate-integration # Valide l'intégration

# Traitement complet
pnpm docs:setup            # Exécute tous les scripts de traitement
```

## Utilisation

### Migration de Structure

1. **Préparer la source** : Placez les fichiers sources dans `doc-init/`
2. **Migrer** : `pnpm docs:migrate`
3. **Valider** : `pnpm docs:validate-integration`

### Intégration de Contenu

1. **Créer un backup** : `cp -r doc doc-backup-$(date +%Y%m%d-%H%M%S)`
2. **Intégrer** : `pnpm docs:integrate-content`
3. **Valider** : `pnpm docs:validate-integration`

## Notes Importantes

- Les scripts préservent les différences mineures (espaces en fin de ligne)
- La validation considère les différences d'espaces en fin de ligne comme acceptables
- Tous les scripts sont idempotents (peuvent être exécutés plusieurs fois)
- Les scripts créent automatiquement les dossiers nécessaires