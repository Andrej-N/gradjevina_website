/**
 * Image Rename Script
 * Renames images following SEO pattern: usluga-grad-broj.ext
 *
 * Usage: node scripts/rename-images.js [--dry-run]
 *
 * This script maps existing image files to SEO-friendly names.
 * Run with --dry-run first to preview changes.
 */

import { readdir, rename, copyFile } from 'fs/promises';
import { join, extname } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const IMAGES_DIR = join(__dirname, '..', 'src', 'assets', 'images');
const dryRun = process.argv.includes('--dry-run');

// Mapping: original filename -> SEO-friendly name
const RENAME_MAP = {
  'hero_moleraj.PNG': 'moleraj-hero-1.png',
  'hero_keramika.PNG': 'keramika-hero-1.png',
  'hero.PNG': 'adaptacija-hero-1.png',
  'beforeafter_moleraj.png': 'moleraj-pre-posle-1.png',
  'beforeafter.PNG': 'keramika-pre-posle-1.png',
  'beforeafter_adaptacija.png': 'adaptacija-pre-posle-1.png',
  'kuhinja-bar.jpg': 'adaptacija-kuhinja-1.jpg',
  'kuhinja-led.jpg': 'adaptacija-kuhinja-2.jpg',
  'kuhinja-2.jpg': 'adaptacija-kuhinja-3.jpg',
  'kupatilo-ogledalo.jpg': 'keramika-kupatilo-1.jpg',
  'kupatilo-sire.jpg': 'keramika-kupatilo-2.jpg',
  'postavljanje-plocica.jpg': 'keramika-postavljanje-1.jpg',
  'renoviranje.jpg': 'adaptacija-renoviranje-1.jpg',
  'demoliranje.jpg': 'adaptacija-demoliranje-1.jpg',
  'spavaca-soba-1.jpg': 'adaptacija-spavaca-soba-1.jpg',
  'spavaca-soba-2.jpg': 'adaptacija-spavaca-soba-2.jpg',
  'moleraj.PNG': 'moleraj-referenca-1.png',
  'tiles.PNG': 'keramika-referenca-1.png',
};

async function main() {
  console.log(dryRun ? '=== DRY RUN ===' : '=== RENAMING IMAGES ===');
  console.log(`Directory: ${IMAGES_DIR}\n`);

  const files = await readdir(IMAGES_DIR);
  let renamed = 0;

  for (const file of files) {
    const newName = RENAME_MAP[file];
    if (newName) {
      const oldPath = join(IMAGES_DIR, file);
      const newPath = join(IMAGES_DIR, newName);
      console.log(`${file} -> ${newName}`);
      if (!dryRun) {
        await rename(oldPath, newPath);
      }
      renamed++;
    }
  }

  console.log(`\n${renamed} files ${dryRun ? 'would be' : ''} renamed.`);

  if (!dryRun) {
    console.log('\n⚠️  IMPORTANT: Update image imports in your source files to match the new names!');
    console.log('Files to update:');
    console.log('  - src/data/pages/*.ts (hero and beforeAfter images)');
    console.log('  - src/pages/ServiceLandingPage.tsx (gallery images)');
    console.log('  - src/components/Layout.tsx (logo)');
  }
}

main().catch(console.error);
