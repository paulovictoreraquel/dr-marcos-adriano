import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const webhookUrl = process.env.SHEETS_WEBHOOK_URL
  if (!webhookUrl) {
    console.error('SHEETS_WEBHOOK_URL não está configurada')
    return NextResponse.json({ ok: false }, { status: 500 })
  }

  const { name, email } = await request.json()
  if (typeof name !== 'string' || !name.trim() || typeof email !== 'string' || !email.trim()) {
    return NextResponse.json({ ok: false }, { status: 400 })
  }

  const sheetResponse = await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, submittedAt: new Date().toISOString() }),
  })

  if (!sheetResponse.ok) {
    return NextResponse.json({ ok: false }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}
