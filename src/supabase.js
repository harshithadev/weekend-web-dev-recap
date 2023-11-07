import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://gknaflkykytzbodmofib.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdrbmFmbGt5a3l0emJvZG1vZmliIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI4NTkxMTcsImV4cCI6MjAwODQzNTExN30.kWI4kVgtFbw6Xh90TVgtAGXPoGg8NTGEah2EuMMvF2U";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
