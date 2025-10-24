#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

/**
 * Script pour ajouter les titres des critères RGAA dans le corps des fichiers markdown
 */

function extractTitleFromFrontmatter(content) {
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
  if (!frontmatterMatch) return null;
  
  try {
    const frontmatter = yaml.load(frontmatterMatch[1]);
    return frontmatter.title;
  } catch (error) {
    console.error('Erreur lors du parsing YAML:', error.message);
    return null;
  }
}

function addTitleToContent(content, title) {
  if (!title) return content;
  
  // Vérifier si le titre est déjà présent dans le contenu
  if (content.includes(`# ${title}`)) {
    return content;
  }
  
  // Ajouter le titre après le frontmatter
  const frontmatterMatch = content.match(/^(---\n[\s\S]*?\n---)/);
  if (frontmatterMatch) {
    const frontmatter = frontmatterMatch[1];
    const restOfContent = content.substring(frontmatter.length);
    return `${frontmatter}\n\n# ${title}\n${restOfContent}`;
  }
  
  // Si pas de frontmatter, ajouter le titre au début
  return `# ${title}\n\n${content}`;
}

function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const title = extractTitleFromFrontmatter(content);
    
    if (!title) {
      console.log(`⚠️  Aucun titre trouvé dans ${filePath}`);
      return false;
    }
    
    const newContent = addTitleToContent(content, title);
    
    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`✅ Titre ajouté: ${path.basename(path.dirname(filePath))} - ${title}`);
      return true;
    } else {
      console.log(`ℹ️  Titre déjà présent: ${path.basename(path.dirname(filePath))}`);
      return false;
    }
  } catch (error) {
    console.error(`❌ Erreur lors du traitement de ${filePath}:`, error.message);
    return false;
  }
}

function main() {
  const criteresDir = path.join(__dirname, '..', 'doc', 'rgaa', 'criteres');
  
  if (!fs.existsSync(criteresDir)) {
    console.error('❌ Dossier criteres non trouvé:', criteresDir);
    process.exit(1);
  }
  
  console.log('🔍 Recherche des fichiers index.md...');
  
  const indexFiles = [];
  
  function findIndexFiles(dir) {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        findIndexFiles(fullPath);
      } else if (item === 'index.md') {
        indexFiles.push(fullPath);
      }
    }
  }
  
  findIndexFiles(criteresDir);
  
  console.log(`📁 ${indexFiles.length} fichiers index.md trouvés`);
  
  let processed = 0;
  let skipped = 0;
  let errors = 0;
  
  for (const filePath of indexFiles) {
    const result = processFile(filePath);
    if (result === true) {
      processed++;
    } else if (result === false) {
      if (fs.readFileSync(filePath, 'utf8').includes('#')) {
        skipped++;
      } else {
        errors++;
      }
    }
  }
  
  console.log('\n📊 Résumé:');
  console.log(`✅ Fichiers traités: ${processed}`);
  console.log(`ℹ️  Fichiers ignorés: ${skipped}`);
  console.log(`❌ Erreurs: ${errors}`);
  console.log(`📁 Total: ${indexFiles.length}`);
}

if (require.main === module) {
  main();
}

module.exports = { processFile, addTitleToContent, extractTitleFromFrontmatter };
