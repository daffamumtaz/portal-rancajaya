# SOP EDIT PROFIL DESA

Portal Rancajaya - Profil, Struktur, Demografi, Dusun, dan APBDes

Status dokumen: Draft awal  
Target pembaca: Admin CMS, Sekdes, Kasi Pemerintahan, Kaur Keuangan

## 1. Tujuan SOP

SOP ini menjelaskan cara memperbarui informasi resmi desa yang bersifat jangka menengah sampai jangka panjang. Data pada bagian ini harus berasal dari sumber resmi desa.

## 2. Bagian Profil Yang Dikelola

| Bagian Website | Lokasi CMS | PIC Data | Frekuensi Update |
|---|---|---|---|
| Identitas desa | Pengaturan > Pengaturan Umum | Sekdes | Jika berubah |
| Visi dan misi | Pengaturan > Pengaturan Umum | Sekdes/Kepala Desa | Saat perubahan dokumen perencanaan |
| Sejarah singkat | Pengaturan > Pengaturan Umum | Sekdes | Jika ada revisi resmi |
| Sambutan kepala desa | Halaman Website > Halaman Profil | Kepala Desa/Sekdes | Saat pergantian atau revisi |
| Struktur organisasi | Struktur Organisasi Tree | Sekdes/Admin | Saat mutasi/pergantian |
| Data dusun | Dusun | Kasi Pemerintahan | Minimal tahunan |
| Demografi | Halaman Website > Halaman Profil dan Dusun | Kasi Pemerintahan | Minimal tahunan |
| APBDes | Transparansi APBDes | Kaur Keuangan | Tahunan/perubahan anggaran |

## 3. Edit Pengaturan Umum

Digunakan untuk mengubah:

- Nama desa.
- Kecamatan.
- Kabupaten.
- Provinsi.
- Visi.
- Misi.
- Sejarah.
- Alamat kantor.
- Telepon.
- Email.
- Jam operasional.

Langkah:

1. Masuk ke CMS.
2. Pilih `Pengaturan`.
3. Buka `Pengaturan Umum`.
4. Edit data yang diperlukan.
5. Klik `Save`.
6. Lakukan review.
7. Klik `Publish`.
8. Cek halaman website dan footer.

Checklist:

- [ ] Nama wilayah ditulis sesuai ejaan resmi.
- [ ] Nomor telepon aktif.
- [ ] Email aktif dan bisa diakses.
- [ ] Jam layanan sesuai pelayanan kantor.
- [ ] Visi dan misi sesuai dokumen resmi.

## 4. Edit Sambutan Kepala Desa

Langkah:

1. Masuk CMS.
2. Pilih `Halaman Website`.
3. Buka `Halaman Profil`.
4. Edit `Kata Sambutan`.
5. Edit `Nama Kepala Desa`.
6. Upload `Foto Kepala Desa` jika tersedia.
7. Simpan dan publish.
8. Cek halaman Profil.

Standar isi sambutan:

- Diawali salam atau pembuka resmi.
- Menyebut tujuan portal desa.
- Singkat, jelas, dan tidak terlalu panjang.
- Hindari janji politik atau kalimat kampanye.

## 5. Edit Struktur Organisasi

Field utama:

- Nama.
- Jabatan.
- Parent ID/Jabatan.
- Foto.
- Urutan.
- Deskripsi.

Aturan `parent`:

- Kosongkan untuk jabatan paling atas, misalnya Kepala Desa.
- Isi dengan slug/ID parent untuk bawahan.
- Jangan mengubah parent jika belum memahami struktur tree.

Langkah:

1. Pilih `Struktur Organisasi Tree`.
2. Tambah atau edit perangkat desa.
3. Pastikan jabatan dan nama benar.
4. Isi urutan agar tampilan rapi.
5. Simpan dan publish.
6. Cek bagian Struktur Organisasi di halaman Profil.

Checklist:

- [ ] Nama perangkat benar.
- [ ] Jabatan benar.
- [ ] Urutan tampil sudah sesuai.
- [ ] Struktur atasan-bawahan benar.
- [ ] Foto resmi sudah mendapat izin.

## 6. Edit Data Dusun

Field:

- Nama dusun.
- Kepala dusun.
- Jumlah penduduk.
- Luas wilayah.
- Deskripsi.
- Urutan.

Langkah:

1. Pilih collection `Dusun`.
2. Edit dusun lama atau klik `New`.
3. Isi data terbaru.
4. Simpan dan publish.
5. Cek wilayah administrasi dan grafik populasi per dusun.

Catatan:

- Jumlah penduduk per dusun akan dipakai untuk grafik.
- Jika jumlah penduduk belum pasti, lebih baik menunggu data resmi.
- Gunakan angka tanpa titik pemisah ribuan pada field angka jika CMS meminta number.

## 7. Edit Demografi

Data demografi utama ada di `Halaman Website > Halaman Profil`.

Field yang biasanya diedit:

- Luas wilayah.
- Total penduduk.
- Penduduk pria.
- Penduduk wanita.
- Batas wilayah.
- Demografi pendidikan.

Langkah:

1. Buka `Halaman Website`.
2. Pilih `Halaman Profil`.
3. Edit angka demografi.
4. Simpan dan publish.
5. Cek kartu statistik dan grafik.

Checklist:

- [ ] Total penduduk sesuai data terbaru.
- [ ] Laki-laki + perempuan masuk akal terhadap total.
- [ ] Data pendidikan memakai sumber resmi.
- [ ] Batas wilayah sudah sesuai dokumen resmi.

## 8. Edit APBDes

Collection `Transparansi APBDes` dipakai untuk data pendapatan dan belanja.

Field:

- Nama sumber/pos.
- Jenis: Pendapatan atau Belanja.
- Tahun.
- Jumlah rupiah.
- Urutan.
- Deskripsi.

Langkah:

1. Pilih `Transparansi APBDes`.
2. Klik `New` atau edit data lama.
3. Pilih jenis dengan benar.
4. Isi tahun.
5. Isi jumlah rupiah tanpa simbol `Rp`.
6. Simpan dan publish.
7. Cek grafik APBDes pada halaman Profil.

Contoh:

| Field | Contoh |
|---|---|
| Nama | Dana Desa |
| Jenis | Pendapatan |
| Tahun | 2026 |
| Jumlah | 850000000 |
| Deskripsi | Transfer dari pemerintah pusat |

Checklist APBDes:

- [ ] Angka sudah disetujui Kaur Keuangan.
- [ ] Tahun benar.
- [ ] Pendapatan dan belanja tidak tertukar.
- [ ] Tidak menampilkan dokumen yang belum boleh publik.

## 9. Validasi Setelah Edit Profil

- [ ] Beranda terbuka normal.
- [ ] Halaman Profil terbuka normal.
- [ ] Struktur organisasi tampil rapi.
- [ ] Grafik demografi muncul.
- [ ] Grafik APBDes muncul.
- [ ] Footer menampilkan kontak yang benar.
- [ ] Tidak ada data placeholder.

## 10. Sumber Data Yang Disarankan

- Dokumen resmi pemerintah desa.
- Dokumen kecamatan/kabupaten.
- APBDes resmi.
- Data kependudukan internal yang sudah boleh diringkas untuk publik.
- Surat keputusan perangkat desa.
- Dokumen batas wilayah resmi.
