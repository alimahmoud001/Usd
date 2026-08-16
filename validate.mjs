import fs from 'node:fs';
const html = fs.readFileSync('./index.html', 'utf8');
const script = html.match(/<script>([\s\S]*)<\/script>/)?.[1];
if (!script) throw new Error('script not found');
fs.writeFileSync('/tmp/wallet-script-check.mjs', script);
console.log('script extracted:', script.length, 'bytes');
