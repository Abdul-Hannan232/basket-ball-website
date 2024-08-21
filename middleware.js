import { NextResponse } from 'next/server';
import { jwtDecode } from 'jwt-decode';

export function middleware(req) {
  let token = req.cookies.get('authToken');
  if (token) {
    token = token.value
  }

  const url = req.nextUrl.clone();

  // Get the pathname of the requested URL
  const pathname = url.pathname;

  // Define protected routes for admin and user roles
  const adminRoutes = ['/admin'];
  const userRoutes = ['/admin', '/admin'];

  if (!token) {
    // Redirect to login if there is no token and the route is protected
    if (adminRoutes.some(route => pathname.startsWith(route)) || userRoutes.some(route => pathname.startsWith(route))) {
      url.pathname = '/';
      return NextResponse.redirect(url);
    }
    return NextResponse.next();
  }

  try {
    const decodedToken = jwtDecode(token);
    const userRole = decodedToken.role;

    // Admin specific route handling
    if (userRole === 'admin') {
      if (pathname.startsWith('/admin')) {
        return NextResponse.next(); // Allow access
      } else {
        url.pathname = '/'; // Redirect to login or any other page
        return NextResponse.redirect(url);
      }
    }

    // User specific route handling
    if (userRole === 'user') {
      if (pathname.startsWith('/admin')) {
        url.pathname = '/'; // Redirect to login or any other page
        return NextResponse.redirect(url);
      }
      return NextResponse.next(); // Allow access
    }

    // Handle unknown roles or token issues
    throw new Error('Unknown role');
  } catch (error) {
    console.error('Error handling middleware:', error);
    req.cookies.delete('authToken');
    url.pathname = '/';
    return NextResponse.redirect(url);
  }
}


export const config = {
  matcher: ['/admin/:path*', '/home', '/courts']
};