exports.handler = async function (event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }

  let name, email, message

  try {
    const contentType = event.headers['content-type'] || ''

    if (contentType.includes('application/json')) {
      const body = JSON.parse(event.body)
      name = body.name
      email = body.email
      message = body.message
    } else {
      const params = new URLSearchParams(event.body)
      name = params.get('name')
      email = params.get('email')
      message = params.get('message')
    }
  } catch (err) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid request body' }) }
  }

  if (!name || !email || !message) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Missing required fields' }) }
  }

  const TELEGRAM_TOKEN = process.env.TELEGRAM_BOT_TOKEN
  const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID

  if (!TELEGRAM_TOKEN || !TELEGRAM_CHAT_ID) {
    console.error('Missing Telegram environment variables')
    return { statusCode: 500, body: JSON.stringify({ error: 'Server configuration error' }) }
  }

  const timestamp = new Date().toLocaleString('en-CA', {
    timeZone: 'America/Toronto',
    dateStyle: 'medium',
    timeStyle: 'short',
  })

  const text = [
    '📬 *New message from rajivramkrishnan.com*',
    '',
    `👤 *Name:* ${escapeMarkdown(name)}`,
    `📧 *Email:* ${escapeMarkdown(email)}`,
    `🕐 *Time:* ${timestamp} ET`,
    '',
    '*Message:*',
    escapeMarkdown(message),
  ].join('\n')

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text,
          parse_mode: 'Markdown',
        }),
      }
    )

    const result = await response.json()

    if (!result.ok) {
      console.error('Telegram API error:', result)
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Failed to send message' }),
      }
    }

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ success: true }),
    }
  } catch (err) {
    console.error('Network error sending to Telegram:', err)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Network error' }),
    }
  }
}

function escapeMarkdown(text) {
  return String(text).replace(/[_*[\]()~`>#+\-=|{}.!]/g, '\\$&')
}
