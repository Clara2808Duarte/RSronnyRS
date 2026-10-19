import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://cjnzerpbginhtserzdqk.supabase.co' // O teu URL do projeto
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...' // A tua chave anon/public

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
// https://cjnzerpbginhtserzdqk.supabase.co/rest/v1/simulacoes