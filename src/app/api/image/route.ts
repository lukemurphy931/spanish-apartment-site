import { prisma } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  const images = await prisma.image.findMany({ orderBy: [{ pageSlug: 'asc' }, { sort: 'asc' }, { createdAt: 'desc' }] });
  return NextResponse.json(images);
}

export async function POST(req: Request) {
  const body = await req.json();
  const { url, caption, pageSlug, sort } = body || {};
  if (!url || !pageSlug) return new NextResponse('Missing url or pageSlug', { status: 400 });
  await prisma.image.create({ data: { url, caption, pageSlug, sort: Number(sort) || 0 } });
  return NextResponse.json({ ok: true });
}

export async function DELETE(req: Request) {
  const body = await req.json();
  const { id } = body || {};
  if (!id) return new NextResponse('Missing id', { status: 400 });
  await prisma.image.delete({ where: { id } });
  return NextResponse.json({ ok: true });
}
