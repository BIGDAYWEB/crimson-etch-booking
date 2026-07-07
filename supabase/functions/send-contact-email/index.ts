import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';

interface Payload {
  name: string;
  email: string;
  phone?: string | null;
  message: string;
  created_at?: string;
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');
    if (!RESEND_API_KEY) {
      return new Response(JSON.stringify({ error: 'RESEND_API_KEY not configured' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const body = (await req.json()) as Payload;
    if (!body?.name || !body?.email || !body?.message) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const submittedAt = body.created_at ? new Date(body.created_at) : new Date();
    const formattedDate = submittedAt.toLocaleString('pl-PL', {
      timeZone: 'Europe/Warsaw',
      dateStyle: 'full',
      timeStyle: 'short',
    });

    const escape = (s: string) =>
      s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #111;">
        <h2 style="color: #b8860b;">Nowe zgłoszenie z formularza kontaktowego</h2>
        <table style="width:100%; border-collapse: collapse;">
          <tr><td style="padding:8px; border-bottom:1px solid #eee;"><strong>Imię i nazwisko</strong></td><td style="padding:8px; border-bottom:1px solid #eee;">${escape(body.name)}</td></tr>
          <tr><td style="padding:8px; border-bottom:1px solid #eee;"><strong>E-mail</strong></td><td style="padding:8px; border-bottom:1px solid #eee;"><a href="mailto:${escape(body.email)}">${escape(body.email)}</a></td></tr>
          <tr><td style="padding:8px; border-bottom:1px solid #eee;"><strong>Telefon</strong></td><td style="padding:8px; border-bottom:1px solid #eee;">${escape(body.phone || '—')}</td></tr>
          <tr><td style="padding:8px; border-bottom:1px solid #eee; vertical-align: top;"><strong>Wiadomość</strong></td><td style="padding:8px; border-bottom:1px solid #eee; white-space: pre-wrap;">${escape(body.message)}</td></tr>
          <tr><td style="padding:8px;"><strong>Data zgłoszenia</strong></td><td style="padding:8px;">${escape(formattedDate)}</td></tr>
        </table>
      </div>
    `;

    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'InkAlchemy <kontakt@inkalchemy.pl>',
        to: ['kistowska.m@gmail.com'],
        reply_to: body.email,
        subject: 'Nowe zgłoszenie z formularza - InkAlchemy',
        html,
      }),
    });

    if (!resendRes.ok) {
      const errText = await resendRes.text();
      console.error(`Resend error [${resendRes.status}]: ${errText}`);
      return new Response(
        JSON.stringify({ error: 'Resend request failed', status: resendRes.status, details: errText }),
        { status: resendRes.status, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
      );
    }

    const data = await resendRes.json();
    return new Response(JSON.stringify({ success: true, id: data.id }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    });
  } catch (err) {
    console.error('send-contact-email error:', err);
    return new Response(JSON.stringify({ error: (err as Error).message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});