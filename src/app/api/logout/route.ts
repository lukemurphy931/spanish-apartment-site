import { NextResponse } from 'next/server';

export async function GET() {
  const headers = new Headers();
  headers.set('Set-Cookie', 'admin=; Max-Age=0; Path=/; HttpOnly; SameSite=Lax');
  headers.set('Location', '/');
  return new Response(null, { status: 302, headers });
}
