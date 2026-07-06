DROP POLICY IF EXISTS "Anyone can submit a contact form" ON public.contact_submissions;
CREATE POLICY "Anyone can submit a contact form"
  ON public.contact_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (consent = true);