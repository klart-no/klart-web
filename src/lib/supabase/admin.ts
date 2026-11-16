import { createClient } from "@supabase/supabase-js";

// Admin connection with the SECRET key. Bypasses all access rules.
// Only use in server code (API routes), never in components shown in the browser.
export function createAdminClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { persistSession: false, autoRefreshToken: false } },
  );
}