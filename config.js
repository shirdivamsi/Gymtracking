/* Strength Log — cloud sync settings.
 *
 * Paste the two values from Supabase → Project Settings → API.
 * Leave them blank and the app runs exactly as it does now: everything local,
 * no network, no sign-in. Nothing breaks if you never fill this in.
 *
 * Both values are safe in a public repo. The anon key identifies your project;
 * it does not grant access. The row-level security policies in the schema are
 * what protect your data, and they run inside Postgres where client code
 * cannot reach them.
 *
 * NEVER put the service_role key here. It bypasses every policy.
 */
window.SL_CONFIG = {
  supabaseUrl:     "https://eqbvamxwsediepezlpxr.supabase.co",
  supabaseAnonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVxYnZhbXh3c2VkaWVwZXpscHhyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODYyMjM4NjQsImV4cCI6MjEwMTc5OTg2NH0.5-xKl_LUyP9nhJax3lbotVmm15yUAK15aNnwzio5VWY"
};
