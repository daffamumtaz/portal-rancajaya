# DOKUMEN INDUK HANDOVER

Portal Rancajaya - Website Desa Rancajaya

Status dokumen: Draft awal  
Tujuan: Menjadi dokumen utama serah terima pengelolaan website kepada pengurus Web Desa.

## 1. Identitas Website

| Item | Keterangan |
|---|---|
| Nama website | Portal Rancajaya |
| Fungsi utama | Website informasi publik, profil desa, layanan, berita, galeri, potensi, UMKM, kelompok tani, dan transparansi APBDes |
| Desa | Rancajaya |
| Kecamatan | Patokbeusi |
| Kabupaten | Subang |
| Provinsi | Jawa Barat |
| URL publik | `[ISI URL FINAL]` |
| URL admin CMS | `[ISI URL FINAL]/admin` |
| Repository GitHub | `[ISI REPOSITORY FINAL]` |
| Hosting | Netlify |
| CMS | Decap CMS |

## 2. Ruang Lingkup Sistem

Website ini digunakan untuk:

- Menampilkan profil resmi Desa Rancajaya.
- Menampilkan visi, misi, sejarah, wilayah, dusun, demografi, dan struktur organisasi.
- Mempublikasikan berita, agenda, artikel, dan pengumuman.
- Menampilkan layanan administrasi dan tautan formulir online.
- Menampilkan kontak penting.
- Menampilkan potensi pertanian, peternakan, UMKM, kelompok tani, dan galeri.
- Menampilkan transparansi APBDes dalam bentuk ringkasan dan grafik.

Website ini tidak digunakan untuk:

- Menyimpan database kependudukan.
- Mengelola data NIK, KK, KTP, atau data pribadi warga secara publik.
- Mencetak surat otomatis.
- Menggantikan sistem informasi desa resmi yang berisi data rahasia.
- Menerima pembayaran online.
- Menjadi marketplace transaksi UMKM.

## 3. Pihak Yang Terlibat

| Peran | Tanggung Jawab | Nama/Jabatan |
|---|---|---|
| Pemilik Website | Pemerintah Desa Rancajaya | `[ISI]` |
| Admin Utama CMS | Mengelola akun, publish konten, koordinasi editor | `[ISI]` |
| Editor Konten | Membuat berita, galeri, dan pembaruan informasi | `[ISI]` |
| PIC Layanan | Mengelola link formulir layanan surat | `[ISI]` |
| PIC Keuangan | Mengelola data APBDes | `[ISI]` |
| PIC Teknis | Menangani GitHub, Netlify, build, domain, dan error teknis | `[ISI]` |
| Backup Admin | Cadangan jika Admin Utama berhalangan | `[ISI]` |

## 4. Alur Operasional Umum

1. Pengurus masuk ke halaman `/admin`.
2. Pengurus memilih collection yang ingin diedit.
3. Pengurus membuat atau memperbarui konten.
4. Konten disimpan sebagai draft.
5. Konten diperiksa oleh pihak yang berwenang.
6. Admin melakukan publish.
7. Netlify membangun ulang website.
8. Pengurus mengecek hasil di website publik.

## 5. Frekuensi Perawatan

| Aktivitas | Frekuensi | PIC |
|---|---:|---|
| Cek website bisa dibuka | Mingguan | Admin |
| Cek login CMS | Bulanan | Admin |
| Cek link layanan/Google Form | Bulanan | PIC Layanan |
| Cek kontak penting | Bulanan | Admin/PIC Layanan |
| Update berita/pengumuman | Sesuai kebutuhan | Editor |
| Update APBDes | Tahunan atau saat perubahan | PIC Keuangan |
| Update struktur organisasi | Saat ada perubahan perangkat | Admin |
| Backup daftar akses | 3 bulan sekali | PIC Teknis |
| Cek domain dan masa berlaku | 3 bulan sebelum jatuh tempo | PIC Domain |

## 6. Batas Wewenang

Pengurus CMS boleh:

- Membuat berita dan pengumuman.
- Mengubah teks profil desa.
- Mengubah kontak.
- Mengunggah foto kegiatan.
- Mengubah link layanan.
- Mengubah data UMKM, kelompok tani, galeri, dan APBDes.

Pengurus CMS tidak disarankan:

- Mengubah struktur folder source code.
- Mengubah konfigurasi `public/admin/config.yml`.
- Menghapus banyak konten sekaligus tanpa backup.
- Mengunggah dokumen yang berisi data pribadi warga.

PIC teknis boleh:

- Mengubah kode Astro.
- Mengubah konfigurasi Decap CMS.
- Mengatur build dan deploy Netlify.
- Mengelola DNS dan domain.
- Melakukan rollback deploy jika website bermasalah.

## 7. Dokumen Pendukung

- Manual Decap CMS.
- SOP Edit Profil Desa.
- SOP Berita, Galeri, dan Pengumuman.
- SOP Layanan Surat.
- Operasional Netlify.
- Pembelian Domain `.desa.id`.
- Roadmap Pengembangan.
- Akses, Keamanan, dan Backup.

## 8. Checklist Handover Induk

- [ ] URL website final sudah dicatat.
- [ ] URL admin sudah diuji.
- [ ] Minimal dua admin dapat login CMS.
- [ ] Admin dapat membuat draft.
- [ ] Admin dapat publish konten.
- [ ] Netlify deploy sukses.
- [ ] GitHub repository sudah diserahkan atau diberi akses.
- [ ] Daftar akses sudah disimpan oleh desa.
- [ ] Domain final sudah diputuskan.
- [ ] Dokumen operasional sudah dibaca oleh pengurus.
