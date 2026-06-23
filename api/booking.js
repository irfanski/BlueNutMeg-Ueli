import { Resend } from 'resend'
import { createClient } from '@supabase/supabase-js'
import { ownerEmailHtml } from '../src/emails/ownerEmail.js'
import { catalogEmailHtml } from '../src/emails/catalogEmail.js'
import ws from 'ws'

const resend = new Resend(process.env.RESEND_API_KEY)
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY,
  { realtime: { transport: ws } }
)

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, phone, date, package: pkg, guests, message } = req.body

  // Basic validation
  if (!name || !email || !date || !pkg || !guests) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  try {
    // 1. Save to Supabase
    const { error: dbError } = await supabase
      .from('bookings')
      .insert([{ name, email, phone, date, package: pkg, guests, message }])

    if (dbError) throw new Error(`DB error: ${dbError.message}`)

    // 2. Send email to Blue Nutmeg (owner notification)
    await resend.emails.send({
      from: process.env.RESEND_FROM_OWNER,
      to: process.env.RESEND_TO_OWNER,
      replyTo: email,
      subject: `New Charter Inquiry — ${pkg} · ${name}`,
      html: ownerEmailHtml({ name, email, phone, date, package: pkg, guests, message }),
    })

    // 3. Send catalog email to user
    await resend.emails.send({
      from: process.env.RESEND_FROM_OWNER,
      to: email,
      subject: 'Thank You for Your Inquiry — Blue Nutmeg Luxury Catamaran',
      html: catalogEmailHtml({ name }),
    })

    return res.status(200).json({ success: true })
  } catch (err) {
    console.error('Booking error:', err)
    return res.status(500).json({ error: 'Something went wrong. Please try again.' })
  }
}