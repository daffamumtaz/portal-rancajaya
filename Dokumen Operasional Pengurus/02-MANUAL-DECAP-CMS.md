# MANUAL DECAP CMS

Portal Rancajaya - Panduan Pengurus Harian

Status dokumen: Draft awal  
Target pembaca: Admin CMS dan editor konten desa

## 1. Fungsi Decap CMS

Decap CMS adalah panel admin untuk mengubah isi website tanpa membuka kode. Semua perubahan konten akan disimpan ke repository GitHub, lalu Netlify akan membangun ulang website agar perubahan tampil ke publik.

## 2. Cara Masuk CMS

1. Buka website Portal Rancajaya.
2. Tambahkan `/admin` di akhir URL.
3. Contoh: `https://nama-domain-desa/admin`.
4. Klik tombol login.
5. Masukkan email dan password yang sudah didaftarkan.
6. Setelah berhasil login, dashboard CMS akan tampil.

## 3. Jika Lupa Password

1. Buka halaman `/admin`.
2. Pilih opsi lupa password atau reset password.
3. Cek email admin.
4. Ikuti tautan reset password.
5. Buat password baru.
6. Login ulang.

Jika email reset tidak masuk:

- Cek folder spam.
- Pastikan email sudah terdaftar di Netlify Identity.
- Hubungi Admin Utama atau PIC Teknis.

## 4. Istilah Penting

| Istilah | Arti |
|---|---|
| Collection | Kelompok konten, misalnya Berita, Galeri, UMKM |
| Entry | Satu item konten, misalnya satu berita atau satu foto galeri |
| Draft | Konten tersimpan tetapi belum tayang |
| Ready | Konten siap diperiksa/publish |
| Publish | Konten diterbitkan ke website publik |
| Unpublish | Konten ditarik dari website dan kembali menjadi draft |
| Delete | Konten dihapus permanen |
| Media | Tempat mengunggah dan memilih gambar |

## 5. Alur Publikasi Yang Disarankan

1. Editor membuat konten baru.
2. Editor klik `Save`.
3. Konten masuk status `Draft`.
4. Admin atau pejabat terkait memeriksa isi konten.
5. Jika sudah benar, ubah status menjadi `Ready`.
6. Admin klik `Publish`.
7. Tunggu proses build Netlify 1 sampai 3 menit.
8. Buka website publik dan cek hasilnya.

## 6. Collection Yang Tersedia

| Collection | Fungsi |
|---|---|
| Berita & Informasi | Berita, artikel, agenda, dan pengumuman |
| Struktur Organisasi Tree | Data perangkat desa dan hubungan atasan-bawahan |
| Dusun | Data dusun, kepala dusun, penduduk, deskripsi |
| Transparansi APBDes | Data pendapatan dan belanja desa |
| Statistik Potensi | Angka ringkas pertanian dan peternakan |
| Kelompok Tani | Data poktan/gapoktan |
| UMKM | Data usaha warga |
| Administrasi Daring | Layanan surat dan link formulir |
| Kontak | Kontak kantor desa, kesehatan, keamanan, pengaduan |
| FAQ | Tanya jawab layanan dan informasi umum |
| Galeri Foto | Foto kegiatan, pembangunan, budaya, pertanian, UMKM |
| Pengaturan | Identitas umum desa |
| Halaman Website | Konten khusus beranda, profil, potensi, layanan |

## 7. Cara Membuat Konten Baru

1. Pilih collection di sidebar.
2. Klik `New`.
3. Isi semua field wajib.
4. Unggah gambar jika diperlukan.
5. Klik `Save`.
6. Periksa kembali isi konten.
7. Ubah status menjadi `Ready`.
8. Admin klik `Publish`.

## 8. Cara Mengedit Konten Lama

1. Pilih collection.
2. Klik konten yang ingin diedit.
3. Ubah field yang diperlukan.
4. Klik `Save`.
5. Publish ulang jika sudah disetujui.
6. Cek hasil di website.

## 9. Cara Upload Gambar

1. Saat memilih field gambar, klik `Choose an image`.
2. Pilih gambar dari komputer.
3. Pastikan ukuran gambar idealnya di bawah 1 MB.
4. Gunakan nama file yang jelas.
5. Hindari nama file seperti `IMG_1234 final banget revisi.png`.

Contoh nama file yang rapi:

- `kantor-desa-rancajaya-2026.jpg`
- `gotong-royong-dusun-sengon-juli-2026.jpg`
- `produk-umkm-keripik-singkong-buwer.jpg`

## 10. Standar Konten

Berita atau pengumuman minimal memiliki:

- Judul jelas.
- Tanggal benar.
- Kategori benar.
- Ringkasan pendek.
- Isi lengkap.
- Penulis.
- Thumbnail jika ada.

Galeri minimal memiliki:

- Judul foto.
- Tanggal.
- Kategori.
- Foto.
- Deskripsi singkat.

Layanan minimal memiliki:

- Nama layanan.
- Deskripsi.
- Link formulir jika tersedia.
- Urutan tampil.

## 11. Yang Tidak Boleh Diunggah

Jangan unggah:

- Foto KTP, KK, akta, surat kesehatan, atau dokumen pribadi warga.
- File berisi NIK, nomor KK, nomor rekening, atau data bantuan warga.
- Foto anak-anak tanpa izin kegiatan.
- Dokumen internal desa yang belum boleh dipublikasikan.
- Foto yang blur, terlalu gelap, atau tidak relevan.

## 12. Troubleshooting Singkat

| Masalah | Kemungkinan Penyebab | Tindakan |
|---|---|---|
| Tidak bisa login | Email belum terdaftar atau password salah | Hubungi Admin Utama/PIC Teknis |
| Perubahan belum muncul | Netlify masih build atau cache browser | Tunggu 3 menit, refresh, cek deploy |
| Gambar tidak tampil | Upload gagal atau path gambar salah | Upload ulang gambar |
| Publish gagal | Build Netlify gagal | Cek deploy log atau hubungi PIC Teknis |
| Link layanan mati | Link Google Form salah atau form ditutup | Perbarui link |

## 13. Checklist Setelah Publish

- [ ] Halaman bisa dibuka di desktop.
- [ ] Halaman bisa dibuka di HP.
- [ ] Judul tidak salah ketik.
- [ ] Gambar muncul.
- [ ] Link bisa diklik.
- [ ] Tanggal benar.
- [ ] Tidak ada data pribadi warga.
- [ ] Konten sudah disetujui pihak terkait.
