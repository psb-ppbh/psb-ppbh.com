import { createClient } from '@supabase/supabase-js';

// Credentials fallback for preview/testing if env vars not set yet
const SUPABASE_URL = import.meta.env.PUBLIC_SUPABASE_URL || 'https://demo-psb-ppbh.supabase.co';
const SUPABASE_ANON_KEY = import.meta.env.PUBLIC_SUPABASE_ANON_KEY || 'demo-anon-key';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
