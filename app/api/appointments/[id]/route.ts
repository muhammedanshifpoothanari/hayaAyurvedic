import { NextRequest, NextResponse } from 'next/server'
import { getCollection } from '@/lib/mongodb'
import { ObjectId } from 'mongodb'

// PATCH /api/appointments/[id]
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const resolvedParams = await params
    const { id } = resolvedParams
    const collection = await getCollection('appointments')
    const body = await request.json()

    // Filter fields we want to allow updating
    const updateFields: any = {}
    if (body.status) updateFields.status = body.status
    if (body.selectedDoctor) updateFields.selectedDoctor = body.selectedDoctor
    if (body.preferredDate) updateFields.preferredDate = body.preferredDate
    if (body.timeSlot) updateFields.timeSlot = body.timeSlot

    if (Object.keys(updateFields).length === 0) {
      return NextResponse.json({ success: false, error: 'No fields to update' }, { status: 400 })
    }

    const result = await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: updateFields }
    )

    if (result.matchedCount === 0) {
      return NextResponse.json({ success: false, error: 'Appointment not found' }, { status: 404 })
    }

    return NextResponse.json({ success: true, message: 'Appointment updated successfully' })
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to update appointment' }, { status: 500 })
  }
}
