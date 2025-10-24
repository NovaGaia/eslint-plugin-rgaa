#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

/**
 * Script pour ajouter les titres des pages FAQ et glossaire dans le corps des fichiers markdown
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
      console.log(`✅ Titre ajouté: ${path.basename(filePath)} - ${title}`);
      return true;
    } else {
      console.log(`ℹ️  Titre déjà présent: ${path.basename(filePath)}`);
      return false;
    }
  } catch (error) {
    console.error(`❌ Erreur lors du traitement de ${filePath}:`, error.message);
    return false;
  }
}

function processDirectory(dirPath, dirName) {
  if (!fs.existsSync(dirPath)) {
    console.log(`⚠️  Dossier ${dirName} non trouvé: ${dirPath}`);
    return { processed: 0, skipped: 0, errors: 0 };
  }
  
  const files = fs.readdirSync(dirPath);
  const markdownFiles = files.filter(file => file.endsWith('.md'));
  
  console.log(`📁 ${markdownFiles.length} fichiers ${dirName} trouvés`);
  
  let processed = 0;
  let skipped = 0;
  let errors = 0;
  
  for (const file of markdownFiles) {
    const filePath = path.join(dirPath, file);
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
  
  return { processed, skipped, errors };
}

function main() {
  const docDir = path.join(__dirname, '..', 'doc', 'rgaa');
  
  if (!fs.existsSync(docDir)) {
    console.error('❌ Dossier doc/rgaa non trouvé:', docDir);
    process.exit(1);
  }
  
  console.log('🔍 Recherche des fichiers FAQ et glossaire...');
  
  const faqDir = path.join(docDir, 'faq');
  const glossaireDir = path.join(docDir, 'glossaire');
  
  let totalProcessed = 0;
  let totalSkipped = 0;
  let totalErrors = 0;
  
  // Traiter les fichiers FAQ
  console.log('\n📋 Traitement des fichiers FAQ...');
  const faqResults = processDirectory(faqDir, 'FAQ');
  totalProcessed += faqResults.processed;
  totalSkipped += faqResults.skipped;
  totalErrors += faqResults.errors;
  
  // Traiter les fichiers glossaire
  console.log('\n📚 Traitement des fichiers glossaire...');
  const glossaireResults = processDirectory(glossaireDir, 'glossaire');
  totalProcessed += glossaireResults.processed;
  totalSkipped += glossaireResults.skipped;
  totalErrors += glossaireResults.errors;
  
  console.log('\n📊 Résumé global:');
  console.log(`✅ Fichiers traités: ${totalProcessed}`);
  console.log(`ℹ️  Fichiers ignorés: ${totalSkipped}`);
  console.log(`❌ Erreurs: ${totalErrors}`);
  console.log(`📁 Total: ${totalProcessed + totalSkipped + totalErrors}`);
}

if (require.main === module) {
  main();
}

module.exports = { processFile, addTitleToContent, extractTitleFromFrontmatter };
