GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT INSERT ON TABLE public.contact_submissions TO anon;
GRANT INSERT ON TABLE public.contact_submissions TO authenticated;
GRANT ALL ON TABLE public.contact_submissions TO service_role;