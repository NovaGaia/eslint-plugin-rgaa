#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Script pour tester la migration de structure
 * Compare les fichiers avant et après migration
 */

function compareFiles(file1, file2) {
  if (!fs.existsSync(file1) || !fs.existsSync(file2)) {
    return false;
  }
  
  const content1 = fs.readFileSync(file1, 'utf8');
  const content2 = fs.readFileSync(file2, 'utf8');
  
  return content1 === content2;
}

function testMigration() {
  const sourceDir = path.join(__dirname, '..', '..', 'doc-init', 'rgaa', 'criteres');
  const targetDir = path.join(__dirname, '..', '..', 'doc', 'rgaa', 'criteres');
  
  console.log('🧪 Test de migration...');
  
  const testCriteria = ['1.1', '1.2', '1.3', '2.1', '3.1'];
  let passed = 0;
  let failed = 0;
  
  for (const criterion of testCriteria) {
    const thematic = getThematicForCriterion(criterion);
    const oldIndex = path.join(sourceDir, criterion, 'index.md');
    const newIndex = path.join(targetDir, thematic, criterion, 'index.md');
    
    console.log(`\n🔍 Test ${criterion}:`);
    console.log(`  Ancien: ${oldIndex}`);
    console.log(`  Nouveau: ${newIndex}`);
    
    if (fs.existsSync(oldIndex) && fs.existsSync(newIndex)) {
      const oldContent = fs.readFileSync(oldIndex, 'utf8');
      const newContent = fs.readFileSync(newIndex, 'utf8');
      
      // Vérifier que les liens internes ont été corrigés
      const hasOldLinks = oldContent.includes('[texte](#lien)') || oldContent.includes('](#');
      const hasNewLinks = newContent.includes('/rgaa/glossaire/');
      
      if (hasOldLinks && hasNewLinks) {
        console.log(`  ✅ Liens corrigés`);
        passed++;
      } else if (!hasOldLinks && hasNewLinks) {
        console.log(`  ✅ Liens déjà corrects`);
        passed++;
      } else {
        console.log(`  ❌ Liens non corrigés`);
        failed++;
      }
      
      // Vérifier que le titre a été ajouté
      const hasTitle = newContent.includes('# ') && newContent.split('\n').length > 4;
      if (hasTitle) {
        console.log(`  ✅ Titre ajouté`);
      } else {
        console.log(`  ⚠️  Titre manquant`);
      }
      
    } else {
      console.log(`  ❌ Fichiers manquants`);
      failed++;
    }
  }
  
  console.log(`\n📊 Résultat du test:`);
  console.log(`✅ Tests réussis: ${passed}`);
  console.log(`❌ Tests échoués: ${failed}`);
  console.log(`📁 Total: ${testCriteria.length}`);
  
  return failed === 0;
}

function getThematicForCriterion(criterion) {
  const mapping = {
    '1.1': '1-images', '1.2': '1-images', '1.3': '1-images',
    '2.1': '2-cadres',
    '3.1': '3-couleurs'
  };
  return mapping[criterion] || 'unknown';
}

function main() {
  const success = testMigration();
  
  if (success) {
    console.log('\n🎉 Tous les tests sont passés !');
    console.log('💡 La migration fonctionne correctement.');
  } else {
    console.log('\n❌ Certains tests ont échoué.');
    console.log('💡 Vérifiez la migration avant de continuer.');
  }
  
  process.exit(success ? 0 : 1);
}

if (require.main === module) {
  main();
}

module.exports = { testMigration, compareFiles };
