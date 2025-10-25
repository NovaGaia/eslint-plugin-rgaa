# Tests du plugin ESLint RGAA

Ce dossier contient tous les tests du plugin ESLint RGAA, organisés par critère.

## Structure

```
tests/
├── README.md                 # Ce fichier
├── run-tests.js             # Script principal pour exécuter tous les tests
├── utils/                   # Utilitaires de test partagés
│   ├── test-runner.js       # Classe pour exécuter les tests
│   └── eslint-config.js     # Configuration ESLint pour les tests
└── criteria/                # Tests par critère RGAA
    ├── 1.1/                 # Critère 1.1 - Images porteuses d'information
    │   ├── valid/           # Cas valides (ne doivent pas générer d'erreurs)
    │   ├── invalid/         # Cas invalides (doivent générer des erreurs)
    │   └── README.md        # Documentation du critère 1.1
    └── ...                  # Autres critères à venir
```

## Exécution des tests

```bash
# Exécuter tous les tests
npm run test

# Exécuter les tests d'un critère spécifique
node tests/run-tests.js --criterion 1.1

# Exécuter les tests en mode verbose
node tests/run-tests.js --verbose
```

## Ajout d'un nouveau critère

1. Créer le dossier `tests/criteria/X.Y/`
2. Créer les sous-dossiers `valid/` et `invalid/`
3. Ajouter les fichiers de test
4. Mettre à jour `tests/run-tests.js` si nécessaire
