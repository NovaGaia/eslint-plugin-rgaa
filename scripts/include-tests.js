#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

/**
 * Script pour inclure les tests dans les pages des critères RGAA
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

function extractContentAfterFrontmatter(content) {
  const frontmatterMatch = content.match(/^(---\n[\s\S]*?\n---)/);
  if (frontmatterMatch) {
    return content.substring(frontmatterMatch[1].length).trim();
  }
  return content.trim();
}

function getTestsForCriterion(criterionPath) {
  const testsDir = path.join(criterionPath, 'tests');
  
  if (!fs.existsSync(testsDir)) {
    return [];
  }
  
  const testFiles = fs.readdirSync(testsDir)
    .filter(file => file.endsWith('.md'))
    .sort((a, b) => {
      const numA = parseInt(a.replace('.md', ''));
      const numB = parseInt(b.replace('.md', ''));
      return numA - numB;
    });
  
  const tests = [];
  
  for (const testFile of testFiles) {
    const testPath = path.join(testsDir, testFile);
    try {
      const content = fs.readFileSync(testPath, 'utf8');
      const title = extractTitleFromFrontmatter(content);
      const testContent = extractContentAfterFrontmatter(content);
      
      if (title && testContent) {
        tests.push({
          file: testFile,
          title: title,
          content: testContent
        });
      }
    } catch (error) {
      console.error(`Erreur lors de la lecture de ${testPath}:`, error.message);
    }
  }
  
  return tests;
}

function formatTestsSection(tests) {
  if (tests.length === 0) {
    return '';
  }
  
  let section = '\n\n## Tests\n\n';
  
  tests.forEach((test, index) => {
    section += `### Test ${index + 1}\n\n`;
    section += `**${test.title}**\n\n`;
    section += `${test.content}\n\n`;
  });
  
  return section;
}

function processCriterion(criterionPath) {
  const indexPath = path.join(criterionPath, 'index.md');
  
  if (!fs.existsSync(indexPath)) {
    console.log(`⚠️  Fichier index.md non trouvé dans ${criterionPath}`);
    return false;
  }
  
  try {
    const content = fs.readFileSync(indexPath, 'utf8');
    const tests = getTestsForCriterion(criterionPath);
    
    if (tests.length === 0) {
      console.log(`ℹ️  Aucun test trouvé pour ${path.basename(criterionPath)}`);
      return false;
    }
    
    // Vérifier si les tests sont déjà inclus
    if (content.includes('## Tests')) {
      console.log(`ℹ️  Tests déjà inclus pour ${path.basename(criterionPath)}`);
      return false;
    }
    
    const testsSection = formatTestsSection(tests);
    const newContent = content + testsSection;
    
    fs.writeFileSync(indexPath, newContent, 'utf8');
    console.log(`✅ Tests ajoutés: ${path.basename(criterionPath)} (${tests.length} tests)`);
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
  
  console.log('🔍 Recherche des critères avec tests...');
  
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

module.exports = { processCriterion, getTestsForCriterion, formatTestsSection };
