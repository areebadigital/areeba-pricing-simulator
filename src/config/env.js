import { z } from 'zod';
// Environment variable validation schema
const envSchema = z.object({
    VITE_SUPABASE_URL: z.string().url('Invalid Supabase URL'),
    VITE_SUPABASE_ANON_KEY: z.string().min(1, 'Supabase anon key is required'),
});
// Validate environment variables
const env = envSchema.parse({
    VITE_SUPABASE_URL: import.meta.env.VITE_SUPABASE_URL,
    VITE_SUPABASE_ANON_KEY: import.meta.env.VITE_SUPABASE_ANON_KEY,
});
export { env };
