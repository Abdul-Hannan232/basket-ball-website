import { NextResponse } from 'next/server';
import {jwtDecode} from 'jwt-decode';
import { getToken } from "next-auth/jwt";

export async function middleware(req) {
  const secret = process.env.NEXTAUTH_SECRET;
  let token = req.cookies.get('authToken') || await getToken({ req, secret });

  if (token) {
    token = token.value || token.authToken;
  }

  const url = req.nextUrl.clone();
  const pathname = url.pathname;

  // Define routes for role-based access control
  const adminRoutes = ['/admin'];
  const userRestrictedRoutes = ['/', '/home', '/courts', '/user-profile'];
  const protectedRoutes = ['/admin', '/user-profile', '/some-other-page']; // Add more restricted routes for unauthenticated users
  const openRoutes = ['/signin', '/signup', '/reset-password', '/forget-password'];

  // If no token (unauthenticated user)
  if (!token) {
    // Redirect to signin if trying to access protected routes
    if (protectedRoutes.some(route => pathname.startsWith(route))) {
      url.pathname = '/signin';
      return NextResponse.redirect(url);
    }
    return NextResponse.next();
  }

  try {
    const decodedToken = jwtDecode(token);
    const userRole = decodedToken.role;

    // Prevent authenticated users from accessing open routes (e.g., signin/signup)
    if (openRoutes.some(route => pathname.startsWith(route))) {
      url.pathname = '/home';
      return NextResponse.redirect(url);
    }

    // Admin-specific route handling
    if (userRole === 'admin') {
      if (adminRoutes.some(route => pathname.startsWith(route))) {
        return NextResponse.next(); // Allow access to admin routes
      } else if (userRestrictedRoutes.some(route => pathname.startsWith(route))) {
        url.pathname = '/admin'; // Redirect admin away from non-admin routes
        return NextResponse.redirect(url);
      }
    }

    // User-specific route handling
    if (userRole === 'user') {
      if (adminRoutes.some(route => pathname.startsWith(route))) {
        url.pathname = '/home'; // Redirect user away from admin routes
        return NextResponse.redirect(url);
      } else {
        return NextResponse.next(); // Allow user to access non-admin routes
      }
    }

  } catch (error) {
    console.error('Error decoding token:', error);
    req.cookies.delete('authToken');
    url.pathname = '/signin';
    return NextResponse.redirect(url);
  }
}

export const config = {
  matcher: ['/admin/:path*', '/home', '/courts', '/user-profile', '/signin', '/signup', '/reset-password', '/forget-password'],
};
