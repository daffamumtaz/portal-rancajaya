# SOP LAYANAN SURAT DAN ADMINISTRASI DARING

Portal Rancajaya - Pengelolaan Informasi Layanan

Status dokumen: Draft awal  
Target pembaca: Admin CMS, PIC pelayanan, perangkat desa bagian administrasi

## 1. Tujuan SOP

SOP ini menjelaskan cara mengelola informasi layanan administrasi pada website. Website ini menampilkan informasi dan link formulir, tetapi tidak memproses surat otomatis.

## 2. Batasan Sistem

Website boleh digunakan untuk:

- Menampilkan daftar layanan administrasi.
- Menampilkan deskripsi layanan.
- Menampilkan link Google Form atau formulir eksternal.
- Menampilkan kontak kantor desa.
- Menampilkan FAQ layanan.

Website tidak digunakan untuk:

- Menyimpan NIK dan KK secara publik.
- Menerbitkan surat otomatis.
- Menampilkan daftar pemohon.
- Mengunggah dokumen pribadi warga ke halaman publik.
- Menggantikan verifikasi manual perangkat desa.

## 3. Collection Yang Digunakan

| Collection | Fungsi |
|---|---|
| Administrasi Daring | Daftar layanan dan link formulir |
| Kontak | Kontak kantor desa, pengaduan, kesehatan, keamanan |
| FAQ | Pertanyaan dan jawaban layanan |
| Halaman Website > Halaman Layanan | Judul dan subtitle halaman layanan |
| Pengaturan Umum | Alamat, telepon, email, jam layanan |

## 4. Data Minimal Layanan

Setiap layanan minimal memiliki:

- Nama layanan.
- Deskripsi.
- Link formulir jika tersedia.
- Ikon atau singkatan.
- Urutan tampil.

Contoh:

| Field | Contoh |
|---|---|
| Nama Layanan | Surat Keterangan Tidak Mampu |
| Deskripsi | Layanan pengajuan SKTM untuk keperluan administrasi warga |
| Link Formulir | `https://forms.gle/...` |
| Ikon | SKTM |
| Urutan | 1 |

## 5. Cara Menambah Layanan

1. Masuk CMS.
2. Pilih `Administrasi Daring`.
3. Klik `New`.
4. Isi nama layanan.
5. Isi deskripsi.
6. Masukkan link formulir jika tersedia.
7. Isi ikon/singkatan.
8. Isi urutan.
9. Save, review, publish.
10. Cek halaman Layanan.

## 6. Cara Mengubah Link Formulir

1. Pilih `Administrasi Daring`.
2. Buka layanan yang ingin diubah.
3. Ganti field `Link Formulir`.
4. Save dan publish.
5. Buka halaman Layanan.
6. Klik tombol layanan untuk memastikan link benar.

## 7. Cara Menonaktifkan Formulir Sementara

Jika layanan masih ada tetapi formulir belum siap:

1. Buka layanan terkait.
2. Kosongkan field `Link Formulir`.
3. Tambahkan keterangan di deskripsi jika diperlukan.
4. Publish.

Website akan menampilkan status bahwa formulir belum tersedia.

## 8. SOP Google Form

Jika layanan memakai Google Form:

- Gunakan akun resmi desa, bukan akun pribadi mahasiswa.
- Pastikan akses response diberikan ke PIC pelayanan.
- Jangan tampilkan spreadsheet response ke publik.
- Batasi pertanyaan hanya pada data yang benar-benar dibutuhkan.
- Jika meminta upload dokumen, pastikan folder Google Drive aman dan tidak publik.
- Cek form minimal sebulan sekali.

Checklist Google Form:

- [ ] Form bisa dibuka tanpa login jika ditujukan untuk warga umum.
- [ ] Pertanyaan jelas.
- [ ] Ada kontak layanan.
- [ ] Response masuk ke email/PIC yang benar.
- [ ] Link yang dipasang di CMS sudah benar.

## 9. Daftar Layanan Operasional

Lengkapi tabel ini saat finalisasi:

| Layanan | Link Form | PIC Penerima | Waktu Respons | Catatan |
|---|---|---|---|---|
| SKTM | `[ISI]` | `[ISI]` | `[ISI]` | `[ISI]` |
| SKU | `[ISI]` | `[ISI]` | `[ISI]` | `[ISI]` |
| Surat Pengantar | `[ISI]` | `[ISI]` | `[ISI]` | `[ISI]` |
| Surat Pindah | `[ISI]` | `[ISI]` | `[ISI]` | `[ISI]` |

## 10. Kontak Layanan

Collection `Kontak` digunakan untuk menampilkan:

- Kantor desa.
- Pengaduan desa.
- Bidan desa.
- Bhabinkamtibmas.
- Kontak keamanan/kesehatan lain.

Field kontak:

- Nama kontak.
- Jenis.
- Telepon.
- Email.
- Alamat.
- Deskripsi.
- Urutan.

Checklist kontak:

- [ ] Nomor telepon aktif.
- [ ] Nomor ditulis konsisten.
- [ ] Email aktif.
- [ ] Deskripsi tidak terlalu panjang.
- [ ] Kontak darurat benar-benar bisa dihubungi.

## 11. FAQ Layanan

FAQ digunakan untuk menjawab pertanyaan umum warga.

Contoh FAQ:

- Apa saja syarat SKTM?
- Berapa lama proses SKU?
- Apakah layanan dikenakan biaya?
- Bagaimana cara mendaftarkan UMKM?

Aturan FAQ:

- Jawaban singkat dan jelas.
- Hindari jawaban yang menimbulkan janji pasti jika proses bergantung verifikasi.
- Jika ada biaya, tulis sesuai kebijakan resmi.

## 12. Checklist Bulanan Layanan

- [ ] Semua link formulir bisa dibuka.
- [ ] Response Google Form masuk ke PIC yang benar.
- [ ] Kontak kantor desa aktif.
- [ ] Kontak pengaduan aktif.
- [ ] FAQ masih relevan.
- [ ] Tidak ada data pribadi tampil di website.

## 13. Risiko Dan Pencegahan

| Risiko | Pencegahan |
|---|---|
| Link form mati | Cek bulanan |
| Response masuk ke akun pribadi lama | Gunakan akun resmi desa |
| Data pribadi bocor | Jangan publish spreadsheet response |
| Warga mengira surat langsung jadi | Jelaskan bahwa formulir adalah pra-pengajuan |
| Kontak tidak aktif | Tetapkan PIC layanan dan backup |
