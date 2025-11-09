import { prisma } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  const events = await prisma.event.findMany({ orderBy: { start: 'asc' } });
  return NextResponse.json(events);
}

export async function POST(req: Request) {
  const body = await req.json();
  const { title, start, end, type, notes } = body || {};
  if (!title || !start || !end) return new NextResponse('Missing fields', { status: 400 });
  const s = new Date(start); const e = new Date(end);
  if (Number.isNaN(+s) || Number.isNaN(+e)) return new NextResponse('Invalid dates', { status: 400 });
  await prisma.event.create({ data: { title, start: s, end: e, type, notes } });
  return NextResponse.json({ ok: true });
}

export async function DELETE(req: Request) {
  const body = await req.json();
  const { id } = body || {};
  if (!id) return new NextResponse('Missing id', { status: 400 });
  await prisma.event.delete({ where: { id } });
  return NextResponse.json({ ok: true });
}
