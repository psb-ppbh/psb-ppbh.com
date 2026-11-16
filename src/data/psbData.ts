export interface LembagaFormal {
  id: string;
  jenjang: string;
  nama: string;
  kepalaSekolah?: string;
  gelar?: string;
  deskripsi: string;
  jurusan?: string[];
  icon: string;
  domainUrl?: string;
}

export interface KomplekAsrama {
  id: number;
  nama: string;
  kategori: 'Putra' | 'Putri' | 'Tahfidz' | 'Umum';
  deskripsi: string;
}

export interface JadwalSeleksi {
  lembaga: string;
  gelombang1: {
    pendaftaran: string;
    tes: string;
    pengumuman: string;
  };
  gelombang2: {
    pendaftaran: string;
    tes: string;
    pengumuman: string;
  };
}

export interface LiniMasaHistory {
  tahun: string;
  judul: string;
  deskripsi: string;
  badge?: string;
}

export interface ArtikelPesantren {
  id: string;
  judul: string;
  kategori: string;
  tanggal: string;
  ringkasan: string;
  penulis: string;
  bacaMenit: number;
}

export const YAYASAN_INFO = {
  nama: "Yayasan Pondok Pesantren Bidayatul Hidayah",
  singkatan: "PPBH",
  pendiri: "KH. Moh. Yahdi Mathlab (Alm)",
  tahunBerdiri: 1948,
  pengasuh: ["KH. Agus Salim Yahdi", "Kiai Nur Hasan"],
  alamat: "Jl. Pesantren, Mojogeneng, Kec. Jatirejo, Kab. Mojokerto - Kode Pos 61373",
  teleponWA: "081252304644",
  teleponWAFormatted: "0812 5230 4644",
  instagram: "@ponpes_bidayatulhidayah",
  instagramUrl: "https://instagram.com/ponpes_bidayatulhidayah",
  jamBuka: "Setiap Hari 07.30 s/d 16.00 WIB (Hari Jum'at LIBUR)",
  tahunAjaran: "2027/2028",
  tglBukaPendaftaran: "01 Maret 2027",
  biayaPendaftaran: "Rp 200.000",
  logoUrl: "/logo-ppbh.png",
  fotoKegiatanUrl: "/foto-kegiatan.png",
};

export const LEMBAGA_FORMAL: LembagaFormal[] = [
  {
    id: 'ra',
    jenjang: 'RA / TK',
    nama: 'RA Tsamrotut Tufulliyah',
    deskripsi: 'Pendidikan anak usia dini berbasis pembiasan akhlaqul karimah, hafalan surat pendek, dan keislaman sejak dini.',
    icon: 'Baby',
  },
  {
    id: 'mi',
    jenjang: 'MI',
    nama: 'MI Salafiyah Bidayatul Hidayah',
    kepalaSekolah: 'H. Irwan Hamzah, M.Pd.',
    deskripsi: 'Madrasah Ibtidaiyah terpadu gabungan kurikulum kementerian agama dan kurikulum khas pesantren salafiyah.',
    icon: 'BookOpen',
    domainUrl: 'https://mi-bidayatulhidayah.sch.id',
  },
  {
    id: 'mts',
    jenjang: 'MTs',
    nama: 'MTs Salafiyah Bidayatul Hidayah',
    kepalaSekolah: 'Moch. Machim, M.Pd.',
    deskripsi: 'Madrasah Tsanawiyah unggulan pencetak generasi berprestasi akademis dan kuat dalam pemahaman kitab salaf.',
    icon: 'GraduationCap',
    domainUrl: 'https://mojogenengmtssalafiyah.sch.id',
  },
  {
    id: 'ma',
    jenjang: 'MA',
    nama: 'MA Bidayatul Hidayah',
    kepalaSekolah: 'Natsir Wibowo, M.Pd.',
    deskripsi: 'Madrasah Aliyah persiapan perguruan tinggi terkemuka dengan basis ilmu keagamaan yang kokoh.',
    icon: 'School',
    domainUrl: 'https://mabidamojogeneng.sch.id',
  },
  {
    id: 'smk',
    jenjang: 'SMK',
    nama: 'SMK Bidayatul Hidayah',
    kepalaSekolah: 'Achmad Basyro, S.Pd.',
    jurusan: ['Desain Komunikasi Visual (DKV)'],
    deskripsi: 'Sekolah Menengah Kejuruan berwawasan kreatif multimedia, desain komunikasi visual, dan kewirausahaan bernuansa pesantren.',
    icon: 'Laptop',
    domainUrl: 'https://smkbidayatulhidayah.sch.id',
  },
];

export const LEMBAGA_NON_FORMAL = [
  'Madin Tuhfatul Mubtadi\'in',
  'Madrasah Aliyah Diniyah',
  'Unit Roudlotul Qur\'an',
  'Robithoh',
];

export const KOMPLEK_ASRAMA: KomplekAsrama[] = [
  { id: 1, nama: 'Asrama Al Ghozali', kategori: 'Putra', deskripsi: 'Komplek pendalaman ilmu fiqih dan kitab salaf.' },
  { id: 2, nama: 'Asrama As Shomadiyah', kategori: 'Putra', deskripsi: 'Komplek pembinaan kedisiplinan dan kepemimpinan santri.' },
  { id: 3, nama: 'Asrama As Syifaiyah', kategori: 'Putra', deskripsi: 'Komplek asrama putra berkonsep sejuk dan islami.' },
  { id: 4, nama: 'Asrama Ahlul Quro\'', kategori: 'Tahfidz', deskripsi: 'Komplek khusus program intensif Tahfidzul Qur\'an.' },
  { id: 5, nama: 'Asrama Al Khodijah', kategori: 'Putri', deskripsi: 'Komplek asrama putri utama dengan lingkungan asri.' },
  { id: 6, nama: 'Asrama Arruhamaiyah', kategori: 'Putri', deskripsi: 'Komplek santri putri berfokus pada pendidikan akhlak.' },
  { id: 7, nama: 'Asrama Al Mathlabi', kategori: 'Putra', deskripsi: 'Komplek penghormatan untuk pendiri KH. Moh. Yahdi Mathlab.' },
  { id: 8, nama: 'Asrama Baitul Qur\'an', kategori: 'Tahfidz', deskripsi: 'Komplek karantina huffadz Al-Qur\'an 30 Juz.' },
  { id: 9, nama: 'Asrama Darul Qur\'an', kategori: 'Tahfidz', deskripsi: 'Pusat pembelajaran tajwid dan qiroat Al-Qur\'an.' },
  { id: 10, nama: 'Asrama Al Qurthuby', kategori: 'Putra', deskripsi: 'Komplek santri menengah tinggi dan mahasiswa.' },
  { id: 11, nama: 'Asrama Darus Salam', kategori: 'Umum', deskripsi: 'Komplek kedamaian untuk pengembangan bahasa asing.' },
  { id: 12, nama: 'Asrama Hidayatus Sibyan', kategori: 'Umum', deskripsi: 'Komplek khusus pembinaan santri usia dini/anak-anak.' },
  { id: 13, nama: 'Asrama Raudhatul Hikmah', kategori: 'Putri', deskripsi: 'Komplek putri pengembangan kajian ilmu-ilmu keislaman.' },
  { id: 14, nama: 'Asrama Al Barokah', kategori: 'Umum', deskripsi: 'Komplek terpadu pendukung kegiatan akademik dan ekstrakurikuler.' },
];

export const LINI_MASA_HISTORY: LiniMasaHistory[] = [
  {
    tahun: '1948',
    judul: 'Pancangan Perintis di Mojogeneng',
    deskripsi: 'Ditempuh dan didirikan oleh KH. Moh. Yahdi Mathlab (Alm), seorang ulama alim & Hafidh Al-Qur\'an sebagai pusat pengajaran Al-Qur\'an dan kitab salaf di Desa Mojogeneng, Jatirejo, Mojokerto.',
    badge: 'Awal Pendirian'
  },
  {
    tahun: '1970-an',
    judul: 'Peletakan Fondasi Madin & Salafiyah',
    deskripsi: 'Pengembangan struktur Madrasah Diniyah Tuhfatul Mubtadi\'in serta pembentukan sistem pendidikan berasrama terstruktur bagi santri putra dan putri.',
    badge: 'Tradisi Salaf'
  },
  {
    tahun: '1990-an',
    judul: 'Pendidikan Formal Integrated (MI, MTs, MA, RA)',
    deskripsi: 'Integrasi kurikulum kementerian nasional dengan pendirian MI Salafiyah, MTs Salafiyah, MA Bidayatul Hidayah, dan RA Tsamrotut Tufulliyah.',
    badge: 'Integrasi Formal'
  },
  {
    tahun: '2010-an',
    judul: 'Pendirian SMK DKV & Perluasan 14 Komplek',
    deskripsi: 'Pendirian SMK Bidayatul Hidayah konsentrasi Desain Komunikasi Visual (DKV) dan perluasan hunian santri hingga mencapai 14 Komplek Asrama.',
    badge: 'Era Kreatif'
  },
  {
    tahun: '2027',
    judul: 'Peluncuran PSB Parent Gateway Terpadu',
    deskripsi: 'Penerapan sistem pendaftaran 1 pintu digital untuk seluruh 14 komplek dan 5 lembaga formal, terhubung langsung dengan aplikasi mobile admin panitia.',
    badge: 'Era Digital 2027'
  }
];

export const ARTIKEL_PESANTREN: ArtikelPesantren[] = [
  {
    id: '1',
    judul: 'Menjaga Keseimbangan Tradisi Salafiyah dan Kreativitas Digital di PPBH Mojogeneng',
    kategori: 'Pendidikan Pesantren',
    tanggal: '10 Februari 2027',
    ringkasan: 'Bagaimana santri Bidayatul Hidayah tetap mendalami kajian Kitab Kuning salafiyah sekaligus menguasai keahlian Desain Komunikasi Visual (DKV) di era modern.',
    penulis: 'Humas PPBH Mojogeneng',
    bacaMenit: 4
  },
  {
    id: '2',
    judul: 'Mengapa Pembinaan Berbasis 14 Komplek Asrama Membentuk Kemandirian & Akhlak Santri',
    kategori: 'Kehidupan Santri',
    tanggal: '05 Februari 2027',
    ringkasan: 'Sistem pengasuhan terpisah putra dan putri dalam 14 komplek asrama menciptakan lingkungan islami, sejuk, dan mendukung kedisiplinan ibadah santri.',
    penulis: 'Redaksi Bidayatul Hidayah',
    bacaMenit: 3
  },
  {
    id: '3',
    judul: 'Panduan Pendaftaran TP. 2027/2028: Langkah Mudah Pendaftaran Online Single Gateway',
    kategori: 'Informasi PSB',
    tanggal: '01 Januari 2027',
    ringkasan: 'Penjelasan lengkap alur pendaftaran 1 pintu, simulasi biaya pendaftaran Rp 200.000, serta panduan memilih 5 jenjang sekolah formal di PPBH.',
    penulis: 'Panitia PSB 2027',
    bacaMenit: 5
  }
];

export const KEGIATAN_SANTRI = [
  'Ubudiyah & Sholat Berjamaah',
  'Kajian Kitab Kuning Salaf',
  'Tahfidzul Qur\'an 30 Juz',
  'Bahtsul Masa\'il',
  'English Speech & Conversation',
  'Language Class (Arab & Inggris)',
  'Khitobah 3 Bahasa',
  'Muhadatsah & Muhadloroh',
];

export const EKSTRAKURIKULER = [
  'Seni Hadrah Banjari',
  'Jurnalistik & Media',
  'Kaligrafi Islam',
  'Desain Grafis & Multimedia',
  'Kajian Kitab & Falakiyah',
  'Vokal & Tilawatil Qur\'an',
  'Pencak Silat Pagar Nusa',
  'English Club',
  'Seni Qiro\'ah & Pidato',
];

export const SYARAT_PENDAFTARAN = [
  'Membayar Biaya Pendaftaran Rp 200.000',
  'Mengisi Formulir Pendaftaran (Online / Offline)',
  'Fotocopy Ijazah & SKHUN (3 lembar)',
  'Pas Foto 3x4 Hitam Putih (3 lembar)',
  'Fotocopy Akte Kelahiran (3 lembar)',
  'Fotocopy NISN (3 lembar)',
  'Fotocopy Kartu Keluarga / KK (3 lembar)',
  'Fotocopy KTP Ayah dan Ibu (3 lembar)',
];

export const JADWAL_SELEKSI: JadwalSeleksi[] = [
  {
    lembaga: 'MTs Salafiyah',
    gelombang1: {
      pendaftaran: '01 Maret - 12 Juni 2027',
      tes: '13 Juni 2027',
      pengumuman: '14 Juni 2027',
    },
    gelombang2: {
      pendaftaran: '13 Juni - 03 Juli 2027',
      tes: '04 Juli 2027',
      pengumuman: '05 Juli 2027',
    },
  },
  {
    lembaga: 'MA & SMK Bidayatul Hidayah',
    gelombang1: {
      pendaftaran: '01 Maret - 13 Juni 2027',
      tes: '14 Juni 2027',
      pengumuman: '15 Juni 2027',
    },
    gelombang2: {
      pendaftaran: '14 Juni - 04 Juli 2027',
      tes: '05 Juli 2027',
      pengumuman: '06 Juli 2027',
    },
  },
];

export const MATERI_TES = {
  tulis: ['Bahasa Indonesia', 'Matematika', 'Bahasa Inggris'],
  lisan: ['Baca Al-Qur\'an / Jilid', 'Ilmu Pengetahuan Agama (IPA)'],
  ketentuan: [
    'Peserta tes wajib memakai Seragam Pramuka sekolah asal',
    'Tes dilaksanakan pukul 07.00 WIB tepat di Kampus PPBH Mojogeneng',
    'Biaya pendaftaran yang sudah dibayarkan tidak dapat dikembalikan',
  ],
};
