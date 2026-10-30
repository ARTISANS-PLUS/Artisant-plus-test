
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const SUPABASE_URL = 'https://ouwcmvwzcrlzkiipxhyb.supabase.co'

// Remplace cette valeur par ta clé publique sb_publishable_...
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_rrpx3Zcb85zoYNHl-frrCg_uTqb2A_I'

export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
)
window.supabase = supabase;
