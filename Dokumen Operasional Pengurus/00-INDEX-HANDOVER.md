# INDEX HANDOVER OPERASIONAL

Portal Rancajaya - Website Desa Rancajaya

Status dokumen: Draft awal  
Target pembaca: Pengurus Web Desa, perangkat desa, operator CMS, dan PIC teknis  
Lokasi admin: `/admin` pada domain website aktif

## Tujuan Paket Dokumen

Paket ini dibuat sebagai panduan operasional agar pengurus Web Desa dapat:

- Mengelola konten website tanpa membuka kode.
- Memahami alur publikasi konten melalui Decap CMS.
- Mengelola data profil desa, berita, layanan surat, kontak, galeri, UMKM, kelompok tani, dan APBDes.
- Memahami operasional dasar Netlify sebagai hosting dan sistem login CMS.
- Menyiapkan pembelian atau aktivasi domain resmi `.desa.id`.
- Menjaga keberlanjutan pengembangan website untuk tim berikutnya.

## Daftar Dokumen

| No | Dokumen | Fungsi |
|---:|---|---|
| 01 | `01-DOKUMEN-INDUK-HANDOVER.md` | Gambaran umum sistem, pemilik akses, batasan, dan tanggung jawab |
| 02 | `02-MANUAL-DECAP-CMS.md` | Panduan harian menggunakan Decap CMS |
| 03 | `03-SOP-EDIT-PROFIL-DESA.md` | SOP edit profil, visi misi, perangkat desa, dusun, demografi, dan APBDes |
| 04 | `04-SOP-BERITA-GALERI-PENGUMUMAN.md` | SOP membuat berita, pengumuman, artikel, agenda, dan galeri |
| 05 | `05-SOP-LAYANAN-SURAT.md` | SOP edit layanan administrasi dan link formulir |
| 06 | `06-OPERASIONAL-NETLIFY.md` | Panduan hosting, deploy, Identity, Git Gateway, dan troubleshooting Netlify |
| 07 | `07-PEMBELIAN-DOMAIN-DESA-ID.md` | Checklist pengajuan domain resmi `.desa.id` dan penyambungan ke Netlify |
| 08 | `08-ROADMAP-PENGEMBANGAN.md` | Rencana pengembangan fitur setelah handover |
| 09 | `09-AKSES-KEAMANAN-BACKUP.md` | Daftar akses, role, backup, keamanan, dan prosedur pergantian admin |
| 10 | `10-CHECKLIST-PELATIHAN-DAN-SERAH-TERIMA.md` | Checklist pelatihan, uji login, publish, deploy, dan final handover |

## Prinsip Operasional

1. Website ini adalah portal informasi publik, bukan sistem database kependudukan.
2. Konten rahasia warga seperti NIK, KK, KTP, nomor rekening, dokumen bantuan, dan surat pribadi tidak boleh diunggah ke website publik.
3. Pengurus harian cukup menggunakan Decap CMS. Kode website hanya perlu disentuh oleh PIC teknis.
4. Setiap perubahan konten penting harus dicek ulang di tampilan mobile.
5. Minimal ada dua orang yang memegang akses penting: Admin Utama dan Backup Admin.

## Ringkasan Sistem

| Komponen | Keterangan |
|---|---|
| Framework | Astro |
| Styling | Tailwind CSS |
| CMS | Decap CMS |
| Hosting | Netlify |
| Autentikasi admin | Netlify Identity + Git Gateway |
| Repository | GitHub |
| Build command | `npm run build` |
| Publish directory | `dist` |
| Konten | `src/content` |
| Konfigurasi CMS | `public/admin/config.yml` |

## Catatan Untuk Finalisasi

Sebelum dokumen ini diserahkan resmi, lengkapi bagian berikut:

- URL live final.
- Nama akun Netlify pemilik.
- Nama repository GitHub final.
- Daftar email admin CMS.
- Domain final jika sudah memakai `.desa.id`.
- Nama dan jabatan PIC untuk setiap dokumen SOP.
