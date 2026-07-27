# OPERASIONAL NETLIFY

Portal Rancajaya - Hosting, Deploy, Identity, dan Git Gateway

Status dokumen: Draft awal  
Target pembaca: PIC teknis, Admin Utama, Backup Admin

## 1. Fungsi Netlify

Netlify digunakan untuk:

- Hosting website.
- Menjalankan build otomatis dari GitHub.
- Menyediakan URL sementara `.netlify.app`.
- Mengelola domain custom.
- Mengelola HTTPS/SSL.
- Mengelola Netlify Identity untuk login CMS.
- Mengaktifkan Git Gateway untuk Decap CMS.

## 2. Data Project

Lengkapi saat finalisasi:

| Item | Nilai |
|---|---|
| Nama team Netlify | `[ISI]` |
| Nama project/site | `[ISI]` |
| URL Netlify | `[ISI]` |
| URL domain custom | `[ISI]` |
| Repository GitHub | `[ISI]` |
| Production branch | `main` |
| Build command | `npm run build` |
| Publish directory | `dist` |
| Base directory | `[ISI jika ada]` |

## 3. Build Dan Deploy

Website dibangun otomatis setiap ada perubahan yang masuk ke branch produksi.

Alur:

1. Admin publish konten dari Decap CMS.
2. Decap CMS membuat perubahan di GitHub.
3. Netlify mendeteksi perubahan.
4. Netlify menjalankan `npm run build`.
5. Hasil build masuk ke folder `dist`.
6. Website publik diperbarui.

## 4. Cara Cek Deploy

1. Login ke Netlify.
2. Pilih project Portal Rancajaya.
3. Buka menu `Deploys`.
4. Lihat deploy terbaru.
5. Status sukses biasanya ditandai `Published` atau `Ready`.
6. Jika gagal, buka deploy log.

## 5. Cara Membaca Deploy Log

Deploy log menampilkan proses build. Bagian yang perlu dicek:

- Apakah `npm install` berhasil.
- Apakah `npm run build` berhasil.
- Apakah ada error dari Astro.
- Apakah ada error content schema.
- Apakah publish directory `dist` ditemukan.

Contoh masalah umum:

| Gejala | Kemungkinan Penyebab | Solusi |
|---|---|---|
| Build gagal setelah edit CMS | Field wajib kosong atau format tanggal/angka salah | Perbaiki konten terakhir |
| Gambar tidak muncul | Path gambar salah atau upload belum masuk | Upload ulang gambar |
| Halaman detail berita tidak dibuat | Format markdown/frontmatter salah | Perbaiki entry berita |
| Website lama masih tampil | Deploy belum selesai atau cache browser | Tunggu, refresh, cek deploy |

## 6. Cara Trigger Deploy Ulang

Gunakan jika website belum berubah padahal konten sudah benar.

1. Buka project Netlify.
2. Buka `Deploys`.
3. Pilih opsi deploy ulang atau `Trigger deploy`.
4. Pilih deploy tanpa clear cache dulu.
5. Jika masih bermasalah, lakukan deploy dengan clear cache.

Catatan:

- Jangan sering clear cache jika tidak perlu.
- Jika deploy gagal berulang, hubungi PIC teknis.

## 7. Rollback Deploy

Rollback digunakan jika website produksi rusak setelah perubahan terbaru.

Langkah umum:

1. Buka `Deploys`.
2. Cari deploy terakhir yang masih normal.
3. Buka detail deploy tersebut.
4. Pilih opsi publish/rollback deploy.
5. Cek website publik.

Catatan:

- Rollback hanya mengembalikan tampilan website, bukan otomatis memperbaiki konten di repository.
- Setelah rollback, PIC teknis tetap harus memperbaiki sumber masalah.

## 8. Netlify Identity

Netlify Identity digunakan untuk login admin CMS.

Operasi yang perlu didokumentasikan:

- Menambah user admin.
- Menghapus user admin.
- Reset password.
- Menonaktifkan akses user lama.
- Memastikan email undangan diterima.

Tabel admin:

| Nama | Email | Role | Status | Catatan |
|---|---|---|---|---|
| `[ISI]` | `[ISI]` | Admin Utama | Aktif | `[ISI]` |
| `[ISI]` | `[ISI]` | Backup Admin | Aktif | `[ISI]` |

## 9. Git Gateway

Git Gateway memungkinkan pengguna Netlify Identity mengedit konten Decap CMS tanpa perlu akun GitHub langsung.

Yang harus dipastikan:

- Identity aktif.
- Git Gateway aktif.
- Site tersambung ke repository GitHub.com atau GitLab.com.
- Branch CMS sesuai branch produksi, misalnya `main`.
- User CMS yang diberi akses adalah user yang sah.

Rujukan resmi: Netlify menjelaskan bahwa Git Gateway memungkinkan Identity users mengedit konten Decap CMS tanpa akun GitHub/GitLab atau akses langsung ke repository, selama site tersambung ke repository yang didukung.

Sumber: https://docs.netlify.com/manage/security/secure-access-to-sites/git-gateway/

## 10. Domain Dan HTTPS

Jika memakai domain custom:

- Tambahkan domain di Netlify.
- Atur DNS agar mengarah ke Netlify.
- Tunggu verifikasi DNS.
- Pastikan HTTPS aktif.
- Pastikan `/admin` tetap bisa login setelah domain aktif.

Netlify menyediakan HTTPS otomatis dengan Let's Encrypt setelah domain custom diarahkan dengan benar.

Sumber: https://docs.netlify.com/manage/domains/secure-domains-with-https/https-ssl/

## 11. Checklist Netlify Bulanan

- [ ] Website bisa dibuka.
- [ ] `/admin` bisa dibuka.
- [ ] Minimal satu admin bisa login.
- [ ] Deploy terakhir sukses.
- [ ] Tidak ada deploy gagal berulang.
- [ ] Domain custom masih aktif.
- [ ] HTTPS aktif.
- [ ] Git Gateway aktif.
- [ ] User lama yang tidak bertugas sudah dinonaktifkan.

## 12. Saat Terjadi Masalah

Jika website tidak bisa dibuka:

1. Cek koneksi internet.
2. Cek URL Netlify.
3. Cek domain custom.
4. Cek status deploy.
5. Cek apakah DNS bermasalah.
6. Hubungi PIC teknis.

Jika admin tidak bisa login:

1. Cek apakah email terdaftar di Identity.
2. Reset password.
3. Cek apakah Git Gateway aktif.
4. Cek apakah HTTPS aktif pada domain custom.
5. Hubungi PIC teknis.
