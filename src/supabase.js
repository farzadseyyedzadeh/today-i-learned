import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://eafphoafwwyqxrxplijz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVhZnBob2Fmd3d5cXhyeHBsaWp6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQzOTI0OTEsImV4cCI6MTk4OTk2ODQ5MX0.tUbgDbiiV4kFfLM9o5qRYVgroZMV7-4yy9iYKq7Rrck";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
