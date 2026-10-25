import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://vvusbqdbexdexzklzyfs.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ2dXNicWRiZXhkZXh6a2x6eWZzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI4OTUyODMsImV4cCI6MjEwODQ3MTI4M30.nVphXPXe2KTGKuPWEK4zstqkPLO4vm9GcrnZWj74rEI";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);