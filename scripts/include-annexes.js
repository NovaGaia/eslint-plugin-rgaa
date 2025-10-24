#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

/**
 * Script pour inclure les annexes (WCAG et techniques) dans les pages des critères RGAA
 */

function extractAnnexeData(content) {
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
  if (!frontmatterMatch) return null;
  
  try {
    const frontmatter = yaml.load(frontmatterMatch[1]);
    return frontmatter;
  } catch (error) {
    console.error('Erreur lors du parsing YAML:', error.message);
    return null;
  }
}

function formatWCAGSection(wcagData) {
  if (!wcagData || !Array.isArray(wcagData)) {
    return '';
  }
  
  let section = '\n\n## Références WCAG\n\n';
  
  wcagData.forEach((criterion, index) => {
    section += `### Critère WCAG ${criterion.successCriterion}\n\n`;
    section += `**${criterion.title}** (Niveau ${criterion.level})\n\n`;
  });
  
  return section;
}

function formatTechniquesSection(techniques) {
  if (!techniques || !Array.isArray(techniques)) {
    return '';
  }
  
  let section = '\n\n## Techniques\n\n';
  
  section += 'Les techniques suivantes peuvent être utilisées pour implémenter ce critère :\n\n';
  
  techniques.forEach((technique, index) => {
    section += `- **${technique}** : [Technique ${technique}](https://www.w3.org/WAI/WCAG21/Techniques/html/${technique})\n`;
  });
  
  return section;
}

function formatAnnexeSection(annexeData) {
  if (!annexeData) {
    return '';
  }
  
  let section = '';
  
  // Section WCAG
  if (annexeData.WCAG) {
    section += formatWCAGSection(annexeData.WCAG);
  }
  
  // Section Techniques
  if (annexeData.Techniques) {
    section += formatTechniquesSection(annexeData.Techniques);
  }
  
  return section;
}

function processCriterion(criterionPath) {
  const indexPath = path.join(criterionPath, 'index.md');
  const annexePath = path.join(criterionPath, 'annexe.md');
  
  if (!fs.existsSync(indexPath)) {
    console.log(`⚠️  Fichier index.md non trouvé dans ${criterionPath}`);
    return false;
  }
  
  if (!fs.existsSync(annexePath)) {
    console.log(`ℹ️  Aucune annexe trouvée pour ${path.basename(criterionPath)}`);
    return false;
  }
  
  try {
    const content = fs.readFileSync(indexPath, 'utf8');
    const annexeContent = fs.readFileSync(annexePath, 'utf8');
    const annexeData = extractAnnexeData(annexeContent);
    
    if (!annexeData) {
      console.log(`⚠️  Impossible de parser l'annexe pour ${path.basename(criterionPath)}`);
      return false;
    }
    
    // Vérifier si l'annexe est déjà incluse
    if (content.includes('## Références WCAG') || content.includes('## Techniques')) {
      console.log(`ℹ️  Annexe déjà incluse pour ${path.basename(criterionPath)}`);
      return false;
    }
    
    const annexeSection = formatAnnexeSection(annexeData);
    
    if (!annexeSection) {
      console.log(`ℹ️  Aucune donnée WCAG/Techniques trouvée pour ${path.basename(criterionPath)}`);
      return false;
    }
    
    const newContent = content + annexeSection;
    
    fs.writeFileSync(indexPath, newContent, 'utf8');
    console.log(`✅ Annexe ajoutée: ${path.basename(criterionPath)}`);
    return true;
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
  
  console.log('🔍 Recherche des critères avec annexes...');
  
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

module.exports = { processCriterion, formatAnnexeSection, extractAnnexeData };
