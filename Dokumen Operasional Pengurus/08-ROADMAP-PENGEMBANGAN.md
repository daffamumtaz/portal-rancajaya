# ROADMAP PENGEMBANGAN KE DEPAN

Portal Rancajaya - Rencana Lanjutan Setelah Handover

Status dokumen: Draft awal  
Target pembaca: Pemerintah Desa, Tim KKN berikutnya, PIC teknis

## 1. Tujuan Roadmap

Roadmap ini membantu pengurus dan pengembang berikutnya menentukan arah pengembangan website tanpa mengubah fungsi utama portal sebagai website informasi publik.

## 2. Prinsip Pengembangan

1. Prioritaskan fitur yang mudah dikelola perangkat desa.
2. Hindari fitur yang menyimpan data pribadi warga secara publik.
3. Pastikan setiap fitur baru punya PIC operasional.
4. Jangan menambah fitur jika tidak ada pengurus yang akan merawat.
5. Fitur baru harus tetap cepat dibuka di HP.

## 3. Prioritas Jangka Pendek

Target: 1 sampai 3 bulan setelah handover.

| Prioritas | Fitur | Manfaat | PIC |
|---:|---|---|---|
| 1 | Finalisasi domain `.desa.id` | Identitas resmi desa | PIC Domain |
| 2 | Logo dan favicon resmi | Branding lebih formal | Admin/PIC Teknis |
| 3 | Open Graph image | Tampilan link lebih baik saat dibagikan | PIC Teknis |
| 4 | Update foto asli desa | Tampilan lebih otentik | Admin/Editor |
| 5 | Cek semua link layanan | Menghindari link mati | PIC Layanan |
| 6 | Rapikan README teknis | Memudahkan pengembang berikutnya | PIC Teknis |

## 4. Prioritas Jangka Menengah

Target: 3 sampai 6 bulan.

| Fitur | Deskripsi | Catatan |
|---|---|---|
| Halaman detail UMKM | Setiap UMKM punya halaman sendiri | Cocok jika data UMKM sudah banyak |
| Halaman perangkat desa detail | Profil singkat masing-masing perangkat | Perlu foto dan biodata resmi |
| Arsip APBDes per tahun | Data keuangan bisa difilter berdasarkan tahun | Perlu validasi Kaur Keuangan |
| Download formulir | Warga bisa unduh blanko | Pastikan file bukan data pribadi |
| Halaman potensi lebih lengkap | Pertanian, peternakan, UMKM dipisah lebih rapi | Jika konten sudah cukup |
| Kalender agenda desa | Menampilkan jadwal kegiatan | Butuh admin yang rajin update |

## 5. Prioritas Jangka Panjang

Target: 6 sampai 12 bulan.

| Fitur | Manfaat | Risiko |
|---|---|---|
| Integrasi WhatsApp layanan | Warga lebih mudah menghubungi desa | Nomor harus aktif |
| Dashboard statistik publik | Data desa lebih informatif | Data harus valid |
| Pencarian konten lebih kuat | Memudahkan warga mencari informasi | Perlu pengembangan teknis |
| Galeri video | Dokumentasi lebih kaya | Ukuran dan hosting video perlu diperhatikan |
| Multi-admin workflow lebih ketat | Publikasi lebih aman | Perlu pelatihan admin |

## 6. Fitur Yang Tidak Direkomendasikan Tanpa Kajian

Fitur berikut sebaiknya tidak dibuat sebelum ada kajian hukum, keamanan, dan operasional:

- Database NIK/KK warga.
- Sistem surat otomatis yang menyimpan dokumen pribadi.
- Upload KTP/KK langsung ke website publik.
- Payment gateway.
- Marketplace transaksi langsung.
- Login warga tanpa kebutuhan jelas.
- Sistem pengaduan anonim tanpa moderator.

## 7. Standar Sebelum Menambah Fitur

Sebelum fitur dikembangkan, jawab pertanyaan berikut:

- Siapa pengguna fitur?
- Siapa pengurus yang akan merawat?
- Data apa yang dibutuhkan?
- Apakah ada data pribadi?
- Apakah fitur bisa dikelola dari CMS?
- Apakah fitur tetap cepat di HP?
- Apakah ada biaya tambahan?
- Apakah ada risiko hukum atau privasi?

## 8. Catatan Teknis Untuk Tim Berikutnya

Struktur utama proyek:

| Folder/File | Fungsi |
|---|---|
| `src/pages` | Halaman website |
| `src/components` | Komponen tampilan |
| `src/layouts` | Layout utama |
| `src/content` | Data konten dari CMS |
| `public/admin/config.yml` | Konfigurasi Decap CMS |
| `public/images` | Gambar publik |
| `netlify.toml` | Konfigurasi build Netlify |
| `astro.config.mjs` | Konfigurasi Astro |

Command teknis:

```bash
npm install
npm run dev
npm run build
```

## 9. Usulan Backlog Detail

| ID | Fitur | Prioritas | Status | Catatan |
|---|---|---|---|---|
| R-01 | Domain `.desa.id` | Tinggi | Belum | Perlu dokumen administratif |
| R-02 | Logo resmi desa | Tinggi | Belum | Perlu file logo |
| R-03 | Favicon resmi | Sedang | Belum | Turunan dari logo |
| R-04 | OG image sharing | Sedang | Belum | Untuk WhatsApp/Facebook |
| R-05 | Halaman detail UMKM | Sedang | Belum | Jika UMKM > 10 |
| R-06 | Arsip APBDes per tahun | Sedang | Belum | Perlu desain filter tahun |
| R-07 | Download formulir | Sedang | Belum | Simpan file blanko |
| R-08 | Kalender agenda | Rendah | Belum | Butuh admin aktif |
| R-09 | Galeri video | Rendah | Belum | Gunakan embed YouTube jika perlu |

## 10. Definisi Selesai Untuk Fitur Baru

Fitur dianggap selesai jika:

- [ ] Bisa dibuka di desktop.
- [ ] Bisa dibuka di HP.
- [ ] Build berhasil.
- [ ] Konten bisa dikelola pengurus jika memang perlu CMS.
- [ ] Tidak memuat data sensitif.
- [ ] Ada catatan penggunaan untuk pengurus.
- [ ] Sudah diuji oleh minimal satu perangkat desa.
