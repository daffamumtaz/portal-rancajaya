const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const outputDir = process.env.GUIDE_OUTPUT_DIR || path.join(process.cwd(), 'tmp', 'guide-assets');
const baseUrl = process.env.GUIDE_BASE_URL || 'http://127.0.0.1:4321/portal-rancajaya';
const executablePath = process.env.PLAYWRIGHT_CHROMIUM_PATH;

fs.mkdirSync(outputDir, { recursive: true });

const panelCss = `
  *{box-sizing:border-box} body{margin:0;background:#eef1f5;font:16px/1.45 Arial,sans-serif;color:#17211d}
  .shot{width:1200px;height:675px;background:#f7f8fa;overflow:hidden;border:1px solid #d7dde3}
  .top{height:62px;background:#166534;color:#fff;display:flex;align-items:center;justify-content:space-between;padding:0 28px;font-weight:700}
  .brand{font-size:20px}.status{font-size:13px;color:#dcfce7}.body{display:grid;grid-template-columns:260px 1fr;height:613px}
  .side{background:#f0fdf4;border-right:1px solid #d8e6dc;padding:22px 14px}.side h3{margin:0 10px 13px;font-size:13px;color:#64748b;text-transform:uppercase;letter-spacing:.08em}
  .nav{padding:9px 12px;margin:3px 0;border-radius:8px;color:#166534;font-weight:650;font-size:14px}.nav.active{background:#dcfce7}.main{padding:28px 34px;overflow:hidden}
  h1{margin:0 0 20px;font-size:28px;color:#173f31}.toolbar{display:flex;justify-content:space-between;align-items:center;margin-bottom:18px}.btn{background:#166534;color:#fff;border-radius:7px;padding:10px 14px;font-weight:700;font-size:14px}
  .list{display:grid;gap:10px}.row{display:grid;grid-template-columns:1.5fr .7fr .7fr;gap:16px;background:#fff;border:1px solid #dfe5e1;padding:14px 16px;border-radius:8px}.muted{color:#64748b;font-size:13px}
  .editor{display:grid;grid-template-columns:1fr .78fr;gap:20px}.form,.preview{background:#fff;border:1px solid #dfe5e1;border-radius:9px;padding:18px;height:510px;overflow:hidden}.field{margin-bottom:12px}.field label{display:block;font-size:12px;font-weight:700;color:#456257;margin-bottom:5px}.input{height:38px;border:1px solid #cbd5d1;border-radius:5px;background:#fff}.input.area{height:92px}.preview h2{color:#174c37;margin:0 0 12px}.preview .line{height:10px;background:#e2e8e5;border-radius:8px;margin:10px 0}.preview .line.short{width:58%}
  .drop{border:2px dashed #86a693;background:#f0fdf4;border-radius:12px;padding:46px;text-align:center;color:#166534;font-weight:700}.thumbs{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-top:24px}.thumb{height:105px;border-radius:9px;background:linear-gradient(145deg,#d7e8dc,#f1e6c9);border:1px solid #d6ddd8}
  .flow{display:flex;align-items:center;justify-content:center;gap:14px;height:500px}.node{width:175px;min-height:105px;background:#fff;border:2px solid #1f6b4d;border-radius:12px;padding:18px;text-align:center;font-weight:700}.node small{display:block;margin-top:8px;color:#64748b;font-weight:500}.arrow{font-size:28px;color:#b7791f}
`;

const sidebar = `
  <div class="side"><h3>Konten</h3>
    <div class="nav active">Berita & Informasi</div><div class="nav">Galeri Foto</div><div class="nav">Halaman — Beranda</div>
    <div class="nav">Profil — Data & Organisasi</div><div class="nav">Profil — Wilayah & Dusun</div><div class="nav">APBDes per Periode</div>
    <div class="nav">Pertanian & Peternakan</div><div class="nav">UMKM</div><div class="nav">Layanan — Pengantar</div>
    <div class="nav">Layanan — Administrasi</div><div class="nav">Layanan — Kontak</div><div class="nav">Sistem — Identitas Desa</div>
  </div>`;

const pages = {
  'admin-dashboard.png': `<div class="shot"><div class="top"><div class="brand">Portal Rancajaya</div><div class="status">Perubahan tersimpan</div></div><div class="body">${sidebar}<div class="main"><div class="toolbar"><h1>Berita & Informasi</h1><div class="btn">+ Informasi</div></div><div class="list"><div class="row"><b>Website Portal Rancajaya Resmi Diluncurkan</b><span>Berita</span><span class="muted">10 Agu 2026</span></div><div class="row"><b>Petani Rancajaya Belajar Bioproteksi</b><span>Artikel</span><span class="muted">30 Jul 2026</span></div><div class="row"><b>Belajar TOGA Bersama Warga</b><span>Artikel</span><span class="muted">25 Jul 2026</span></div></div></div></div></div>`,
  'admin-berita.png': `<div class="shot"><div class="top"><div class="brand">Menulis di Berita & Informasi</div><div class="btn">Terbitkan</div></div><div class="main"><h1>Informasi Baru</h1><div class="editor"><div class="form"><div class="field"><label>JUDUL</label><div class="input"></div></div><div class="field"><label>TANGGAL</label><div class="input"></div></div><div class="field"><label>KATEGORI</label><div class="input"></div></div><div class="field"><label>THUMBNAIL</label><div class="input"></div></div><div class="field"><label>RINGKASAN</label><div class="input area"></div></div><div class="field"><label>KONTEN</label><div class="input area"></div></div></div><div class="preview"><h2>Pratinjau informasi</h2><div class="line"></div><div class="line short"></div><div class="line"></div><div class="line"></div><div class="line short"></div></div></div></div></div>`,
  'admin-apbdes.png': `<div class="shot"><div class="top"><div class="brand">Menulis di APBDes per Periode</div><div class="btn">Terbitkan</div></div><div class="main"><h1>Periode APBDes</h1><div class="editor"><div class="form"><div class="field"><label>TAHUN ANGGARAN</label><div class="input"></div></div><div class="field"><label>VERSI APBDES - AWAL / PERUBAHAN</label><div class="input"></div></div><div class="field"><label>PENDAPATAN - DAFTAR SELURUH POS</label><div class="input area"></div></div><div class="field"><label>BELANJA - DAFTAR SELURUH POS</label><div class="input area"></div></div><div class="field"><label>STATUS PUBLIKASI DAN TAMPILKAN DI PUBLIK</label><div class="input"></div></div></div><div class="preview"><h2>Ringkasan periode</h2><div class="line short"></div><div class="line"></div><div class="line"></div><div class="line short"></div></div></div></div></div>`,
  'admin-media.png': `<div class="shot"><div class="top"><div class="brand">Aset Media</div><div class="status">Portal Rancajaya</div></div><div class="main"><h1>Unggah gambar</h1><div class="drop">Pilih gambar dari komputer<br><span class="muted">JPG, PNG, atau WebP — maksimal 5 MB per gambar</span></div><div class="thumbs"><div class="thumb"></div><div class="thumb"></div><div class="thumb"></div><div class="thumb"></div></div></div></div>`,
  'arsitektur-portal.png': `<div class="shot"><div class="top"><div class="brand">Alur Teknis Portal Rancajaya</div><div class="status">Astro 7 + Decap CMS + GitHub Pages</div></div><div class="flow"><div class="node">Pengelola<small>mengubah konten melalui halaman admin</small></div><div class="arrow">→</div><div class="node">Decap CMS<small>menulis berkas ke branch main</small></div><div class="arrow">→</div><div class="node">GitHub Actions<small>menjalankan npm ci dan npm run build</small></div><div class="arrow">→</div><div class="node">GitHub Pages<small>menyajikan hasil folder dist</small></div></div></div>`
};

(async () => {
  const browser = await chromium.launch({ headless: true, executablePath });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  await page.goto(`${baseUrl}/admin/index.html`, { waitUntil: 'networkidle' });
  await page.click('#admin-guide-button');
  await page.screenshot({ path: path.join(outputDir, 'admin-login.png') });

  for (const [name, markup] of Object.entries(pages)) {
    await page.setContent(`<style>${panelCss}</style>${markup}`);
    await page.locator('.shot').screenshot({ path: path.join(outputDir, name) });
  }

  await browser.close();
})();
