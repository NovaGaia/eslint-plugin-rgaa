#!/usr/bin/env node

const TestRunner = require('./utils/test-runner');
const path = require('path');

// Parse command line arguments
const args = process.argv.slice(2);
const options = {
  verbose: args.includes('--verbose') || args.includes('-v'),
  criterion: null
};

const criterionIndex = args.findIndex(arg => arg === '--criterion' || arg === '-c');
if (criterionIndex !== -1 && args[criterionIndex + 1]) {
  options.criterion = args[criterionIndex + 1];
}

// Show help
if (args.includes('--help') || args.includes('-h')) {
  console.log(`
Usage: node run-tests.js [options]

Options:
  --criterion, -c <criterion>  Tester un critère spécifique (ex: 1.1)
  --verbose, -v               Mode verbose (affiche plus de détails)
  --help, -h                  Afficher cette aide

Examples:
  node run-tests.js                    # Tous les tests
  node run-tests.js --criterion 1.1    # Test du critère 1.1 uniquement
  node run-tests.js --verbose          # Mode verbose
`);
  process.exit(0);
}

// Run tests
const runner = new TestRunner(options);
const success = runner.runAllTests();

process.exit(success ? 0 : 1);
