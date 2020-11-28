#!/usr/bin/env node
const fs = require('fs-extra');
const path = require('path');

const sourceDir = __dirname;
const targetDir = process.cwd();

const sourcePath = pathStr => path.join(sourceDir, '/', ...pathStr.split('/'));
const targetPath = pathStr => path.join(targetDir, '/', ...pathStr.split('/'));

fs.copyFileSync(sourcePath('tests'), targetPath('pg-tests'));
