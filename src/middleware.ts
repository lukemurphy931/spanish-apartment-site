import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const ADMIN_PATHS = ['/admin', '/api/page', '/api/image', '/api/event'];

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const isAdminReq = ADMIN_PATHS.some((p) => url.pathname.startsWith(p));
  const method = req.method.toUpperCase();
  const needsAuth =
    isAdminReq && (url.pathname.startsWith('/admin') || ['POST', 'PUT', 'PATCH', 'DELETE'].includes(method));

  if (needsAuth) {
    const adminCookie = req.cookies.get('admin')?.value;
    if (adminCookie !== '1') {
      if (url.pathname.startsWith('/admin')) {
        const loginUrl = new URL('/admin/login', req.url);
        loginUrl.searchParams.set('next', url.pathname);
        return NextResponse.redirect(loginUrl);
      }
      return new NextResponse('Unauthorized', { status: 401 });
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/api/:path*'],
};
