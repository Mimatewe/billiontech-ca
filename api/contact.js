const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function cleanSingleLine(value, maxLength) {
  return String(value ?? '')
    .replace(/[\r\n]+/g, ' ')
    .trim()
    .slice(0, maxLength)
}

function cleanMessage(value, maxLength) {
  return String(value ?? '').trim().slice(0, maxLength)
}

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ ok: false, error: 'Method not allowed.' })
  }

  const name = cleanSingleLine(req.body?.name, 100)
  const email = cleanSingleLine(req.body?.email, 200).toLowerCase()
  const message = cleanMessage(req.body?.message, 5000)
  const website = cleanSingleLine(req.body?.website, 200)

  // Honeypot: bots often fill hidden fields.
  if (website) {
    return res.status(200).json({ ok: true })
  }

  if (name.length < 2) {
    return res.status(400).json({ ok: false, error: 'Please enter your name.' })
  }

  if (!EMAIL_PATTERN.test(email)) {
    return res.status(400).json({ ok: false, error: 'Please enter a valid email address.' })
  }

  if (message.length < 10) {
    return res.status(400).json({ ok: false, error: 'Please enter a little more detail in your message.' })
  }

  const apiKey = process.env.RESEND_API_KEY
  const toEmail = process.env.CONTACT_TO_EMAIL || 'milimeasho@gmail.com'
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL || 'Billion Tech Website <onboarding@resend.dev>'

  if (!apiKey) {
    console.error('Contact form is missing RESEND_API_KEY.')
    return res.status(503).json({
      ok: false,
      error: 'The contact service is being configured. Please try again shortly.',
    })
  }

  const safeName = escapeHtml(name)
  const safeEmail = escapeHtml(email)
  const safeMessage = escapeHtml(message).replaceAll('\n', '<br />')

  try {
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject: `New Billion Tech website message from ${name}`,
        text: [
          'New message from billiontech.ca',
          '',
          `Name: ${name}`,
          `Email: ${email}`,
          '',
          message,
        ].join('\n'),
        html: `
          <div style="font-family:Arial,sans-serif;max-width:640px;margin:auto;color:#111827">
            <h2 style="margin-bottom:8px">New website message</h2>
            <p style="margin-top:0;color:#6b7280">Submitted through billiontech.ca</p>
            <div style="padding:16px;border:1px solid #e5e7eb;border-radius:12px;margin:20px 0">
              <p><strong>Name:</strong> ${safeName}</p>
              <p><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
              <p style="margin-bottom:6px"><strong>Message:</strong></p>
              <p style="line-height:1.6;margin-top:0">${safeMessage}</p>
            </div>
            <p style="color:#6b7280;font-size:13px">
              Reply to this email and your reply will go directly to ${safeEmail}.
            </p>
          </div>
        `,
      }),
    })

    if (!resendResponse.ok) {
      const details = await resendResponse.text()
      console.error('Resend contact email failed:', resendResponse.status, details)
      return res.status(502).json({
        ok: false,
        error: 'We could not send your message right now. Please try again.',
      })
    }

    return res.status(200).json({ ok: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return res.status(500).json({
      ok: false,
      error: 'We could not send your message right now. Please try again.',
    })
  }
}
