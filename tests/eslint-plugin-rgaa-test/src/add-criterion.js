#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);

if (args.length === 0 || args.includes('--help') || args.includes('-h')) {
  console.log(`
Usage: node add-criterion.js <criterion>

Ajoute un nouveau critère RGAA avec la structure de tests appropriée.

Arguments:
  criterion    Le numéro du critère (ex: 1.2, 2.1, etc.)

Examples:
  node add-criterion.js 1.2    # Ajoute le critère 1.2
  node add-criterion.js 2.1    # Ajoute le critère 2.1
`);
  process.exit(0);
}

const criterion = args[0];

// Validation du format du critère
if (!/^\d+\.\d+$/.test(criterion)) {
  console.error('❌ Format de critère invalide. Utilisez le format X.Y (ex: 1.2)');
  process.exit(1);
}

const criterionPath = path.join(__dirname, 'criteria', criterion);

// Vérifier si le critère existe déjà
if (fs.existsSync(criterionPath)) {
  console.error(`❌ Le critère ${criterion} existe déjà`);
  process.exit(1);
}

console.log(`📁 Création du critère RGAA ${criterion}...`);

// Créer la structure de dossiers
fs.mkdirSync(criterionPath, { recursive: true });
fs.mkdirSync(path.join(criterionPath, 'valid'), { recursive: true });
fs.mkdirSync(path.join(criterionPath, 'invalid'), { recursive: true });

// Créer le README à partir du template
const templatePath = path.join(__dirname, 'templates', 'criterion-template.md');
const readmePath = path.join(criterionPath, 'README.md');

if (fs.existsSync(templatePath)) {
  let template = fs.readFileSync(templatePath, 'utf8');
  template = template.replace(/X\.Y/g, criterion);
  template = template.replace(/X-Y/g, criterion.replace('.', '-'));
  fs.writeFileSync(readmePath, template);
  console.log(`✅ README.md créé`);
} else {
  // Créer un README basique si le template n'existe pas
  const basicReadme = `# Critère RGAA ${criterion}

## Description

[Description du critère RGAA]

## Règle ESLint

\`rgaa-html/rgaa-${criterion.replace('.', '-')}\`

## Cas de test

### Cas valides (valid/)

### Cas invalides (invalid/)

## Messages d'erreur
`;
  fs.writeFileSync(readmePath, basicReadme);
  console.log(`✅ README.md créé (template basique)`);
}

// Créer des fichiers d'exemple
const validExample = `import React from 'react';

function ValidExample() {
  return (
    <div>
      {/* Exemple valide pour le critère ${criterion} */}
    </div>
  );
}

export default ValidExample;
`;

const invalidExample = `import React from 'react';

function InvalidExample() {
  return (
    <div>
      {/* Exemple invalide pour le critère ${criterion} */}
    </div>
  );
}

export default InvalidExample;
`;

fs.writeFileSync(path.join(criterionPath, 'valid', 'example.jsx'), validExample);
fs.writeFileSync(path.join(criterionPath, 'invalid', 'example.jsx'), invalidExample);

console.log(`✅ Fichiers d'exemple créés`);
console.log(`✅ Critère ${criterion} créé avec succès !`);
console.log(`\n📝 Prochaines étapes:`);
console.log(`   1. Éditer tests/criteria/${criterion}/README.md`);
console.log(`   2. Ajouter vos cas de test dans valid/ et invalid/`);
console.log(`   3. Ajouter la règle dans tests/utils/eslint-config.js`);
console.log(`   4. Tester avec: npm run test:criterion ${criterion}`);
