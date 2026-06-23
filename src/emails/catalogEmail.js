export function catalogEmailHtml({ name }) {
  const firstName = name.split(' ')[0]

  const packages = [
    {
      tier: 'Sunrise',
      duration: '3 Hours',
      price: 'IDR 1,400,000',
      note: 'per person',
      desc: 'Start your day on the water as the sun rises over Bali — a serene and breathtaking way to experience the catamaran.',
      includes: ['Professional skipper & crew', 'Welcome drinks & light breakfast', 'Stunning sunrise views', 'Towels provided', 'Fuel included'],
    },
    {
      tier: 'Half Day',
      duration: '4 Hours',
      price: 'IDR 1,600,000',
      note: 'per person',
      badge: 'MOST POPULAR',
      desc: 'A perfect taste of sailing life — glide through calm waters, snorkel a pristine reef, and soak up the Bali sun.',
      includes: ['Professional skipper & crew', 'Welcome drinks & snacks', 'Snorkeling equipment', 'Towels & sunscreen', 'Fuel included'],
    },
    {
      tier: 'Sunset',
      duration: '3 Hours',
      price: 'IDR 1,400,000',
      note: 'per person',
      desc: 'The most romantic experience on the water — sip champagne as the sky ignites in amber and rose around you.',
      includes: ['Professional skipper & crew', 'Champagne & canapés', 'Curated sunset playlist', 'Photography spots', 'Fuel included'],
    },
  ]

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Blue Nutmeg — Charter Catalog</title>
</head>
<body style="margin:0;padding:0;background:#0a0f1e;font-family:'Georgia',serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0f1e;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0">

          <!-- Header / Hero -->
          <tr>
            <td style="background:linear-gradient(135deg,#0d1526 0%,#0f2040 100%);border:1px solid #c9a84c33;border-radius:2px 2px 0 0;padding:48px 40px 40px;text-align:center;">
              <p style="margin:0 0 8px;font-size:10px;letter-spacing:0.4em;text-transform:uppercase;color:#c9a84c;">Luxury Catamaran · Bali</p>
              <h1 style="margin:0 0 4px;font-size:36px;color:#ffffff;font-weight:normal;line-height:1.2;">Blue Nutmeg</h1>
              <div style="width:40px;height:1px;background:#c9a84c;margin:16px auto;"></div>
              <p style="margin:0;font-size:15px;color:#ffffff80;font-family:Arial,sans-serif;font-weight:300;line-height:1.6;">
                Thank you for your inquiry, <span style="color:#c9a84c;">${firstName}</span>.<br/>
                Our team will get back to you within 24 hours.
              </p>
            </td>
          </tr>

          <!-- Intro -->
          <tr>
            <td style="background:#0d1526;padding:36px 40px 28px;border-left:1px solid #c9a84c22;border-right:1px solid #c9a84c22;">
              <p style="margin:0 0 8px;font-size:10px;letter-spacing:0.35em;text-transform:uppercase;color:#c9a84c;">Our Charter Packages</p>
              <p style="margin:0;font-size:13px;color:#ffffff60;font-family:Arial,sans-serif;line-height:1.8;">
                While you wait, explore what awaits you on board. Every charter includes a professional skipper, safety equipment, and the unmistakable Blue Nutmeg experience.
              </p>
            </td>
          </tr>

          <!-- Packages -->
          ${packages.map((pkg, i) => `
          <tr>
            <td style="background:${i % 2 === 0 ? '#0d1526' : '#0a1020'};padding:0 40px 0;border-left:1px solid #c9a84c22;border-right:1px solid #c9a84c22;">
              <table width="100%" cellpadding="0" cellspacing="0" style="border-top:1px solid #ffffff08;padding:28px 0;">
                <tr>
                  <td style="padding:28px 0 24px;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td>
                          <p style="margin:0 0 2px;font-size:10px;letter-spacing:0.3em;text-transform:uppercase;color:#c9a84c80;">${pkg.duration}</p>
                          <h2 style="margin:0;font-size:22px;color:#ffffff;font-weight:normal;">${pkg.tier}${pkg.badge ? ` <span style="font-size:9px;letter-spacing:0.25em;background:#c9a84c;color:#0a0f1e;padding:3px 8px;vertical-align:middle;font-family:Arial,sans-serif;">${pkg.badge}</span>` : ''}</h2>
                        </td>
                        <td align="right" style="vertical-align:top;">
                          <p style="margin:0;font-size:20px;color:#c9a84c;font-family:Georgia,serif;">${pkg.price}</p>
                          <p style="margin:2px 0 0;font-size:10px;letter-spacing:0.15em;text-transform:uppercase;color:#ffffff30;font-family:Arial,sans-serif;">${pkg.note}</p>
                        </td>
                      </tr>
                    </table>
                    <p style="margin:12px 0 16px;font-size:13px;color:#ffffff60;font-family:Arial,sans-serif;line-height:1.7;">${pkg.desc}</p>
                    <table cellpadding="0" cellspacing="0">
                      ${pkg.includes.map(item => `
                      <tr>
                        <td style="padding:3px 0;vertical-align:top;">
                          <span style="color:#c9a84c;font-size:12px;margin-right:8px;">✓</span>
                          <span style="font-size:12px;color:#ffffff70;font-family:Arial,sans-serif;">${item}</span>
                        </td>
                      </tr>`).join('')}
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>`).join('')}

          <!-- CTA -->
          <tr>
            <td style="background:#0d1526;padding:36px 40px;border-left:1px solid #c9a84c22;border-right:1px solid #c9a84c22;text-align:center;">
              <p style="margin:0 0 6px;font-size:13px;color:#ffffff60;font-family:Arial,sans-serif;">Have questions? Reach us directly:</p>
              <p style="margin:0 0 24px;font-size:13px;color:#c9a84c;font-family:Arial,sans-serif;">charter@bluenutmegcruises.com &nbsp;·&nbsp; +62 812-3456-7890</p>
              <a href="https://wa.me/628123456789?text=Hi%20Blue%20Nutmeg%2C%20I%20just%20submitted%20an%20inquiry%20and%20would%20like%20to%20know%20more."
                style="display:inline-block;background:#c9a84c;color:#0a0f1e;font-family:Arial,sans-serif;font-size:11px;letter-spacing:0.25em;text-transform:uppercase;text-decoration:none;padding:14px 32px;font-weight:600;">
                Chat on WhatsApp
              </a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#080d1a;padding:24px 40px;border:1px solid #c9a84c22;border-top:none;border-radius:0 0 2px 2px;text-align:center;">
              <p style="margin:0 0 8px;font-size:11px;color:#ffffff50;font-family:Arial,sans-serif;letter-spacing:0.05em;">
                <a href="#" style="color:#c9a84c;text-decoration:none;margin:0 8px;">Instagram</a>
                <span style="color:#ffffff20;">·</span>
                <a href="#" style="color:#c9a84c;text-decoration:none;margin:0 8px;">Facebook</a>
                <span style="color:#ffffff20;">·</span>
                <a href="#" style="color:#c9a84c;text-decoration:none;margin:0 8px;">TripAdvisor</a>
              </p>
              <p style="margin:8px 0 0;font-size:10px;color:#ffffff25;font-family:Arial,sans-serif;line-height:1.6;">
                Blue Nutmeg Luxury Catamaran · Benoa Harbour, Bali, Indonesia<br/>
                You received this email because you submitted an inquiry on our website.
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