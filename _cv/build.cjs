#!/usr/bin/env node
// Builds ../Divesh_Dogra_CV.pdf from cv.html using headless Chromium (Playwright).
//
//   node _cv/build.cjs
//
// Needs `playwright` to be resolvable: `npm i -D playwright`, or point NODE_PATH at a
// global install (NODE_PATH=$(npm root -g) node _cv/build.cjs).
// Chromium writes a real text layer and clickable links. It cannot set the PDF Author,
// so setAuthor() appends a small incremental update with it.

const fs = require('fs');
const path = require('path');
const { pathToFileURL } = require('url');

let chromium;
try {
  ({ chromium } = require('playwright'));
} catch {
  console.error('playwright not found. Run `npm i -D playwright` or set NODE_PATH=$(npm root -g).');
  process.exit(1);
}

const SRC = path.join(__dirname, 'cv.html');
const OUT = path.join(__dirname, '..', 'Divesh_Dogra_CV.pdf');
const AUTHOR = 'Divesh Dogra';

function setAuthor(buf, author) {
  const s = buf.toString('latin1');
  const sx = [...s.matchAll(/startxref\s+(\d+)\s+%%EOF/g)].pop();
  const tIdx = s.lastIndexOf('trailer');
  if (!sx || tIdx < 0) throw new Error('Unsupported PDF layout: no classic xref/trailer');
  const trailer = s.slice(tIdx);
  const size = Number(/\/Size\s+(\d+)/.exec(trailer)[1]);
  const root = /\/Root\s+(\d+ \d+ R)/.exec(trailer)[1];
  const id = (/\/ID\s*\[[^\]]*\]/.exec(trailer) || [''])[0];
  const infoRef = /\/Info\s+(\d+) \d+ R/.exec(trailer);
  let entries = '';
  if (infoRef) {
    const m = new RegExp(`(?:^|\\s)${infoRef[1]} 0 obj\\s*<<([\\s\\S]*?)>>\\s*endobj`).exec(s);
    if (m) entries = m[1].replace(/\/Author\s*(\([^)]*\)|<[^>]*>)/, '');
  }
  const body = Buffer.from(buf.at(-1) === 0x0a ? '' : '\n', 'latin1');
  const objOffset = buf.length + body.length;
  const obj = Buffer.from(`${size} 0 obj\n<<${entries}/Author (${author})>>\nendobj\n`, 'latin1');
  const xrefOffset = objOffset + obj.length;
  const xref = Buffer.from(
    `xref\n${size} 1\n${String(objOffset).padStart(10, '0')} 00000 n \n` +
    `trailer\n<</Size ${size + 1}/Root ${root}/Info ${size} 0 R/Prev ${sx[1]}${id}>>\n` +
    `startxref\n${xrefOffset}\n%%EOF\n`,
    'latin1'
  );
  return Buffer.concat([buf, body, obj, xref]);
}

(async () => {
  const browser = await chromium.launch();
  try {
    const page = await browser.newPage();
    await page.goto(pathToFileURL(SRC).href);
    await page.emulateMedia({ media: 'print' });
    const pdf = await page.pdf({ preferCSSPageSize: true, printBackground: true });
    fs.writeFileSync(OUT, setAuthor(pdf, AUTHOR));
    console.log('wrote', path.relative(process.cwd(), OUT));
  } finally {
    await browser.close();
  }
})().catch((e) => { console.error(e); process.exit(1); });
