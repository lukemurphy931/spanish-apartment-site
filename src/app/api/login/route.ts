import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const password = body?.password || '';
  if (!process.env.ADMIN_PASSWORD) {
    return new NextResponse('Server missing ADMIN_PASSWORD', { status: 500 });
  }
  if (password !== process.env.ADMIN_PASSWORD) {
    return new NextResponse('Invalid password', { status: 401 });
  }
  const res = new NextResponse('ok');
  res.cookies.set('admin', '1', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 8,
  });
  return res;
}
