# Scripts de Documentation - ESLint Plugin RGAA

Ce dossier contient tous les scripts utilitaires pour gérer la documentation du projet ESLint Plugin RGAA.

## Installation

```bash
cd doc-utils
pnpm install
```

## Scripts Disponibles

### Migration de Structure
- `pnpm migrate` : Migre l'ancienne structure plate vers la nouvelle organisation thématique
- `pnpm restore` : Restaure l'ancienne structure plate
- `pnpm test-migration` : Teste le script de migration

### Traitement de Contenu
- `pnpm add-titles` : Ajoute des titres aux pages de critères
- `pnpm include-tests` : Intègre les tests dans les pages de critères
- `pnpm include-annexes` : Intègre les annexes dans les pages de critères
- `pnpm fix-links` : Corrige les liens WCAG
- `pnpm fix-internal-links` : Corrige les liens internes
- `pnpm add-titles-faq-glossaire` : Ajoute des titres aux pages FAQ et glossaire
- `pnpm setup` : Applique tous les traitements de documentation

### Intégration Complète
- `pnpm integrate-content` : Intègre le contenu complet des tests et annexes
- `pnpm validate-integration` : Valide que l'intégration est identique au backup

### VitePress (depuis la racine du projet)
- `pnpm docs:build` : Build de la documentation
- `pnpm docs:serve` : Serveur de développement
- `pnpm docs:watch` : Mode watch
- `pnpm docs:publish` : Publication sur GitHub Pages

## Workflow de Documentation

1. **Modifier** les fichiers dans `../doc-init/` (structure plate)
2. **Migrer** : `pnpm migrate` (vers structure thématique)
3. **Intégrer** : `pnpm integrate-content` (contenu complet)
4. **Valider** : `pnpm validate-integration` (vérification)
5. **Build** : `cd .. && pnpm docs:build` (génération VitePress)

## Notes Importantes

- Les scripts préservent les différences mineures (espaces en fin de ligne)
- La validation considère les différences d'espaces en fin de ligne comme acceptables
- Tous les scripts sont idempotents (peuvent être exécutés plusieurs fois)
- Les scripts créent automatiquement les dossiers nécessaires
