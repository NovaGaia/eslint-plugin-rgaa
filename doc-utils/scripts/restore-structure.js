#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Script pour restaurer l'ancienne structure de documentation
 * 
 * Nouvelle structure: doc/rgaa/criteres/1-images/1.1/
 * Ancienne structure: doc/rgaa/criteres/1.1/
 * 
 * Utile pour revenir en arrière si nécessaire
 */

// Mapping inverse des nouveaux dossiers vers les anciens dossiers
const THEMATIC_MAPPING = {
  '1.1': '1-images',
  '1.2': '1-images', 
  '1.3': '1-images',
  '1.4': '1-images',
  '1.5': '1-images',
  '1.6': '1-images',
  '1.7': '1-images',
  '1.8': '1-images',
  '1.9': '1-images',
  '2.1': '2-cadres',
  '2.2': '2-cadres',
  '3.1': '3-couleurs',
  '3.2': '3-couleurs',
  '3.3': '3-couleurs',
  '4.1': '4-multimedia',
  '4.2': '4-multimedia',
  '4.3': '4-multimedia',
  '4.4': '4-multimedia',
  '4.5': '4-multimedia',
  '4.6': '4-multimedia',
  '4.7': '4-multimedia',
  '4.8': '4-multimedia',
  '4.9': '4-multimedia',
  '4.10': '4-multimedia',
  '4.11': '4-multimedia',
  '4.12': '4-multimedia',
  '4.13': '4-multimedia',
  '5.1': '5-tableaux',
  '5.2': '5-tableaux',
  '5.3': '5-tableaux',
  '5.4': '5-tableaux',
  '5.5': '5-tableaux',
  '5.6': '5-tableaux',
  '5.7': '5-tableaux',
  '5.8': '5-tableaux',
  '6.1': '6-liens',
  '6.2': '6-liens',
  '7.1': '7-scripts',
  '7.2': '7-scripts',
  '7.3': '7-scripts',
  '7.4': '7-scripts',
  '7.5': '7-scripts',
  '8.1': '8-elements-obligatoires',
  '8.2': '8-elements-obligatoires',
  '8.3': '8-elements-obligatoires',
  '8.4': '8-elements-obligatoires',
  '8.5': '8-elements-obligatoires',
  '8.6': '8-elements-obligatoires',
  '8.7': '8-elements-obligatoires',
  '8.8': '8-elements-obligatoires',
  '8.9': '8-elements-obligatoires',
  '8.10': '8-elements-obligatoires',
  '9.1': '9-structure',
  '9.2': '9-structure',
  '9.3': '9-structure',
  '9.4': '9-structure',
  '10.1': '10-presentation',
  '10.2': '10-presentation',
  '10.3': '10-presentation',
  '10.4': '10-presentation',
  '10.5': '10-presentation',
  '10.6': '10-presentation',
  '10.7': '10-presentation',
  '10.8': '10-presentation',
  '10.9': '10-presentation',
  '10.10': '10-presentation',
  '10.11': '10-presentation',
  '10.12': '10-presentation',
  '10.13': '10-presentation',
  '10.14': '10-presentation',
  '11.1': '11-formulaires',
  '11.2': '11-formulaires',
  '11.3': '11-formulaires',
  '11.4': '11-formulaires',
  '11.5': '11-formulaires',
  '11.6': '11-formulaires',
  '11.7': '11-formulaires',
  '11.8': '11-formulaires',
  '11.9': '11-formulaires',
  '11.10': '11-formulaires',
  '11.11': '11-formulaires',
  '11.12': '11-formulaires',
  '11.13': '11-formulaires',
  '12.1': '12-navigation',
  '12.2': '12-navigation',
  '12.3': '12-navigation',
  '12.4': '12-navigation',
  '12.5': '12-navigation',
  '12.6': '12-navigation',
  '12.7': '12-navigation',
  '12.8': '12-navigation',
  '12.9': '12-navigation',
  '12.10': '12-navigation',
  '12.11': '12-navigation',
  '13.1': '13-consultation',
  '13.2': '13-consultation',
  '13.3': '13-consultation',
  '13.4': '13-consultation',
  '13.5': '13-consultation',
  '13.6': '13-consultation',
  '13.7': '13-consultation',
  '13.8': '13-consultation',
  '13.9': '13-consultation',
  '13.10': '13-consultation',
  '13.11': '13-consultation',
  '13.12': '13-consultation'
};

function restoreInternalLinks(content) {
  // Pattern pour capturer les liens vers le glossaire [texte](/rgaa/glossaire/terme)
  const linkPattern = /\[([^\]]+)\]\(\/rgaa\/glossaire\/([^)]+)\)/g;
  
  return content.replace(linkPattern, (match, text, term) => {
    // Convertir le terme en kebab-case pour le lien interne
    const kebabTerm = term.replace(/-/g, '-');
    return `[${text}](#${kebabTerm})`;
  });
}

function restoreCriterion(newPath, oldPath) {
  console.log(`🔄 Restauration: ${path.basename(newPath)} → ${path.relative(path.dirname(newPath), oldPath)}`);
  
  // Créer le dossier de destination s'il n'existe pas
  const oldDir = path.dirname(oldPath);
  if (!fs.existsSync(oldDir)) {
    fs.mkdirSync(oldDir, { recursive: true });
    console.log(`📁 Dossier créé: ${oldDir}`);
  }
  
  // Copier le dossier entier
  if (fs.existsSync(newPath)) {
    copyDirectory(newPath, oldPath);
    console.log(`✅ Dossier copié: ${newPath} → ${oldPath}`);
    
    // Traiter les fichiers markdown pour restaurer les liens internes
    processMarkdownFiles(oldPath);
    
    return true;
  }
  
  return false;
}

function copyDirectory(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  
  const items = fs.readdirSync(src);
  
  for (const item of items) {
    const srcPath = path.join(src, item);
    const destPath = path.join(dest, item);
    const stat = fs.statSync(srcPath);
    
    if (stat.isDirectory()) {
      copyDirectory(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function processMarkdownFiles(dir) {
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      processMarkdownFiles(fullPath);
    } else if (item.endsWith('.md')) {
      try {
        const content = fs.readFileSync(fullPath, 'utf8');
        const newContent = restoreInternalLinks(content);
        
        if (newContent !== content) {
          fs.writeFileSync(fullPath, newContent, 'utf8');
          console.log(`🔗 Liens restaurés: ${path.relative(process.cwd(), fullPath)}`);
        }
      } catch (error) {
        console.error(`❌ Erreur lors du traitement de ${fullPath}:`, error.message);
      }
    }
  }
}

function main() {
  const sourceDir = path.join(__dirname, '..', '..', 'doc', 'rgaa', 'criteres');
  const targetDir = path.join(__dirname, '..', '..', 'doc-restore', 'rgaa', 'criteres');
  
  if (!fs.existsSync(sourceDir)) {
    console.error('❌ Dossier source non trouvé:', sourceDir);
    process.exit(1);
  }
  
  console.log('🔄 Début de la restauration...');
  
  let restored = 0;
  let errors = 0;
  
  // Restaurer chaque critère
  for (const [criterion, thematic] of Object.entries(THEMATIC_MAPPING)) {
    const newPath = path.join(sourceDir, thematic, criterion);
    const oldPath = path.join(targetDir, criterion);
    
    try {
      if (restoreCriterion(newPath, oldPath)) {
        restored++;
      }
    } catch (error) {
      console.error(`❌ Erreur lors de la restauration de ${criterion}:`, error.message);
      errors++;
    }
  }
  
  console.log('\n📊 Résumé de la restauration:');
  console.log(`✅ Critères restaurés: ${restored}`);
  console.log(`❌ Erreurs: ${errors}`);
  console.log(`📁 Total: ${Object.keys(THEMATIC_MAPPING).length}`);
  
  if (restored > 0) {
    console.log('\n🎉 Restauration terminée !');
    console.log(`📁 Ancienne structure restaurée dans: ${targetDir}`);
  }
}

if (require.main === module) {
  main();
}

module.exports = { restoreCriterion, restoreInternalLinks };
