# Tests RGAA

Ce workspace utilise la library `eslint-plugin-rgaa-test` pour exécuter les tests des règles RGAA.

## Utilisation

```bash
# Tous les tests
npm run test

# Tests en mode verbose
npm run test:verbose

# Test d'un critère spécifique
npm run test:criterion 1.1

# Ajouter un nouveau critère
npm run add-criterion 1.2
```

## Structure

Les tests sont organisés dans la library `eslint-plugin-rgaa-test` avec une structure par critère RGAA :

```
libs/eslint-plugin-rgaa-test/src/
├── criteria/                # Tests par critère RGAA
│   ├── 1.1/                # Critère 1.1 - Images porteuses d'information
│   │   ├── valid/          # Cas valides (ne doivent pas générer d'erreurs)
│   │   ├── invalid/        # Cas invalides (doivent générer des erreurs)
│   │   └── README.md       # Documentation du critère
│   └── ...                 # Autres critères
├── utils/                  # Utilitaires de test
└── run-tests.js           # Script principal de test
```

## Développement

Pour ajouter de nouveaux tests, utilisez la library `eslint-plugin-rgaa-test` directement ou via les scripts de ce workspace.