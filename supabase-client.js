
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const SUPABASE_URL = 'https://monxbjkiubfghmqpoypk.supabase.co'

// Remplace cette valeur par ta clé publique sb_publishable_...
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_JQQ9vZiVL22EZPoQM1go-g_pfQ6AOfw'

export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
)
window.supabase = supabase;
