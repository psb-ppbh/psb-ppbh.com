-- SQL Schema Master setup untuk Database Supabase PSB PPBH Mojogeneng 2027/2028

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

-- 3. Tabel Forum Internal 5 Admin Panitia (HP Admin <-> HP Admin)
CREATE TABLE IF NOT EXISTS public.forum_admin_internal (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    nama_admin TEXT NOT NULL,
    pesan TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.pendaftaran ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.forum_diskusi ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.forum_admin_internal ENABLE ROW LEVEL SECURITY;

-- Drop Policy lama jika sudah ada agar tidak terjadi error "already exists"
DROP POLICY IF EXISTS "Public pendaftaran" ON public.pendaftaran;
DROP POLICY IF EXISTS "Public forum" ON public.forum_diskusi;
DROP POLICY IF EXISTS "Public forum_admin" ON public.forum_admin_internal;

-- Allow Public Access Policies
CREATE POLICY "Public pendaftaran" ON public.pendaftaran FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Public forum" ON public.forum_diskusi FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Public forum_admin" ON public.forum_admin_internal FOR ALL USING (true) WITH CHECK (true);
