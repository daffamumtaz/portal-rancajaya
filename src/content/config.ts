import { z, defineCollection } from 'astro:content';

const labelValueSchema = z.object({
  label: z.string(),
  value: z.number(),
});

const releaseStatusSchema = z.enum(['Draf', 'Siap', 'Terbit']).default('Terbit');

const sourceMetadataFields = {
  tahun_data: z.coerce.number().int().min(2000).max(2100).optional(),
  sumber_data: z.string().optional(),
  status_validasi: z.enum(['Dummy', 'Perlu Verifikasi', 'Terverifikasi']).default('Dummy'),
};

const publicationFields = {
  release_status: releaseStatusSchema,
  published_at: z.coerce.date().optional(),
  aktif: z.boolean().default(true),
};

const beritaCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    category: z.enum(['Berita', 'Agenda', 'Artikel', 'Pengumuman']),
    thumbnail: z.string().optional(),
    excerpt: z.string(),
    author: z.string().default('Admin Desa'),
    featured: z.boolean().default(false),
    ...publicationFields,
  }),
});

const strukturOrganisasiCollection = defineCollection({
  type: 'content',
  schema: z.object({
    nama: z.string(),
    jabatan: z.string(),
    parent: z.string().optional(),
    foto: z.string().optional(),
    urutan: z.number(),
    deskripsi: z.string().optional(),
    ...sourceMetadataFields,
    ...publicationFields,
  }),
});

const dusunCollection = defineCollection({
  type: 'content',
  schema: z.object({
    nama: z.string(),
    kepala_dusun: z.string().optional(),
    jumlah_penduduk: z.number().optional(),
    jumlah_pria: z.number().optional(),
    jumlah_wanita: z.number().optional(),
    jumlah_kk: z.number().optional(),
    luas_wilayah: z.string().optional(),
    deskripsi: z.string(),
    urutan: z.number(),
    ...sourceMetadataFields,
    ...publicationFields,
  }),
});

const apbdesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    nama: z.string(),
    jenis: z.enum(['Pendapatan', 'Belanja']),
    tahun: z.coerce.number().int().min(2000).max(2100),
    versi: z.enum(['Awal', 'Perubahan']).default('Awal'),
    jumlah: z.number(),
    realisasi: z.number().optional(),
    urutan: z.number(),
    deskripsi: z.string().optional(),
    tanggal_pembaruan: z.coerce.date().optional(),
    ...sourceMetadataFields,
    ...publicationFields,
  }),
});

const galeriCollection = defineCollection({
  type: 'content',
  schema: z.object({
    judul: z.string(),
    tanggal: z.date(),
    kategori: z.enum(['Kegiatan', 'Pembangunan', 'Budaya', 'Pertanian', 'Peternakan', 'UMKM', 'Potensi', 'Lainnya']),
    foto: z.string(),
    deskripsi: z.string(),
    alt_text: z.string().optional(),
    ...publicationFields,
  }),
});

const kelompokTaniCollection = defineCollection({
  type: 'content',
  schema: z.object({
    nama: z.string(),
    ketua: z.string(),
    dusun: z.string(),
    komoditas_utama: z.string(),
    jumlah_anggota: z.number(),
    deskripsi: z.string(),
    kontak: z.string().optional(),
    ...publicationFields,
  }),
});

const potensiStatistikCollection = defineCollection({
  type: 'content',
  schema: z.object({
    kategori: z.enum(['Pertanian', 'Peternakan']),
    label: z.string(),
    value: z.string(),
    keterangan: z.string().optional(),
    satuan: z.string().optional(),
    urutan: z.number(),
    ...sourceMetadataFields,
    ...publicationFields,
  }),
});

const umkmCollection = defineCollection({
  type: 'content',
  schema: z.object({
    nama: z.string(),
    pemilik: z.string(),
    kategori: z.enum(['Makanan', 'Minuman', 'Kerajinan', 'Jasa', 'Pertanian', 'Lainnya']),
    produk_utama: z.string(),
    dusun: z.string().optional(),
    kontak: z.string().optional(),
    foto: z.string().optional(),
    deskripsi: z.string(),
    featured: z.boolean().default(false),
    tanggal_pembaruan: z.coerce.date().optional(),
    sumber_data: z.string().optional(),
    ...publicationFields,
  }),
});

const layananAdministrasiCollection = defineCollection({
  type: 'content',
  schema: z.object({
    nama: z.string(),
    kategori: z.enum(['Administrasi Kependudukan', 'Surat Pengantar', 'Usaha', 'Sosial', 'Lainnya']).default('Administrasi Kependudukan'),
    deskripsi: z.string(),
    link: z.string().optional(),
    ikon: z.string().optional(),
    persyaratan: z.array(z.string()).default([]),
    biaya: z.string().default('Gratis'),
    durasi: z.string().default('Sesuai kelengkapan berkas'),
    kontak: z.string().optional(),
    diperbarui_pada: z.coerce.date().optional(),
    sumber_data: z.string().optional(),
    urutan: z.number(),
    ...publicationFields,
  }),
});

const kontakCollection = defineCollection({
  type: 'content',
  schema: z.object({
    nama: z.string(),
    jenis: z.enum(['Desa', 'Kesehatan', 'Keamanan', 'Darurat', 'Layanan']),
    telepon: z.string(),
    email: z.string().optional(),
    alamat: z.string().optional(),
    deskripsi: z.string(),
    urutan: z.number(),
    ...publicationFields,
  }),
});

const faqCollection = defineCollection({
  type: 'content',
  schema: z.object({
    pertanyaan: z.string(),
    jawaban: z.string(),
    kategori: z.enum(['Administrasi', 'Layanan', 'Umum', 'Potensi']).default('Umum'),
    urutan: z.number(),
    tanggal_pembaruan: z.coerce.date().optional(),
    sumber_data: z.string().optional(),
    ...publicationFields,
  }),
});

const pengaturanCollection = defineCollection({
  type: 'data',
  schema: z.object({
    nama_desa: z.string().optional(),
    kecamatan: z.string().optional(),
    kabupaten: z.string().optional(),
    provinsi: z.string().optional(),
    visi: z.string().optional(),
    sejarah: z.string().optional(),
    misi: z.array(z.string()).optional(),
    tujuan: z.array(z.string()).optional(),
    alamat_kantor: z.string().optional(),
    telepon: z.string().optional(),
    email: z.string().optional(),
    jam_operasional: z.string().optional(),
    facebook: z.string().url().optional(),
    youtube: z.string().url().optional(),
    koordinat_latitude: z.coerce.number().min(-90).max(90).optional(),
    koordinat_longitude: z.coerce.number().min(-180).max(180).optional(),
    peta_zoom: z.coerce.number().int().min(1).max(21).default(18),
    sumber_koordinat: z.string().optional(),
    tahun_apbdes_aktif: z.coerce.number().int().min(2000).max(2100).default(2026),
    ...publicationFields,
  }),
});

const halamanCollection = defineCollection({
  type: 'data',
  schema: z.object({
    // Beranda
    hero_title: z.string().optional(),
    hero_subtitle: z.string().optional(),
    hero_bg: z.string().optional(),
    highlight_title: z.string().optional(),
    highlight_desc: z.string().optional(),
    highlight_image: z.string().optional(),
    statistik: z.array(z.object({
      label: z.string(),
      value: z.string()
    })).optional(),
    
    // Profil
    sambutan: z.string().optional(),
    nama_kades: z.string().optional(),
    foto_kades: z.string().optional(),
    luas_wilayah: z.string().optional(),
    batas_wilayah: z.array(z.object({
      arah: z.string(),
      wilayah: z.string(),
    })).default([]),
    penduduk_total: z.string().optional(),
    penduduk_pria: z.string().optional(),
    penduduk_wanita: z.string().optional(),
    tahun_wilayah: z.coerce.number().int().min(2000).max(2100).optional(),
    sumber_wilayah: z.string().optional(),
    status_validasi_wilayah: z.enum(['Dummy', 'Perlu Verifikasi', 'Terverifikasi']).default('Dummy'),
    demo_pendidikan: z.array(labelValueSchema).default([]),
    demografi_umur: z.array(labelValueSchema).default([]),
    data_pekerjaan_warga: z.array(labelValueSchema).default([]),
    status_pernikahan: z.array(labelValueSchema).default([]),
    tahun_demografi: z.coerce.number().int().min(2000).max(2100).optional(),
    sumber_demografi: z.string().optional(),
    status_validasi_demografi: z.enum(['Dummy', 'Perlu Verifikasi', 'Terverifikasi']).default('Dummy'),
    
    // Pertanian
    luas_lahan: z.string().optional(),
    komoditas: z.string().optional(),
    jumlah_kelompok: z.string().optional(),
    jumlah_petani: z.string().optional(),
    irigasi: z.string().optional(),
    produktivitas: z.string().optional(),
    deskripsi: z.string().optional(),
    peternakan_copywriting: z.string().optional(),
    peternakan_galeri: z.array(z.object({
      foto: z.string(),
      alt_text: z.string(),
    })).default([]),

    // Layanan
    administrasi: z.array(z.object({
      nama: z.string(),
      link: z.string().optional(),
      ikon: z.string().optional(),
    })).default([]),
    faq: z.array(z.object({
      q: z.string(),
      a: z.string(),
    })).default([]),

    // Tracking Progress
    tracking_placeholder: z.string().optional(),
    tracking_disclaimer: z.string().optional(),
    tracking_steps: z.array(z.object({
      label: z.string(),
      detail: z.string(),
    })).default([]),
    ...publicationFields,
  }),
});

export const collections = {
  'berita': beritaCollection,
  'struktur-organisasi': strukturOrganisasiCollection,
  'dusun': dusunCollection,
  'apbdes': apbdesCollection,
  'galeri': galeriCollection,
  'kelompok-tani': kelompokTaniCollection,
  'potensi-statistik': potensiStatistikCollection,
  'umkm': umkmCollection,
  'layanan-administrasi': layananAdministrasiCollection,
  'kontak': kontakCollection,
  'faq': faqCollection,
  'pengaturan': pengaturanCollection,
  'halaman': halamanCollection,
};
