#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Script pour migrer l'ancienne structure de documentation vers la nouvelle
 * 
 * Ancienne structure: doc/rgaa/criteres/1.1/
 * Nouvelle structure: doc/rgaa/criteres/1-images/1.1/
 * 
 * Et met à jour les liens internes en même temps
 */

// Mapping des anciens dossiers vers les nouveaux dossiers thématiques
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

function getGlossaryFiles() {
  const glossaryDir = path.join(__dirname, '..', '..', 'doc', 'rgaa', 'glossaire');
  
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

function migrateCriterion(oldPath, newPath, glossaryMap) {
  console.log(`🔄 Migration: ${path.basename(oldPath)} → ${path.relative(path.dirname(oldPath), newPath)}`);
  
  // Créer le dossier de destination s'il n'existe pas
  const newDir = path.dirname(newPath);
  if (!fs.existsSync(newDir)) {
    fs.mkdirSync(newDir, { recursive: true });
    console.log(`📁 Dossier créé: ${newDir}`);
  }
  
  // Copier le dossier entier
  if (fs.existsSync(oldPath)) {
    copyDirectory(oldPath, newPath);
    console.log(`✅ Dossier copié: ${oldPath} → ${newPath}`);
    
    // Traiter les fichiers markdown pour corriger les liens
    processMarkdownFiles(newPath, glossaryMap);
    
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

function processMarkdownFiles(dir, glossaryMap) {
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      processMarkdownFiles(fullPath, glossaryMap);
    } else if (item.endsWith('.md')) {
      try {
        const content = fs.readFileSync(fullPath, 'utf8');
        const newContent = fixInternalLinks(content, glossaryMap);
        
        if (newContent !== content) {
          fs.writeFileSync(fullPath, newContent, 'utf8');
          console.log(`🔗 Liens corrigés: ${path.relative(process.cwd(), fullPath)}`);
        }
      } catch (error) {
        console.error(`❌ Erreur lors du traitement de ${fullPath}:`, error.message);
      }
    }
  }
}

function createThematicIndexFiles() {
  const thematicDirs = new Set(Object.values(THEMATIC_MAPPING));
  const criteresDir = path.join(__dirname, '..', '..', 'doc', 'rgaa', 'criteres');
  
  for (const thematicDir of thematicDirs) {
    const thematicPath = path.join(criteresDir, thematicDir);
    const indexPath = path.join(thematicPath, 'index.md');
    
    if (!fs.existsSync(indexPath)) {
      const title = thematicDir.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
      const content = `---
title: ${title}
---

# ${title}

Cette section contient les critères RGAA relatifs à ${thematicDir.replace(/-/g, ' ')}.

## Critères

<!-- Les critères seront listés automatiquement -->
`;
      
      fs.writeFileSync(indexPath, content, 'utf8');
      console.log(`📄 Fichier index créé: ${indexPath}`);
    }
  }
}

function main() {
  const sourceDir = path.join(__dirname, '..', '..', 'doc-init', 'rgaa', 'criteres');
  const targetDir = path.join(__dirname, '..', '..', 'doc', 'rgaa', 'criteres');
  
  if (!fs.existsSync(sourceDir)) {
    console.error('❌ Dossier source non trouvé:', sourceDir);
    process.exit(1);
  }
  
  console.log('🔍 Chargement du glossaire...');
  const glossaryMap = getGlossaryFiles();
  console.log(`📚 ${glossaryMap.size} termes trouvés dans le glossaire`);
  
  console.log('🔄 Début de la migration...');
  
  let migrated = 0;
  let errors = 0;
  
  // Migrer chaque critère
  for (const [criterion, thematic] of Object.entries(THEMATIC_MAPPING)) {
    const oldPath = path.join(sourceDir, criterion);
    const newPath = path.join(targetDir, thematic, criterion);
    
    try {
      if (migrateCriterion(oldPath, newPath, glossaryMap)) {
        migrated++;
      }
    } catch (error) {
      console.error(`❌ Erreur lors de la migration de ${criterion}:`, error.message);
      errors++;
    }
  }
  
  console.log('\n📊 Résumé de la migration:');
  console.log(`✅ Critères migrés: ${migrated}`);
  console.log(`❌ Erreurs: ${errors}`);
  console.log(`📁 Total: ${Object.keys(THEMATIC_MAPPING).length}`);
  
  // Créer les dossiers thématiques après la migration
  if (migrated > 0) {
    console.log('\n📄 Création des fichiers index thématiques...');
    createThematicIndexFiles();
  }
  
  if (migrated > 0) {
    console.log('\n🎉 Migration terminée !');
    console.log('💡 Vous pouvez maintenant lancer: pnpm docs:setup');
  }
}

if (require.main === module) {
  main();
}

module.exports = { migrateCriterion, fixInternalLinks, getGlossaryFiles };
