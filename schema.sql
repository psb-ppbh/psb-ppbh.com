-- SQL Schema setup untuk Database Supabase PSB PPBH Mojogeneng 2027/2028

-- 1. Tabel Pendaftaran Santri & Siswa Baru
CREATE TABLE IF NOT EXISTS public.pendaftaran (
    id TEXT PRIMARY KEY,
    nama_lengkap TEXT NOT NULL,
    nomor_wa TEXT NOT NULL,
    lembaga_pilihan TEXT NOT NULL,
    komplek_pilihan TEXT NOT NULL,
    nik TEXT,
    nokk TEXT,
    sekolah_asal TEXT,
    alamat TEXT,
    nama_ortu TEXT,
    status TEXT DEFAULT 'Lead',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- 2. Tabel Forum Diskusi Q&A Terpadu (Web <-> Android App)
CREATE TABLE IF NOT EXISTS public.forum_diskusi (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    nama_pengirim TEXT NOT NULL,
    pesan TEXT NOT NULL,
    is_admin BOOLEAN DEFAULT FALSE,
    balasan TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.pendaftaran ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.forum_diskusi ENABLE ROW LEVEL SECURITY;

-- Allow Public Insert & Read Policies
CREATE POLICY "Allow public insert pendaftaran" ON public.pendaftaran FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public select pendaftaran" ON public.pendaftaran FOR SELECT USING (true);
CREATE POLICY "Allow public update pendaftaran" ON public.pendaftaran FOR UPDATE USING (true);

CREATE POLICY "Allow public insert forum" ON public.forum_diskusi FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public select forum" ON public.forum_diskusi FOR SELECT USING (true);
CREATE POLICY "Allow public update forum" ON public.forum_diskusi FOR UPDATE USING (true);
