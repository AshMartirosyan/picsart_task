import fs from 'fs';
import path from 'path';
import chalk from 'chalk';

const statsPath = path.resolve(process.cwd(), 'build', 'compilation-stats.json');

fs.readFile(statsPath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading stats file:', err);
    return;
  }

  const stats = JSON.parse(data);
  const assets = (stats.assets || []).sort((a, b) => a.name.localeCompare(b.name));
  const longestNameLength = Math.max(...assets.map((asset) => asset.name.length));

  console.log(chalk.green('Asset Sizes:\n'));

  assets.forEach(({ name, size }) => {
    const sizeInKiB = (size / 1024).toFixed(2) + ' KiB';
    const paddedName = name.padEnd(longestNameLength + 2, ' ');
    const color = size < 100000 ? chalk.green : size < 150000 ? chalk.yellow : chalk.red;
    console.log(`\t${color(paddedName)} | ${color(sizeInKiB)}`);
  });
});
