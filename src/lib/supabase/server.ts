import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

// Supabase connection for server code (pages, API routes).
// Reads the login cookie so the user's own access rules apply.
export async function createClient() {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options),
            );
          } catch {
            // Called from a page that can't set cookies. Safe to ignore.
          }
        },
      },
    },
  );
}