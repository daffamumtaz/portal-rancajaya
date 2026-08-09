# Portal Rancajaya

Website resmi (Portal) untuk profil, informasi, potensi pertanian, dan layanan administrasi Desa Rancajaya. Dibangun menggunakan [Astro](https://astro.build) dan [Decap CMS](https://decapcms.org/).

## Deployment dan CMS
Website publik dibangun dan di-deploy ke GitHub Pages melalui GitHub Actions.
Decap CMS tersimpan di `/admin/` dan menggunakan GitHub backend. Netlify hanya
digunakan sebagai OAuth proxy untuk login GitHub; Netlify tidak perlu membuild
atau meng-host website ini.

URL repositori: `https://github.com/portalrancajaya/portalrancajaya.github.io`
Live URL: `https://portalrancajaya.github.io`

## Cara Menjalankan di Lokal

1. **Clone repository ini**
   ```bash
   git clone https://github.com/portalrancajaya/portalrancajaya.github.io.git
   cd portalrancajaya.github.io
   ```

2. **Instal dependensi**
   ```bash
   npm install
   ```

3. **Jalankan server pengembangan**
   ```bash
   npm run dev
   ```

4. Buka browser dan arahkan ke `http://localhost:4321`. 
5. Untuk mengakses halaman Admin CMS, kunjungi `http://localhost:4321/admin/index.html`.

*(Catatan: backend Decap CMS terhubung ke GitHub `portalrancajaya/portalrancajaya.github.io` melalui OAuth proxy Netlify di `portalrancajayaauth.netlify.app`. Pengguna CMS harus memiliki akses tulis ke repository.)*

## Struktur Proyek
- `src/pages/`: Berisi semua rute halaman website (`index.astro`, `profil.astro`, dll).
- `src/components/`: Komponen UI yang dapat digunakan kembali.
- `src/content/`: Koleksi konten markdown dari CMS.
- `public/admin/`: Konfigurasi CMS (`config.yml`).
