import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://cjnzerpbginhtserzdqk.supabase.co' // O teu URL do projeto
const supabaseAnonKey = 'sb_publishable_onHdyNiJyK1FIe-um9M1ZQ_DMj2jt0J' // A tua chave anon/public

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
// https://cjnzerpbginhtserzdqk.supabase.co/rest/v1/simulacoes