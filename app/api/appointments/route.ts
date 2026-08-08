import { NextRequest, NextResponse } from 'next/server'
import { getCollection } from '@/lib/mongodb'

// GET /api/appointments
export async function GET(request: NextRequest) {
  try {
    const collection = await getCollection('appointments')
    const { searchParams } = new URL(request.url)
    const limit = parseInt(searchParams.get('limit') || '100')

    const appointments = await collection
      .find({})
      .sort({ createdAt: -1 })
      .limit(limit)
      .toArray()

    return NextResponse.json({ success: true, data: appointments })
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to fetch appointments' }, { status: 500 })
  }
}

// POST /api/appointments
export async function POST(request: NextRequest) {
  try {
    const collection = await getCollection('appointments')
    const body = await request.json()

    const now = new Date()
    const appointmentId = 'APT-' + Math.floor(1000 + Math.random() * 9000)
    const appointment = {
      appointmentId,
      name: body.name,
      phone: body.phone,
      email: body.email,
      selectedService: body.selectedService,
      preferredDate: body.preferredDate,
      timeSlot: body.timeSlot,
      selectedDoctor: body.selectedDoctor,
      message: body.message || '',
      status: body.status || 'pending',
      createdAt: now,
    }

    const result = await collection.insertOne(appointment)
    return NextResponse.json({ success: true, data: { ...appointment, _id: result.insertedId } }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to create appointment' }, { status: 500 })
  }
}
