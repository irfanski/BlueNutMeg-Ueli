const PACKAGE_LABELS = {
  'half-day': 'Half Day (4 Hours) — IDR 4,500,000',
  'full-day': 'Full Day (8 Hours) — IDR 8,500,000',
  'sunset': 'Sunset Cruise (3 Hours) — IDR 3,200,000',
  'overnight': 'Overnight (24 Hours) — IDR 15,000,000',
  'custom': 'Custom / Special Request',
}

export function ownerEmailHtml({ name, email, phone, date, package: pkg, guests, message }) {
  const packageLabel = PACKAGE_LABELS[pkg] || pkg
  const formattedDate = new Date(date).toLocaleDateString('en-GB', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  })

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Charter Inquiry</title>
</head>
<body style="margin:0;padding:0;background:#0a0f1e;font-family:'Georgia',serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0f1e;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="580" cellpadding="0" cellspacing="0" style="background:#0d1526;border:1px solid #c9a84c33;border-radius:2px;">

          <!-- Header -->
          <tr>
            <td style="padding:32px 40px 24px;border-bottom:1px solid #c9a84c33;">
              <p style="margin:0;font-size:10px;letter-spacing:0.3em;text-transform:uppercase;color:#c9a84c;">Blue Nutmeg · Luxury Catamaran</p>
              <h1 style="margin:10px 0 0;font-size:22px;color:#ffffff;font-weight:normal;">New Charter Inquiry</h1>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:32px 40px;">
              <p style="margin:0 0 24px;font-size:13px;color:#ffffff99;font-family:Arial,sans-serif;line-height:1.6;">
                A new inquiry has been submitted. Reply directly to this email to contact the guest.
              </p>

              <!-- Data table -->
              <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #c9a84c22;border-radius:2px;overflow:hidden;">
                ${[
                  ['Full Name', name],
                  ['Email', `<a href="mailto:${email}" style="color:#c9a84c;text-decoration:none;">${email}</a>`],
                  ['WhatsApp / Phone', phone || '—'],
                  ['Preferred Date', formattedDate],
                  ['Package', packageLabel],
                  ['Number of Guests', `${guests} guest${guests > 1 ? 's' : ''}`],
                  ['Special Requests', message || '—'],
                ].map(([ label, value ], i) => `
                <tr style="background:${i % 2 === 0 ? '#ffffff06' : 'transparent'};">
                  <td style="padding:12px 16px;font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:#ffffff40;font-family:Arial,sans-serif;width:38%;border-bottom:1px solid #ffffff08;">${label}</td>
                  <td style="padding:12px 16px;font-size:13px;color:#ffffffcc;font-family:Arial,sans-serif;border-bottom:1px solid #ffffff08;">${value}</td>
                </tr>`).join('')}
              </table>

              <!-- CTA -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:28px;">
                <tr>
                  <td>
                    <a href="mailto:${email}?subject=Re: Blue Nutmeg Charter Inquiry"
                      style="display:inline-block;background:#c9a84c;color:#0a0f1e;font-family:Arial,sans-serif;font-size:11px;letter-spacing:0.25em;text-transform:uppercase;text-decoration:none;padding:14px 28px;font-weight:600;">
                      Reply to ${name.split(' ')[0]}
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:20px 40px;border-top:1px solid #c9a84c22;">
              <p style="margin:0;font-size:10px;color:#ffffff30;font-family:Arial,sans-serif;letter-spacing:0.1em;">
                This is an automated notification from your booking system. · Benoa Harbour, Bali, Indonesia
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}