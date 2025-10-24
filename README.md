# eslint-plugin-rgaa

Le projet à pour but de créer un linter pour valider les critères du Référentiel Générale d'Amélioration de l'Accessibilité ou RGAA.

Ce répository est un monorepo qui utilise :
- Turbo pour le build et lancer les tests
- Changeset pour la génération et publication (depuis GitHub avec changeset-bot) des librairies dans NPM.

Le module principal est découpé en plusieurs librairies interdépendantes :
- une library `core` qui contient le code lint principale permettant résoudre les critères du RGAA et contenant des classes utilitaires permettant de factoriser le code (matcher des attibuts, des balises, etc.) et ne pas avoir de code redondants dans les classes des critères.
- une library linter pour appliquer les critères contenus par `core` au langage de base le `HTML`.
- Une ou plusieurs libraries qui enrichie le linter du `HTML` avec des balises spécifiques au langage comme `Image` ou `Picture` d'Astro.

Ce projet contient aussi une documentation sur le RGAA et sur ce linter. Elle permet notamment d'indiquer dans les erreurs ou alerte lint un lien vers cette documentation. Cette documentation sera générée par Retype et publier dans GitHub pages du repository.