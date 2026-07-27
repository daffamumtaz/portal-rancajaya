# AKSES, KEAMANAN, DAN BACKUP

Portal Rancajaya - Tata Kelola Akun dan Risiko

Status dokumen: Draft awal  
Target pembaca: Kepala Desa, Sekdes, Admin Utama, PIC Teknis

## 1. Tujuan

Dokumen ini memastikan akses website tidak hanya dipegang satu orang, aman dari penyalahgunaan, dan tetap bisa dipulihkan saat ada pergantian pengurus.

## 2. Prinsip Akses

1. Minimal ada dua admin aktif: Admin Utama dan Backup Admin.
2. Akses pribadi mahasiswa/KKN harus dicabut atau dialihkan setelah handover.
3. Akun resmi desa lebih disarankan daripada akun pribadi.
4. Password tidak ditulis di dokumen yang dibagikan luas.
5. Setiap akun penting harus punya email pemulihan yang aktif.

## 3. Daftar Platform

| Platform | Fungsi | Risiko Jika Hilang |
|---|---|---|
| Netlify | Hosting, deploy, Identity, Git Gateway | Website sulit dikelola dan admin CMS terganggu |
| GitHub | Source code dan data konten | Perubahan kode/konten tidak bisa dikelola teknis |
| Decap CMS | Panel edit konten | Pengurus tidak bisa update website |
| Domain.go.id | Domain `.desa.id` | Domain tidak bisa diperpanjang/diatur |
| DNS provider | Arah domain ke Netlify | Website domain resmi bisa mati |
| Google Form | Form layanan surat | Layanan administrasi online terganggu |
| Google Drive | Penyimpanan dokumen/form response | Data layanan bisa hilang |

## 4. Tabel Akses

Lengkapi dan simpan versi aman.

| Platform | URL Login | Email Akun | Pemegang Utama | Backup | 2FA | Catatan |
|---|---|---|---|---|---|---|
| Netlify | `https://app.netlify.com` | `[ISI]` | `[ISI]` | `[ISI]` | `[YA/TIDAK]` | `[ISI]` |
| GitHub | `https://github.com` | `[ISI]` | `[ISI]` | `[ISI]` | `[YA/TIDAK]` | `[ISI]` |
| CMS | `[DOMAIN]/admin` | `[ISI]` | `[ISI]` | `[ISI]` | `[YA/TIDAK]` | `[ISI]` |
| Domain.go.id | `https://domain.go.id` | `[ISI]` | `[ISI]` | `[ISI]` | `[YA/TIDAK]` | `[ISI]` |
| Google Form | `https://forms.google.com` | `[ISI]` | `[ISI]` | `[ISI]` | `[YA/TIDAK]` | `[ISI]` |

## 5. Role Akses

| Role | Boleh Melakukan | Tidak Boleh Melakukan |
|---|---|---|
| Admin Utama CMS | Publish, unpublish, edit konten, tambah editor | Mengubah DNS/domain tanpa koordinasi |
| Editor Konten | Membuat draft dan edit konten | Publish konten penting tanpa approval |
| PIC Layanan | Edit link formulir dan FAQ layanan | Mengubah konfigurasi website |
| PIC Teknis | Netlify, GitHub, deploy, domain, kode | Mengubah data resmi tanpa persetujuan |
| Backup Admin | Mengambil alih jika admin utama berhalangan | Menghapus akses admin utama tanpa keputusan |

## 6. Prosedur Menambah Admin CMS

1. Pastikan admin baru ditunjuk secara resmi.
2. Login ke Netlify.
3. Buka project Portal Rancajaya.
4. Buka menu Identity.
5. Invite user baru.
6. User menerima email undangan.
7. User membuat password.
8. Uji login ke `/admin`.
9. Catat di tabel akses.

## 7. Prosedur Menghapus Admin Lama

Dilakukan jika:

- Pengurus pindah tugas.
- Email tidak aktif.
- Akun tidak boleh lagi mengakses CMS.
- Ada risiko keamanan.

Langkah:

1. Pastikan keputusan disetujui Admin Utama/Sekdes.
2. Login Netlify.
3. Buka Identity.
4. Pilih user.
5. Hapus atau nonaktifkan akses.
6. Cek user tidak bisa login lagi.
7. Update tabel akses.

## 8. Kebijakan Password

Password disarankan:

- Minimal 12 karakter.
- Mengandung huruf besar, huruf kecil, angka, dan simbol.
- Tidak memakai nama desa, tanggal lahir, atau nama jabatan.
- Tidak dibagikan lewat chat umum.
- Diganti saat pergantian pengurus.

## 9. Two-Factor Authentication

Untuk akun penting seperti Netlify, GitHub, Domain.go.id, dan Google:

- Aktifkan 2FA jika tersedia.
- Simpan recovery code di tempat aman.
- Pastikan backup admin tahu prosedur pemulihan.

## 10. Backup Konten

Konten website tersimpan di GitHub. Namun tetap perlu backup operasional:

- Export daftar akses dalam dokumen internal.
- Simpan copy dokumen handover.
- Simpan copy foto penting desa.
- Simpan copy Google Form dan spreadsheet response.
- Simpan dokumen domain dan bukti pembayaran.

Frekuensi:

| Backup | Frekuensi | PIC |
|---|---:|---|
| Daftar akses | 3 bulan sekali | Admin/PIC Teknis |
| Foto dan aset | 3 bulan sekali | Admin |
| Dokumen domain | Saat ada perubahan | PIC Domain |
| Google Form response | Bulanan jika aktif | PIC Layanan |

## 11. Prosedur Jika Akses Hilang

Jika akses CMS hilang:

1. Coba reset password.
2. Hubungi Admin Utama.
3. Jika Admin Utama tidak bisa, hubungi Backup Admin.
4. Jika semua user CMS bermasalah, PIC Teknis cek Netlify Identity.

Jika akses Netlify hilang:

1. Cek pemilik akun/team.
2. Gunakan email recovery.
3. Hubungi backup owner.
4. Jika perlu, hubungi support Netlify.

Jika akses domain hilang:

1. Hubungi Pejabat Nama Domain.
2. Cek akun Domain.go.id.
3. Koordinasi dengan Diskominfo/Pemda.

## 12. Checklist Keamanan Triwulanan

- [ ] Daftar admin masih sesuai.
- [ ] Akun pengurus lama sudah dicabut.
- [ ] Password akun penting diganti jika ada pergantian.
- [ ] 2FA aktif untuk akun penting.
- [ ] Domain belum mendekati jatuh tempo.
- [ ] Google Form response tidak publik.
- [ ] Tidak ada dokumen pribadi warga di website.
- [ ] Backup akses tersimpan aman.
