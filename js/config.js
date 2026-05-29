// Apni API Keys yahan dalein ("" ke andar)
const SUPABASE_URL = "https://mzdqpcqckaikvwaosmfv.supabase.co/rest/v1/";
const SUPABASE_KEY = "sb_publishable_2rNuFFm36yl3FRt9UbcI-A_QijQgbC1";
const AGORA_APP_ID = "5c051d17bdab4355b4bebdf2d52029a0";

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
window.supabaseClient = supabase;
window.AGORA_APP_ID = AGORA_APP_ID;
