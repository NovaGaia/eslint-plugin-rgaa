#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Script pour corriger les liens internes dans les pages des critères RGAA
 * pour qu'ils pointent vers les fichiers du glossaire
 */

function getGlossaryFiles() {
  const glossaryDir = path.join(__dirname, '..', 'doc', 'rgaa', 'glossaire');
  
  if (!fs.existsSync(glossaryDir)) {
    console.log('⚠️  Dossier glossaire non trouvé');
    return new Map();
  }
  
  const files = fs.readdirSync(glossaryDir);
  const glossaryMap = new Map();
  
  files.forEach(file => {
    if (file.endsWith('.md')) {
      const name = file.replace('.md', '');
      // Convertir les tirets en espaces et créer le pattern de recherche
      const searchPattern = name.replace(/-/g, ' ');
      glossaryMap.set(searchPattern, `/rgaa/glossaire/${name}`);
    }
  });
  
  return glossaryMap;
}

function convertToKebabCase(text) {
  return text
    .toLowerCase()
    .replace(/[àáâãäå]/g, 'a')
    .replace(/[èéêë]/g, 'e')
    .replace(/[ìíîï]/g, 'i')
    .replace(/[òóôõö]/g, 'o')
    .replace(/[ùúûü]/g, 'u')
    .replace(/[ç]/g, 'c')
    .replace(/[ñ]/g, 'n')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

function fixInternalLinks(content, glossaryMap) {
  // Pattern pour capturer les liens internes [texte](#lien)
  const linkPattern = /\[([^\]]+)\]\(#([^)]+)\)/g;
  
  return content.replace(linkPattern, (match, text, link) => {
    // Convertir le lien en kebab-case pour correspondre aux noms de fichiers
    const kebabLink = convertToKebabCase(link);
    
    // Chercher dans le glossaire
    for (const [searchPattern, glossaryPath] of glossaryMap) {
      if (searchPattern === kebabLink.replace(/-/g, ' ')) {
        return `[${text}](${glossaryPath})`;
      }
    }
    
    // Si pas trouvé, garder le lien original
    return match;
  });
}

function processCriterion(criterionPath, glossaryMap) {
  const indexPath = path.join(criterionPath, 'index.md');
  
  if (!fs.existsSync(indexPath)) {
    console.log(`⚠️  Fichier index.md non trouvé dans ${criterionPath}`);
    return false;
  }
  
  try {
    const content = fs.readFileSync(indexPath, 'utf8');
    const newContent = fixInternalLinks(content, glossaryMap);
    
    if (newContent !== content) {
      fs.writeFileSync(indexPath, newContent, 'utf8');
      console.log(`✅ Liens internes corrigés: ${path.basename(criterionPath)}`);
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
  
  console.log('🔍 Chargement du glossaire...');
  const glossaryMap = getGlossaryFiles();
  console.log(`📚 ${glossaryMap.size} termes trouvés dans le glossaire`);
  
  console.log('🔍 Recherche des critères avec liens internes...');
  
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
    const result = processCriterion(criterionDir, glossaryMap);
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

module.exports = { processCriterion, fixInternalLinks, getGlossaryFiles };
