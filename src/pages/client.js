
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://tqoxkvbrrkncpuydywkp.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRxb3hrdmJycmtuY3B1eWR5d2twIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY3NjI5NzEsImV4cCI6MjA0MjMzODk3MX0.pKfOxYhql32CxyDu09H2WWwULlTG9huo04998si1kSM'
export const supabase = createClient(supabaseUrl, supabaseKey)