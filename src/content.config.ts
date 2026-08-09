import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const labelValueSchema = z.object({
  label: z.string(),
  value: z.number(),
});

const releaseStatusSchema = z.enum(['Draf', 'Terbit']).default('Terbit');

const sourceMetadataFields = {
  tahun_data: z.coerce.number().int().min(2000).max(2100).optional(),
  sumber_data: z.string().optional(),
  status_validasi: z.enum(['Perlu Verifikasi', 'Terverifikasi']).default('Perlu Verifikasi'),
};

const publicationFields = {
  release_status: releaseStatusSchema,
  published_at: z.coerce.date().optional(),
  aktif: z.boolean().default(true),
};

const beritaCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/berita' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    category: z.enum(['Berita', 'Agenda', 'Artikel', 'Pengumuman']),
    thumbnail: z.string().optional(),
    excerpt: z.string(),
    author: z.string().default('Admin Desa'),
    external_url: z.string().url().optional(),
    external_source: z.string().optional(),
    featured: z.boolean().default(false),
    ...publicationFields,
  }),
});

const dusunCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/dusun' }),
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
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/apbdes' }),
  schema: z.object({
    tahun: z.coerce.number().int().min(2000).max(2100),
    versi: z.enum(['Awal', 'Perubahan']).default('Awal'),
    pendapatan: z.array(z.object({
      nama: z.string(), jumlah: z.number(), realisasi: z.number().optional(), urutan: z.number(),
      deskripsi: z.string().optional(), tanggal_pembaruan: z.coerce.date().optional(), ...sourceMetadataFields, ...publicationFields,
    })).default([]),
    belanja: z.array(z.object({
      nama: z.string(), jumlah: z.number(), realisasi: z.number().optional(), urutan: z.number(),
      deskripsi: z.string().optional(), tanggal_pembaruan: z.coerce.date().optional(), ...sourceMetadataFields, ...publicationFields,
    })).default([]),
    ...publicationFields,
  }),
});

const galeriCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/galeri' }),
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

const umkmCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/umkm' }),
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
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/layanan-administrasi' }),
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
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/kontak' }),
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

const pengaturanCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.json', base: './src/content/pengaturan' }),
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
    instagram: z.string().url().optional(),
    tiktok: z.string().url().optional(),
    koordinat_latitude: z.coerce.number().min(-90).max(90).optional(),
    koordinat_longitude: z.coerce.number().min(-180).max(180).optional(),
    peta_zoom: z.coerce.number().int().min(1).max(21).default(18),
    peta_query: z.string().optional(),
    peta_url: z.string().url().optional(),
    sumber_koordinat: z.string().optional(),
    tahun_apbdes_aktif: z.coerce.number().int().min(2000).max(2100).default(2026),
    ...publicationFields,
  }),
});

const halamanCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.json', base: './src/content/halaman' }),
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
    luas_wilayah: z.string().optional(),
    luas_sawah: z.string().optional(),
    jumlah_rt: z.string().optional(),
    batas_wilayah: z.array(z.object({
      arah: z.string(),
      wilayah: z.string(),
    })).default([]),
    penduduk_total: z.string().optional(),
    penduduk_pria: z.string().optional(),
    penduduk_wanita: z.string().optional(),
    tahun_wilayah: z.coerce.number().int().min(2000).max(2100).optional(),
    sumber_wilayah: z.string().optional(),
    status_validasi_wilayah: z.enum(['Perlu Verifikasi', 'Terverifikasi']).default('Perlu Verifikasi'),
    demo_pendidikan: z.array(labelValueSchema).default([]),
    demografi_umur: z.array(labelValueSchema).default([]),
    data_pekerjaan_warga: z.array(labelValueSchema).default([]),
    status_pernikahan: z.array(labelValueSchema).default([]),
    tahun_demografi: z.coerce.number().int().min(2000).max(2100).optional(),
    sumber_demografi: z.string().optional(),
    status_validasi_demografi: z.enum(['Perlu Verifikasi', 'Terverifikasi']).default('Perlu Verifikasi'),
    struktur_organisasi: z.array(z.object({
      slug: z.string(), nama: z.string(), jabatan: z.string(), parent: z.string().optional(), foto: z.string().optional(),
      urutan: z.number(), deskripsi: z.string().optional(), ...sourceMetadataFields, ...publicationFields,
    })).default([]),
    
    // Pertanian
    deskripsi: z.string().optional(),
    peternakan_copywriting: z.string().optional(),
    gapoktan_nama: z.string().optional(),
    gapoktan_ketua: z.string().optional(),
    peternakan_galeri: z.array(z.object({
      foto: z.string(),
      alt_text: z.string(),
    })).default([]),
    statistik_potensi: z.array(z.object({
      slug: z.string(), kategori: z.enum(['Pertanian', 'Peternakan', 'Sarana Pertanian']), label: z.string(), value: z.string(),
      satuan: z.string().optional(), urutan: z.number(), ...sourceMetadataFields, ...publicationFields,
    })).default([]),
    kelompok_tani: z.array(z.object({
      slug: z.string(), nama: z.string(), ketua: z.string(), dusun: z.string().optional(), komoditas_utama: z.string(),
      luas_ha: z.number(), jumlah_anggota: z.number(), ...sourceMetadataFields, ...publicationFields,
    })).default([]),
    produksi_pertanian: z.array(z.object({
      slug: z.string(), nama: z.string(), kategori: z.enum(['Tanaman Pangan', 'Sayuran', 'Buah-buahan', 'Perkebunan']),
      luas_ha: z.number(), produktivitas: z.string(), produksi_ton: z.number(), urutan: z.number(), ...sourceMetadataFields, ...publicationFields,
    })).default([]),

    // Layanan
    administrasi: z.array(z.object({
      nama: z.string(),
      link: z.string().optional(),
      ikon: z.string().optional(),
    })).default([]),
    ...publicationFields,
  }),
});

export const collections = {
  'berita': beritaCollection,
  'dusun': dusunCollection,
  'apbdes': apbdesCollection,
  'galeri': galeriCollection,
  'umkm': umkmCollection,
  'layanan-administrasi': layananAdministrasiCollection,
  'kontak': kontakCollection,
  'pengaturan': pengaturanCollection,
  'halaman': halamanCollection,
};
