#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-require-imports */
// dev/generate_placeholders.js
// Generates premium placeholders for referenced images listed in /tmp/image_refs.txt

const fs = require('fs').promises;
const path = require('path');

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

function titleize(str) {
  return str.replace(/[_-]+/g, ' ').replace(/\.[^.]+$/, '').toUpperCase();
}

function deriveDims(p) {
  const name = path.basename(p).toLowerCase();
  if (p.includes('/hero/') || name.includes('hero')) return { w: 1920, h: 1080 };
  if (name.includes('secondary')) return { w: 1400, h: 900 };
  return { w: 1200, h: 750 };
}

function svgPlaceholder({ w, h, folderLabel, fileLabel }) {
  const gradId = 'g1';
  const label = folderLabel || 'PLACEHOLDER';
  const sub = fileLabel || '';
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="${label} ${sub}">
  <defs>
    <linearGradient id="${gradId}" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0%" stop-color="#081226" />
      <stop offset="100%" stop-color="#000000" />
    </linearGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M40 0 H0 V40" stroke="#ffffff" stroke-opacity="0.03" stroke-width="1" fill="none" />
    </pattern>
    <filter id="grain"><feTurbulence baseFrequency="0.8" numOctaves="1" stitchTiles="stitch" result="t"/><feColorMatrix type="saturate" values="0"/></filter>
  </defs>
  <rect width="100%" height="100%" fill="url(#${gradId})" />
  <rect width="100%" height="100%" fill="url(#grid)" opacity="0.6" />
  <rect x="12" y="12" width="${w-24}" height="${h-24}" fill="none" stroke="#ffffff" stroke-opacity="0.04" stroke-width="2" rx="8" />
  <g transform="translate(24,24)" fill="#ffffff" opacity="0.9">
    <rect x="0" y="0" rx="6" ry="6" width="220" height="46" fill="#07122a" opacity="0.85" />
    <text x="12" y="30" font-family="-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif" font-size="14" font-weight="700">${label}</text>
    <text x="12" y="46" font-family="-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif" font-size="11" fill="#c8d4e2" opacity="0.9">${sub}</text>
  </g>
  <!-- HUD motif -->
  <g stroke="#ffffff" stroke-opacity="0.06" stroke-width="1">
    <line x1="24" y1="${h-64}" x2="${w-24}" y2="${h-64}" />
    <line x1="24" y1="${h-56}" x2="${w-24}" y2="${h-56}" />
  </g>
</svg>`;
}

async function generateRasterBuffer({ w, h, folderLabel, fileLabel, format = 'webp' }) {
  // Use sharp if available
  let sharp;
  try {
    sharp = require('sharp');
  } catch {
    throw new Error('sharp-missing');
  }

  const svg = svgPlaceholder({ w, h, folderLabel, fileLabel });
  const img = sharp(Buffer.from(svg)).resize(w, h, { fit: 'cover' }).flatten({ background: '#000' });
  if (format === 'png') return img.png().toBuffer();
  if (format === 'jpg' || format === 'jpeg') return img.jpeg({ quality: 82 }).toBuffer();
  return img.webp({ quality: 75 }).toBuffer();
}

async function main() {
  const listPath = '/tmp/image_refs.txt';
  try {
    const raw = await fs.readFile(listPath, 'utf8');
    const lines = raw.split(/\r?\n/).filter(Boolean);
    console.log(`Found ${lines.length} referenced images`);
    let created = 0;
    for (const ref of lines) {
      // ref is like /images/.../file.ext but the grep included path in src lines; handle both possibilities
      const match = ref.match(/(\/images\/[A-Za-z0-9_./-]+\.(webp|png|jpg|jpeg|svg))/i);
      const p = match ? match[1] : ref;
      const ext = path.extname(p).toLowerCase().replace('.', '');
      const publicP = path.join(process.cwd(), 'public', p);
      const dir = path.dirname(publicP);
      await ensureDir(dir);
      const exists = await fs
        .access(publicP)
        .then(() => true)
        .catch(() => false);
      if (exists) continue;

      const base = p.replace(/\\/g, '/');
      const parts = base.split('/').filter(Boolean);
      const filename = parts.pop();
      const folder = parts.pop() || 'IMAGES';
      const folderLabel = folder.toUpperCase();
      const fileLabel = titleize(filename.replace(/\.[^.]+$/, ''));
      const dims = deriveDims(p);

      if (ext === 'svg') {
        const svg = svgPlaceholder({ w: dims.w, h: dims.h, folderLabel, fileLabel });
        await fs.writeFile(publicP, svg, 'utf8');
      } else {
        // raster formats - need sharp
        try {
          const buffer = await generateRasterBuffer({ w: dims.w, h: dims.h, folderLabel, fileLabel, format: ext });
          await fs.writeFile(publicP, buffer);
        } catch (e) {
          if (e.message === 'sharp-missing') {
            console.error('Missing sharp dependency. Install with `npm i -D sharp` and retry.');
            process.exit(2);
          }
          throw e;
        }
      }
      created++;
      console.log(`Created ${publicP}`);
    }
    console.log(`Created ${created} placeholders`);
    process.exit(0);
  } catch (err) {
    console.error(err.message || err);
    process.exit(1);
  }
}

if (require.main === module) main();
