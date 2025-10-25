const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class TestRunner {
  constructor(options = {}) {
    this.verbose = options.verbose || false;
    this.criterion = options.criterion || null;
    this.configPath = options.configPath || path.join(__dirname, 'eslint-config.js');
  }

  log(message, type = 'info') {
    if (this.verbose || type === 'error' || type === 'success') {
      const prefix = {
        info: 'ℹ️ ',
        success: '✅',
        error: '❌',
        warning: '⚠️ '
      }[type] || 'ℹ️ ';
      console.log(`${prefix} ${message}`);
    }
  }

  runEslint(filePath) {
    try {
      const result = execSync(`npx eslint "${filePath}" --config "${this.configPath}"`, { 
        stdio: 'pipe',
        encoding: 'utf8'
      });
      return { success: true, output: result };
    } catch (error) {
      return { 
        success: false, 
        output: error.stdout || error.stderr || error.message,
        exitCode: error.status || 1
      };
    }
  }

  testFile(filePath, expectedResult) {
    const result = this.runEslint(filePath);
    const testName = path.basename(filePath, path.extname(filePath));
    
    if (result.success === expectedResult) {
      this.log(`${testName}: ${expectedResult ? 'Aucune erreur (correct)' : 'Erreurs détectées (correct)'}`, 'success');
      return true;
    } else {
      this.log(`${testName}: ${expectedResult ? 'Aucune erreur attendue mais erreurs détectées' : 'Erreurs attendues mais aucune détectée'}`, 'error');
      if (result.output) {
        this.log(`Sortie ESLint: ${result.output.trim()}`, 'info');
      }
      return false;
    }
  }

  testDirectory(dirPath, expectedResult) {
    if (!fs.existsSync(dirPath)) {
      this.log(`Dossier non trouvé: ${dirPath}`, 'warning');
      return { passed: 0, total: 0 };
    }

    const files = fs.readdirSync(dirPath)
      .filter(file => file.endsWith('.js') || file.endsWith('.jsx') || file.endsWith('.ts') || file.endsWith('.tsx'))
      .map(file => path.join(dirPath, file));

    let passed = 0;
    const total = files.length;

    this.log(`\nTest du dossier: ${path.basename(dirPath)} (${expectedResult ? 'valide' : 'invalide'})`);
    
    for (const file of files) {
      if (this.testFile(file, expectedResult)) {
        passed++;
      }
    }

    return { passed, total };
  }

  testCriterion(criterion) {
    const criterionPath = path.join(__dirname, '..', '..', 'src', 'criteria', criterion);
    
    if (!fs.existsSync(criterionPath)) {
      this.log(`Critère ${criterion} non trouvé`, 'error');
      return false;
    }

    this.log(`\n🧪 Test du critère RGAA ${criterion}`);
    this.log('=' .repeat(50));

    const validPath = path.join(criterionPath, 'valid');
    const invalidPath = path.join(criterionPath, 'invalid');

    const validResults = this.testDirectory(validPath, true);
    const invalidResults = this.testDirectory(invalidPath, false);

    const totalPassed = validResults.passed + invalidResults.passed;
    const totalTests = validResults.total + invalidResults.total;

    this.log(`\n📊 Résultats du critère ${criterion}:`);
    this.log(`  Valides: ${validResults.passed}/${validResults.total}`);
    this.log(`  Invalides: ${invalidResults.passed}/${invalidResults.total}`);
    this.log(`  Total: ${totalPassed}/${totalTests}`);

    return totalPassed === totalTests;
  }

  runAllTests() {
    this.log('🚀 Démarrage de tous les tests RGAA');
    this.log('=' .repeat(50));

    const criteriaPath = path.join(__dirname, '..', '..', 'src', 'criteria');
    
    if (!fs.existsSync(criteriaPath)) {
      this.log('Aucun critère trouvé', 'error');
      return false;
    }

    const criteria = fs.readdirSync(criteriaPath)
      .filter(item => fs.statSync(path.join(criteriaPath, item)).isDirectory())
      .sort();

    if (this.criterion) {
      const criterion = criteria.find(c => c === this.criterion);
      if (!criterion) {
        this.log(`Critère ${this.criterion} non trouvé`, 'error');
        return false;
      }
      return this.testCriterion(criterion);
    }

    let allPassed = true;
    let totalPassed = 0;
    let totalTests = 0;

    for (const criterion of criteria) {
      const passed = this.testCriterion(criterion);
      if (!passed) {
        allPassed = false;
      }
    }

    this.log(`\n🎉 Tests terminés !`);
    this.log(`Résultat global: ${allPassed ? 'Tous les tests sont passés' : 'Certains tests ont échoué'}`);

    return allPassed;
  }
}

module.exports = TestRunner;
