import { prisma } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  const pages = await prisma.page.findMany({ orderBy: { slug: 'asc' } });
  return NextResponse.json(pages);
}

export async function PUT(req: Request) {
  const body = await req.json();
  const { slug, title, content } = body || {};
  if (!slug || !title || typeof content !== 'string') {
    return new NextResponse('Missing fields', { status: 400 });
  }
  await prisma.page.upsert({
    where: { slug },
    create: { slug, title, content },
    update: { title, content },
  });
  return NextResponse.json({ ok: true });
}
