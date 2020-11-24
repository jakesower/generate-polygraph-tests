#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const sourceDir = __dirname;
const targetDir = process.cwd();

fs.copyFileSync(path.join(sourceDir, '/', 'moo.txt'), path.join(targetDir, '/', 'moo.moo'));
