# Batch Release

Fungsi `release-ready` membaca konten berstatus `Siap` dari branch yang diset pada `RELEASE_BRANCH`, memvalidasi seluruh entri, lalu menulis status `Terbit` dalam satu commit GitHub.

Set environment variables berikut di Netlify:

- `GITHUB_TOKEN`: token atau GitHub App token dengan izin membaca repository dan menulis commit ke branch produksi.
- `GITHUB_REPOSITORY`: format `owner/repository`, atau gunakan pasangan `GITHUB_OWNER` dan `GITHUB_REPO`.
- `RELEASE_BRANCH`: branch produksi, default `main`.
- `RELEASE_PUBLISHER_EMAILS`: daftar email Publisher dipisahkan koma, sebagai fallback selain role `publisher` atau `admin`.

`GITHUB_TOKEN` tidak pernah dikirim ke browser. Halaman `/admin/release.html` hanya mengirim token sesi Netlify Identity ke function, dan function memeriksa role/email Publisher sebelum membaca atau menulis repository.
