// Apni API Keys yahan dalein ("" ke andar)
const SUPABASE_URL = "https://mzdqpcqckaikvwaosmfv.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im16ZHFwY3Fja2Fpa3Z3YW9zbWZ2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4MDA1MTI5MiwiZXhwIjoyMDk1NjI3MjkyfQ.9m4jsxquOxw4XfLvOfFy8OEEzqsexKeqbPGUhuUHmSU";
const AGORA_APP_ID = "5c051d17bdab4355b4bebdf2d52029a0";

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
window.supabaseClient = supabase;
window.AGORA_APP_ID = AGORA_APP_ID;
