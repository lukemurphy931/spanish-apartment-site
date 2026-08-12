import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const token = req.cookies.get('admin_token')?.value;
  const path = req.nextUrl.pathname;

  const isAdminPath = path.startsWith('/admin');
  const isLoginPath = path === '/admin/login';

  // If user is not logged in and trying to access an admin page (not the login page), redirect to login
  if (isAdminPath && !isLoginPath && !token) {
    const loginUrl = req.nextUrl.clone();
    loginUrl.pathname = '/admin/login';
    return NextResponse.redirect(loginUrl);
  }

  // If user is logged in and tries to go to login, redirect them to admin home
  if (isLoginPath && token) {
    const adminUrl = req.nextUrl.clone();
    adminUrl.pathname = '/admin';
    return NextResponse.redirect(adminUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};