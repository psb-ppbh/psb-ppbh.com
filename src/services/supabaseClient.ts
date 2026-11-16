import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = import.meta.env.PUBLIC_SUPABASE_URL || 'https://wlqiunltekkcviambnux.supabase.co';
const SUPABASE_ANON_KEY = import.meta.env.PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_y0WXR4-bo1s0lO9MSZloJQ_LU4AXcjA';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
