import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const BASE_URL = 'https://twinnovationbio.com';
const productsFile = resolve(process.cwd(), 'src/data/products.js');
const sitemapFile = resolve(process.cwd(), 'public/sitemap.xml');

const src = readFileSync(productsFile, 'utf-8');

// 以正則擷取產品 id，避免評估 import.meta 造成錯誤
const idRegex = /id:\s*'([^']+)'/g;
const productIds = [];
let match;
while ((match = idRegex.exec(src)) !== null) {
  productIds.push(match[1]);
}

const today = new Date().toISOString().split('T')[0];

const urls = [
  { loc: `${BASE_URL}/`, priority: '1.0' },
  { loc: `${BASE_URL}/about`, priority: '0.8' },
  { loc: `${BASE_URL}/products`, priority: '0.9' },
  { loc: `${BASE_URL}/cases`, priority: '0.6' },
  { loc: `${BASE_URL}/contact`, priority: '0.6' }
];

for (const id of productIds) {
  urls.push({ loc: `${BASE_URL}/products/${id}`, priority: '0.7' });
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  urls.map(u => `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${u.priority}</priority>\n  </url>`).join('\n') +
  `\n</urlset>\n`;

writeFileSync(sitemapFile, xml, 'utf-8');
console.log(`Generated sitemap with ${urls.length} URLs at ${sitemapFile}`);
