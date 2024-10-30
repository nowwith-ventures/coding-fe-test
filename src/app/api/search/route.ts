import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { query } = await request.json()

  const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL
  const apiKey = process.env.NEXT_PUBLIC_API_KEY

  try {
    const response = await fetch(baseURL!, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${apiKey}`,
      },
      body: JSON.stringify({ query }),
    })

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error fetching from API:', error)
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 })
  }
}
