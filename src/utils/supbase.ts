import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://nfyvmjmkfscgfztmfjfb.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5meXZtam1rZnNjZ2Z6dG1mamZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg0MjY4NzgsImV4cCI6MjA2NDAwMjg3OH0.IWungaAp9e3AAaaBpapVYeSwEmOML_Z5KyAnZ4Jh_Bg";

export const supabase = createClient(supabaseUrl, supabaseKey);