import { NextResponse } from 'next/server'
import { leadSchema } from '@/lib/validations'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const data = leadSchema.parse(body)

    // Store in DB if available
    if (process.env.DATABASE_URL) {
      try {
        const { prisma: db } = await import('@/lib/db')
        await db.lead.create({ data: {
          name: data.name,
          email: data.email,
          phone: data.phone,
          personType: data.personType as 'NATURAL' | 'JURIDICA',
          rightViolated: data.rightViolated,
          entity: data.entity,
          urgency: data.urgency as 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL',
          description: data.description,
        }})
      } catch {
        // DB not available — continue without saving
      }
    }

    // Send email if Resend configured
    if (process.env.RESEND_API_KEY) {
      try {
        const { welcomeEmail } = await import('@/lib/emails')
        await welcomeEmail(data.name, data.email)
      } catch {
        // Email not configured — continue
      }
    }

    return NextResponse.json({ success: true, message: 'Evaluación recibida exitosamente' })
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Error procesando la solicitud' },
      { status: 400 }
    )
  }
}
