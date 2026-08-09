# Manual Book Penggunaan Decap CMS
## Portal Desa Rancajaya

Website Desa Rancajaya dikelola menggunakan **Decap CMS**. Sistem ini memungkinkan Anda (Admin) untuk memperbarui konten website dengan mudah tanpa perlu memahami kode pemrograman (HTML/CSS/Javascript).

### 1. Cara Mengakses Halaman Admin
1. Buka browser web (Chrome, Firefox, Safari).
2. Kunjungi halaman utama website Desa Rancajaya.
3. Tambahkan `/admin` di akhir URL. Contoh: `https://rancajaya.desa.id/admin`.
4. Anda akan melihat halaman login.

### 2. Cara Login
1. Pada halaman login, klik tombol **"Masuk dengan Netlify Identity"**.
2. Masukkan alamat email dan kata sandi yang telah didaftarkan.
3. Klik **"Masuk"**.
4. Setelah berhasil masuk, Anda akan diarahkan ke *Dashboard* utama Decap CMS yang berwarna hijau gelap dan emas (Agraris).

---

### 3. Memahami Struktur Konten (Collections)
Di sisi kiri layar (Sidebar), Anda akan melihat beberapa menu (Collections). Berikut penjelasan untuk setiap menu:

**Aturan entri:** Struktur Organisasi dan Dusun adalah koleksi tetap sehingga hanya dapat diedit. Berita, APBDes, Potensi, UMKM, Layanan, Kontak, FAQ, dan Galeri dapat ditambah melalui tombol **Tambah**. Penghapusan tetap dibatasi agar data publik tidak hilang tanpa pemeriksaan.

#### A. Halaman Website
Digunakan untuk mengubah konten utama Beranda, Profil, Potensi, dan Layanan. Data APBDes, statistik, kontak, FAQ, serta daftar layanan dikelola pada koleksi masing-masing agar dapat dipakai ulang di beberapa halaman.

#### B. Pengaturan Umum
Mengatur data inti website seperti:
- Nama Desa, Kecamatan, Kabupaten, Provinsi.
- Visi & Misi Desa.
- Sejarah Singkat.
- Nomor Telepon Resmi, Email, Alamat Lengkap, dan Jam Operasional Kantor.
*Catatan: Pastikan Anda tidak menghapus data pada Pengaturan Umum, melainkan hanya mengedit teksnya.*

#### C. Berita & Informasi
Kumpulan artikel, pengumuman, dan berita agenda desa.
- Klik **"+ Berita & Informasi"** untuk membuat berita baru.
- Isi *Judul*, *Tanggal*, dan pilih *Kategori* (Berita, Agenda, Artikel, Pengumuman). Kategori sangat penting agar sistem filter di halaman Informasi berfungsi.
- Anda dapat mengunggah gambar *Thumbnail* dengan menekan area **"Pilih gambar"**.
- Tuliskan ringkasan dan isi lengkap berita pada kolom *Konten*.

#### D. Struktur Organisasi Tree
Koleksi tetap untuk posisi organisasi. Entri yang tersedia dapat diedit, tetapi tidak dapat dibuat atau dihapus dari CMS. Gunakan **Atasan Langsung** untuk membentuk tree; Kepala Desa menjadi akar struktur.

#### E. Dusun
Koleksi tetap untuk **Mulyasari, Sengon, dan Buwer**. Entri dapat diedit, tetapi tidak dibuat atau dihapus dari CMS.

#### F. Transparansi APBDes
Masukkan setiap sumber pendapatan dan pos belanja sebagai satu entri. Isi tahun anggaran, jenis, jumlah rupiah, dan urutan. Halaman Profil menampilkan ringkasan, bar chart, serta Top 5 pendapatan dan belanja berdasarkan tahun aktif pada **Pengaturan**.

#### G. Potensi dan Statistik
Satu koleksi untuk statistik **Pertanian** dan **Peternakan**. Koleksi ini dipakai oleh halaman Potensi.

#### H. Kelompok Tani dan UMKM
Kelompok Tani menyimpan data kelompok, dusun, komoditas, dan anggota. **UMKM** adalah satu koleksi untuk seluruh usaha warga, termasuk kategori, produk, dusun, foto, dan status unggulan.

#### I. Administrasi Daring, Kontak, FAQ, dan Galeri
Administrasi Daring menyimpan layanan dan tautan formulir. Kontak menyimpan nomor penting desa. FAQ menyimpan pertanyaan dan jawaban. Galeri menyimpan foto kegiatan; kategori **Pertanian**, **Peternakan**, **UMKM**, atau **Potensi** membuat foto masuk ke halaman Potensi.

---

### 4. Workflow Native Decap
CMS menggunakan workflow bawaan Decap dengan tiga tahap:
- **Draf**: konten masih disusun dan belum masuk situs publik.
- **Dalam Review**: konten menunggu pemeriksaan editor.
- **Siap Terbit**: konten sudah disetujui untuk diterbitkan melalui tombol native Decap.

**Alur kerja konten:**
1. Buat atau edit entri, lalu pastikan kolom wajib, tautan, angka, dan foto sudah benar.
2. Simpan sebagai **Draf** atau pindahkan ke **Dalam Review**.
3. Editor memeriksa isi, sumber data, dan tampilan pratinjau.
4. Setelah disetujui, pindahkan ke **Siap Terbit** dan gunakan tombol **Terbitkan** bawaan Decap.
5. Tunggu proses build Netlify selesai, lalu periksa Public View.

Fitur rilis batch ditahan sampai alur tracking progress stabil. Konten yang tampil publik juga harus memiliki **Tampilkan di Publik** aktif.

---

### 5. Pengelolaan Gambar (Media Library)
- Gunakan menu **"Media"** di header Decap untuk upload langsung seperti alur native sebelumnya.
- Tautan **"Unggah Media"** di pojok kanan bawah juga membuka pintu masuk Media Library.
- Klik **"Unggah"** untuk mengelola seluruh gambar desa melalui Media Library Decap CMS.
- Gunakan tombol **"Unggah"** atau **"Pilih gambar"** saat mengisi field foto.
- Disarankan untuk **mengompres foto hingga di bawah 1 MB** agar website tetap cepat diakses warga.

Selamat mengelola Portal Desa Rancajaya!
