const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, 'package.json');
let pkg = JSON.parse(fs.readFileSync(targetFile, 'utf8'));

// Inject overrides to force npm to accept Next 16 for all sub-dependencies
pkg.overrides = {
  "next": "$next"
};

fs.writeFileSync(targetFile, JSON.stringify(pkg, null, 2));
console.log("Overrides injected.");
