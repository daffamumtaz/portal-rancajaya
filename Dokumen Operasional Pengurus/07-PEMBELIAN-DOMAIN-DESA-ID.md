# PEMBELIAN DAN AKTIVASI DOMAIN DESA.ID

Portal Rancajaya - Panduan Administratif Domain Resmi

Status dokumen: Draft awal  
Target pembaca: Kepala Desa, Sekdes, PIC Domain, PIC Teknis, Diskominfo/Pemda terkait

## 1. Tujuan

Dokumen ini menjadi checklist untuk mengajukan dan mengaktifkan domain resmi `.desa.id`, misalnya:

`rancajaya.desa.id`

Domain resmi meningkatkan kepercayaan publik karena menunjukkan website adalah portal resmi desa.

## 2. Catatan Penting

Berdasarkan informasi pada Domain.go.id, pendaftaran, perpanjangan, dan pengelolaan nama domain dilakukan melalui website Domain.go.id. Domain.go.id hanya mengurus nama domain, bukan hosting, DNS server, email, atau website.

Sumber: https://domain.go.id/

Artinya:

- Domain diajukan melalui Domain.go.id.
- Website tetap di-hosting di Netlify.
- DNS perlu diarahkan agar domain membuka website Netlify.
- Email desa jika ingin dibuat perlu layanan terpisah.

## 3. Biaya

Berdasarkan informasi Domain.go.id:

- Biaya domain per tahun: Rp50.000 + PPN.
- Khusus `.desa.id` dibebaskan untuk tahun pertama.

Catatan: cek ulang biaya di Domain.go.id saat benar-benar mengajukan karena kebijakan bisa berubah.

## 4. Dokumen Persyaratan Domain Desa.ID

Berdasarkan daftar persyaratan `.desa.id` pada Domain.go.id, siapkan:

- Surat Permohonan Nama Domain `.desa.id` dari Pejabat Instansi atas nama bupati/walikota kepada Direktur Jenderal Teknologi Pemerintah Digital.
- Dasar hukum peraturan daerah kabupaten/kota tentang pembentukan pemerintahan desa di kabupaten/kota.
- Surat kuasa dari kepala desa untuk menyerahkan pendaftaran Nama Domain Pemerintah Desa pada Pejabat Nama Domain.
- Surat penunjukan Pejabat Nama Domain, minimal setingkat Administrator atau JF Ahli Madya.
- Kartu ASN Pejabat Nama Domain pada Pemerintah Daerah kabupaten/kota.
- Dokumen pendukung lain jika diminta oleh Domain.go.id atau instansi terkait.

Sumber: https://domain.go.id/

## 5. Pihak Yang Perlu Dilibatkan

| Pihak | Peran |
|---|---|
| Kepala Desa | Memberi kuasa dan persetujuan |
| Sekdes | Koordinasi administrasi |
| Pejabat Nama Domain | Pengajuan resmi domain |
| Diskominfo/Pemda | Pendampingan administrasi dan teknis |
| PIC Teknis Web | Penyambungan domain ke Netlify |
| Admin Web Desa | Uji website dan CMS setelah domain aktif |

## 6. Checklist Sebelum Mengajukan

- [ ] Nama domain sudah diputuskan.
- [ ] Ejaan domain sudah benar.
- [ ] Kepala Desa menyetujui nama domain.
- [ ] Pejabat Nama Domain sudah ditentukan.
- [ ] Surat permohonan sudah dibuat.
- [ ] Surat kuasa sudah dibuat.
- [ ] Dasar hukum pembentukan desa tersedia.
- [ ] Identitas/kartu ASN Pejabat Nama Domain tersedia.
- [ ] File dokumen sudah discan PDF.
- [ ] PIC teknis siap mengatur DNS.

## 7. Pemilihan Nama Domain

Rekomendasi:

- `rancajaya.desa.id`

Hindari:

- Nama terlalu panjang.
- Singkatan yang tidak dikenal warga.
- Tanda minus jika tidak perlu.
- Ejaan yang berbeda dari nama resmi desa.

## 8. Alur Pengajuan

1. Tentukan nama domain.
2. Siapkan dokumen persyaratan.
3. Buat akun atau login di Domain.go.id.
4. Ajukan domain `.desa.id`.
5. Upload dokumen.
6. Tunggu verifikasi.
7. Jika ada revisi, lengkapi dokumen.
8. Setelah domain aktif, lanjut ke konfigurasi DNS.

## 9. Penyambungan Domain Ke Netlify

Setelah domain aktif:

1. Login ke Netlify.
2. Buka project Portal Rancajaya.
3. Masuk ke `Domain management`.
4. Pilih `Add domain`.
5. Masukkan domain final, contoh `rancajaya.desa.id`.
6. Ikuti instruksi DNS dari Netlify.
7. Atur DNS di tempat pengelolaan domain/DNS.
8. Tunggu propagasi DNS.
9. Pastikan HTTPS aktif.
10. Uji website publik.
11. Uji `/admin`.

Rujukan Netlify:

- Custom domain: https://docs.netlify.com/manage/domains/configure-domains/bring-a-domain-to-netlify/
- External DNS: https://docs.netlify.com/manage/domains/configure-domains/configure-external-dns/
- HTTPS: https://docs.netlify.com/manage/domains/secure-domains-with-https/https-ssl/

## 10. DNS Yang Perlu Dicatat

Lengkapi saat konfigurasi:

| Tipe Record | Nama/Host | Value/Target | TTL | Catatan |
|---|---|---|---|---|
| `[ISI]` | `[ISI]` | `[ISI]` | `[ISI]` | `[ISI]` |
| `[ISI]` | `[ISI]` | `[ISI]` | `[ISI]` | `[ISI]` |

## 11. Checklist Setelah Domain Aktif

- [ ] Domain utama membuka website.
- [ ] HTTPS aktif.
- [ ] Tidak ada peringatan SSL.
- [ ] `/admin` bisa dibuka.
- [ ] Admin bisa login.
- [ ] Publish dari CMS tetap berhasil.
- [ ] Netlify deploy tetap sukses.
- [ ] Sitemap/SEO memakai domain final.
- [ ] Domain lama `.netlify.app` dicatat sebagai fallback.

## 12. Perpanjangan Domain

Catat:

| Item | Nilai |
|---|---|
| Domain | `[ISI]` |
| Tanggal aktif | `[ISI]` |
| Tanggal jatuh tempo | `[ISI]` |
| PIC perpanjangan | `[ISI]` |
| Kontak backup | `[ISI]` |

Aturan internal:

- Cek masa berlaku minimal 3 bulan sebelum jatuh tempo.
- Jangan menunggu domain mati.
- Simpan bukti pembayaran dan dokumen pengajuan.

## 13. Risiko

| Risiko | Pencegahan |
|---|---|
| Domain kedaluwarsa | Catat tanggal jatuh tempo dan PIC |
| DNS salah | Simpan record DNS final |
| Admin tidak bisa login setelah domain aktif | Pastikan HTTPS aktif dan Git Gateway berjalan |
| Akses Domain.go.id hilang | Simpan pemilik akun dan backup PIC |
| Nama domain salah ejaan | Review sebelum pengajuan |
