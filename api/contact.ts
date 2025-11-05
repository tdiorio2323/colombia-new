import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactRequest {
  name: string;
  email: string;
  message: string;
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  try {
    const { name, email, message } = req.body as ContactRequest;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        ok: false,
        error: 'Missing required fields: name, email, and message are required'
      });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        ok: false,
        error: 'Invalid email address'
      });
    }

    // Check environment variables
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set');
      return res.status(500).json({
        ok: false,
        error: 'Server configuration error'
      });
    }

    if (!process.env.CONTACT_TO) {
      console.error('CONTACT_TO is not set');
      return res.status(500).json({
        ok: false,
        error: 'Server configuration error'
      });
    }

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: 'Colombian Luxury <onboarding@resend.dev>', // Use your verified domain
      to: [process.env.CONTACT_TO],
      subject: `New Exclusive Inquiry from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(to right, #f4a9a8, #d4af37);
                padding: 30px;
                border-radius: 8px 8px 0 0;
                text-align: center;
              }
              .header h1 {
                margin: 0;
                color: #111111;
                font-size: 24px;
              }
              .content {
                background: #f9f9f9;
                padding: 30px;
                border-radius: 0 0 8px 8px;
              }
              .field {
                margin-bottom: 20px;
              }
              .field-label {
                font-weight: 600;
                color: #666;
                font-size: 12px;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                margin-bottom: 5px;
              }
              .field-value {
                font-size: 16px;
                color: #111;
              }
              .message-box {
                background: white;
                padding: 20px;
                border-left: 4px solid #d4af37;
                border-radius: 4px;
                margin-top: 10px;
              }
              .footer {
                text-align: center;
                margin-top: 30px;
                padding-top: 20px;
                border-top: 1px solid #ddd;
                color: #999;
                font-size: 12px;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>🌟 New Exclusive Inquiry</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="field-label">From</div>
                <div class="field-value">${name}</div>
              </div>
              <div class="field">
                <div class="field-label">Email</div>
                <div class="field-value">
                  <a href="mailto:${email}" style="color: #d4af37; text-decoration: none;">
                    ${email}
                  </a>
                </div>
              </div>
              <div class="field">
                <div class="field-label">Message</div>
                <div class="message-box">
                  ${message.replace(/\n/g, '<br>')}
                </div>
              </div>
            </div>
            <div class="footer">
              <p>This inquiry was submitted through Colombian Luxury website</p>
              <p>Received: ${new Date().toLocaleString('en-US', {
                dateStyle: 'long',
                timeStyle: 'short'
              })}</p>
            </div>
          </body>
        </html>
      `,
      text: `
New Exclusive Inquiry from Colombian Luxury

From: ${name}
Email: ${email}

Message:
${message}

---
Received: ${new Date().toLocaleString()}
      `,
    });

    if (error) {
      console.error('Resend API error:', error);
      return res.status(500).json({
        ok: false,
        error: 'Failed to send email. Please try again later.'
      });
    }

    return res.status(200).json({
      ok: true,
      messageId: data?.id
    });

  } catch (error) {
    console.error('Contact API error:', error);
    return res.status(500).json({
      ok: false,
      error: 'An unexpected error occurred. Please try again later.'
    });
  }
}
