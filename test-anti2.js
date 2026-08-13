const fs = require('fs');
const js = fs.readFileSync('/Users/test/aobod-ferma/Aobod-fermasi/script.js', 'utf8');

// We will extract the click logic and simulate it
console.log(js.includes('var aLink=e.target.closest(\'[data-anti-mol]\');'));
console.log(js.includes('mol.antibiotik = !mol.antibiotik;'));
console.log(js.includes('renderMolGrid()'));
console.log(js.includes('updateDash()'));
