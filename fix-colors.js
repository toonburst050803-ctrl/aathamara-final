import fs from 'fs';
import path from 'path';

const dir = 'src/components';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  content = content.replace(/gold-500/g, 'primary-500');
  content = content.replace(/gold-400/g, 'primary-400');
  content = content.replace(/gold-600/g, 'primary-600');
  content = content.replace(/gold-900/g, 'primary-900');
  content = content.replace(/gold-300/g, 'primary-300');
  content = content.replace(/amber-700/g, 'blue-700');
  content = content.replace(/amber-600/g, 'blue-600');
  content = content.replace(/amber-500/g, 'blue-500');
  content = content.replace(/amber-300/g, 'cyan-300');
  content = content.replace(/yellow-500/g, 'cyan-500');
  content = content.replace(/text-gradient-gold/g, 'text-gradient-primary');
  content = content.replace(/bg-gradient-gold/g, 'bg-gradient-primary');
  content = content.replace(/212,175,55/g, '0,102,255');

  fs.writeFileSync(filePath, content);
}
console.log('done');
