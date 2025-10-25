#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Script pour intégrer le contenu des tests et annexes dans les pages de critères
 * Lit les fichiers de tests et d'annexes depuis le backup et les intègre dans les pages migrées
 */

const sourceDir = 'doc-backup-20251025-154900/rgaa/criteres';
const targetDir = 'doc/rgaa/criteres';

// Mapping des critères vers leurs dossiers thématiques
const THEMATIC_MAPPING = {
  '1.1': '1-images/1.1',
  '1.2': '1-images/1.2', 
  '1.3': '1-images/1.3',
  '1.4': '1-images/1.4',
  '1.5': '1-images/1.5',
  '1.6': '1-images/1.6',
  '1.7': '1-images/1.7',
  '1.8': '1-images/1.8',
  '1.9': '1-images/1.9',
  '2.1': '2-cadres/2.1',
  '2.2': '2-cadres/2.2',
  '3.1': '3-couleurs/3.1',
  '3.2': '3-couleurs/3.2',
  '3.3': '3-couleurs/3.3',
  '4.1': '4-multimedia/4.1',
  '4.2': '4-multimedia/4.2',
  '4.3': '4-multimedia/4.3',
  '4.4': '4-multimedia/4.4',
  '4.5': '4-multimedia/4.5',
  '4.6': '4-multimedia/4.6',
  '4.7': '4-multimedia/4.7',
  '4.8': '4-multimedia/4.8',
  '4.9': '4-multimedia/4.9',
  '4.10': '4-multimedia/4.10',
  '4.11': '4-multimedia/4.11',
  '4.12': '4-multimedia/4.12',
  '4.13': '4-multimedia/4.13',
  '5.1': '5-tableaux/5.1',
  '5.2': '5-tableaux/5.2',
  '5.3': '5-tableaux/5.3',
  '5.4': '5-tableaux/5.4',
  '5.5': '5-tableaux/5.5',
  '5.6': '5-tableaux/5.6',
  '5.7': '5-tableaux/5.7',
  '5.8': '5-tableaux/5.8',
  '6.1': '6-liens/6.1',
  '6.2': '6-liens/6.2',
  '7.1': '7-scripts/7.1',
  '7.2': '7-scripts/7.2',
  '7.3': '7-scripts/7.3',
  '7.4': '7-scripts/7.4',
  '7.5': '7-scripts/7.5',
  '8.1': '8-elements-obligatoires/8.1',
  '8.2': '8-elements-obligatoires/8.2',
  '8.3': '8-elements-obligatoires/8.3',
  '8.4': '8-elements-obligatoires/8.4',
  '8.5': '8-elements-obligatoires/8.5',
  '8.6': '8-elements-obligatoires/8.6',
  '8.7': '8-elements-obligatoires/8.7',
  '8.8': '8-elements-obligatoires/8.8',
  '8.9': '8-elements-obligatoires/8.9',
  '8.10': '8-elements-obligatoires/8.10',
  '9.1': '9-structure/9.1',
  '9.2': '9-structure/9.2',
  '9.3': '9-structure/9.3',
  '9.4': '9-structure/9.4',
  '10.1': '10-presentation/10.1',
  '10.2': '10-presentation/10.2',
  '10.3': '10-presentation/10.3',
  '10.4': '10-presentation/10.4',
  '10.5': '10-presentation/10.5',
  '10.6': '10-presentation/10.6',
  '10.7': '10-presentation/10.7',
  '10.8': '10-presentation/10.8',
  '10.9': '10-presentation/10.9',
  '10.10': '10-presentation/10.10',
  '10.11': '10-presentation/10.11',
  '10.12': '10-presentation/10.12',
  '10.13': '10-presentation/10.13',
  '10.14': '10-presentation/10.14',
  '11.1': '11-formulaires/11.1',
  '11.2': '11-formulaires/11.2',
  '11.3': '11-formulaires/11.3',
  '11.4': '11-formulaires/11.4',
  '11.5': '11-formulaires/11.5',
  '11.6': '11-formulaires/11.6',
  '11.7': '11-formulaires/11.7',
  '11.8': '11-formulaires/11.8',
  '11.9': '11-formulaires/11.9',
  '11.10': '11-formulaires/11.10',
  '11.11': '11-formulaires/11.11',
  '11.12': '11-formulaires/11.12',
  '11.13': '11-formulaires/11.13',
  '12.1': '12-navigation/12.1',
  '12.2': '12-navigation/12.2',
  '12.3': '12-navigation/12.3',
  '12.4': '12-navigation/12.4',
  '12.5': '12-navigation/12.5',
  '12.6': '12-navigation/12.6',
  '12.7': '12-navigation/12.7',
  '12.8': '12-navigation/12.8',
  '12.9': '12-navigation/12.9',
  '12.10': '12-navigation/12.10',
  '12.11': '12-navigation/12.11',
  '13.1': '13-consultation/13.1',
  '13.2': '13-consultation/13.2',
  '13.3': '13-consultation/13.3',
  '13.4': '13-consultation/13.4',
  '13.5': '13-consultation/13.5',
  '13.6': '13-consultation/13.6',
  '13.7': '13-consultation/13.7',
  '13.8': '13-consultation/13.8',
  '13.9': '13-consultation/13.9',
  '13.10': '13-consultation/13.10',
  '13.11': '13-consultation/13.11',
  '13.12': '13-consultation/13.12'
};

function readFileContent(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch (error) {
    return null;
  }
}

function extractTitleFromFrontmatter(content) {
  const match = content.match(/^---\s*\n(.*?)\n---/s);
  if (match) {
    const frontmatter = match[1];
    const titleMatch = frontmatter.match(/^title:\s*(.+)$/m);
    if (titleMatch) {
      return titleMatch[1].trim();
    }
  }
  return null;
}

function extractContentAfterFrontmatter(content) {
  const match = content.match(/^---\s*\n.*?\n---\s*\n(.*)/s);
  return match ? match[1].trim() : content;
}

function integrateCriterion(criterion) {
  const sourcePath = path.join(sourceDir, THEMATIC_MAPPING[criterion]);
  const targetPath = path.join(targetDir, THEMATIC_MAPPING[criterion]);
  
  console.log(`🔄 Intégration: ${criterion}...`);
  
  // Lire le fichier index du backup (contenu complet)
  const sourceIndexPath = path.join(sourcePath, 'index.md');
  const sourceContent = readFileContent(sourceIndexPath);
  
  if (!sourceContent) {
    console.log(`❌ Fichier source non trouvé: ${sourceIndexPath}`);
    return false;
  }
  
  // Extraire le titre et le contenu
  const title = extractTitleFromFrontmatter(sourceContent);
  const content = extractContentAfterFrontmatter(sourceContent);
  
  if (!title) {
    console.log(`❌ Impossible d'extraire le titre pour ${criterion}`);
    return false;
  }
  
  // Construire le nouveau contenu avec le frontmatter corrigé
  const newContent = `---
title: ${title}
---

${content}`;
  
  // Écrire le fichier intégré
  const targetIndexPath = path.join(targetPath, 'index.md');
  fs.writeFileSync(targetIndexPath, newContent, 'utf8');
  
  console.log(`✅ Contenu intégré: ${criterion}`);
  return true;
}

function main() {
  console.log('🔄 Début de l\'intégration du contenu...');
  
  let integrated = 0;
  let errors = 0;
  
  // Intégrer chaque critère
  for (const criterion of Object.keys(THEMATIC_MAPPING)) {
    try {
      if (integrateCriterion(criterion)) {
        integrated++;
      } else {
        errors++;
      }
    } catch (error) {
      console.log(`❌ Erreur pour ${criterion}: ${error.message}`);
      errors++;
    }
  }
  
  console.log('\n📊 Résumé de l\'intégration:');
  console.log(`✅ Critères intégrés: ${integrated}`);
  console.log(`❌ Erreurs: ${errors}`);
  console.log(`📁 Total: ${Object.keys(THEMATIC_MAPPING).length}`);
  
  if (integrated > 0) {
    console.log('\n🎉 Intégration terminée !');
  }
}

if (require.main === module) {
  main();
}

module.exports = { integrateCriterion, main };
