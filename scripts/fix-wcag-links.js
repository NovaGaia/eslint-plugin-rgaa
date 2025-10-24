#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Script pour corriger les liens WCAG dans les pages des critères RGAA
 */

function fixWCAGLinks(content) {
  // Remplacer les liens incorrects par les bons liens
  const oldPattern = /https:\/\/www\.w3\.org\/WAI\/WCAG21\/Techniques\/([A-Z0-9]+)/g;
  const newContent = content.replace(oldPattern, 'https://www.w3.org/WAI/WCAG21/Techniques/html/$1');
  
  return newContent;
}

function processCriterion(criterionPath) {
  const indexPath = path.join(criterionPath, 'index.md');
  
  if (!fs.existsSync(indexPath)) {
    console.log(`⚠️  Fichier index.md non trouvé dans ${criterionPath}`);
    return false;
  }
  
  try {
    const content = fs.readFileSync(indexPath, 'utf8');
    const newContent = fixWCAGLinks(content);
    
    if (newContent !== content) {
      fs.writeFileSync(indexPath, newContent, 'utf8');
      console.log(`✅ Liens WCAG corrigés: ${path.basename(criterionPath)}`);
      return true;
    } else {
      console.log(`ℹ️  Aucun lien à corriger: ${path.basename(criterionPath)}`);
      return false;
    }
  } catch (error) {
    console.error(`❌ Erreur lors du traitement de ${criterionPath}:`, error.message);
    return false;
  }
}

function main() {
  const criteresDir = path.join(__dirname, '..', 'doc', 'rgaa', 'criteres');
  
  if (!fs.existsSync(criteresDir)) {
    console.error('❌ Dossier criteres non trouvé:', criteresDir);
    process.exit(1);
  }
  
  console.log('🔍 Recherche des critères avec liens WCAG...');
  
  const criterionDirs = [];
  
  function findCriterionDirs(dir) {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        const indexPath = path.join(fullPath, 'index.md');
        if (fs.existsSync(indexPath)) {
          criterionDirs.push(fullPath);
        }
        findCriterionDirs(fullPath);
      }
    }
  }
  
  findCriterionDirs(criteresDir);
  
  console.log(`📁 ${criterionDirs.length} critères trouvés`);
  
  let processed = 0;
  let skipped = 0;
  let errors = 0;
  
  for (const criterionDir of criterionDirs) {
    const result = processCriterion(criterionDir);
    if (result === true) {
      processed++;
    } else if (result === false) {
      skipped++;
    } else {
      errors++;
    }
  }
  
  console.log('\n📊 Résumé:');
  console.log(`✅ Critères traités: ${processed}`);
  console.log(`ℹ️  Critères ignorés: ${skipped}`);
  console.log(`❌ Erreurs: ${errors}`);
  console.log(`📁 Total: ${criterionDirs.length}`);
}

if (require.main === module) {
  main();
}

module.exports = { processCriterion, fixWCAGLinks };
