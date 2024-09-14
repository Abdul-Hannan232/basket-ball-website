import { NextResponse } from 'next/server';
import { jwtDecode } from 'jwt-decode';
import { getToken } from "next-auth/jwt"

export async function middleware(req) {
  const secret = process.env.NEXTAUTH_SECRET;
  let token = req.cookies.get('authToken') || await getToken({ req, secret });

  if (token) {
    token = token.value || token.authToken
  }
  const url = req.nextUrl.clone();

  // Get the pathname of the requested URL
  const pathname = url.pathname;

  // Define protected routes for admin and user roles
  const adminRoutes = ['/admin'];
  const protectedRoutes = ['/admin','/user-profile'];// routes where user can not go without login
  const authenticatedRoutes = ['/signin', '/signup', '/reset-password', '/forget-password']

  if (!token) {
    // Redirect to login if there is no token and the route is protected
    if (adminRoutes.some(route => pathname.startsWith(route)) || protectedRoutes.some(route => pathname.startsWith(route))) {
      url.pathname = '/signin';
      return NextResponse.redirect(url);
    }
    return NextResponse.next();
  }

  try {
    const decodedToken = jwtDecode(token);
    const userRole = decodedToken.role;

    if (authenticatedRoutes.some(route => pathname.startsWith(route))) {
      url.pathname = '/home';
      return NextResponse.redirect(url);
    }

    // Check if the current pathname is an admin route
    const isAdminRoute = adminRoutes.some(route => pathname.startsWith(route));

    // Admin-specific route handling
    if (userRole === 'admin') {
      if (isAdminRoute) {
        return NextResponse.next(); // Allow admin access to admin routes
      } else {
        url.pathname = '/admin'; // Redirect admin to the admin home/dashboard
        return NextResponse.redirect(url);
      }
    }

    // User-specific route handling
    if (userRole === 'user') {
      if (isAdminRoute) {
        url.pathname = '/home'; // Redirect user away from admin routes to user home
        return NextResponse.redirect(url);
      } else {
        return NextResponse.next(); // Allow user access to non-admin routes
      }
    }

  } catch (error) {
    console.error('Error handling middleware:', error);
    req.cookies.delete('authToken');
    url.pathname = '/home';
    return NextResponse.redirect(url);
  }
}


export const config = {
  matcher: ['/admin/:path*', '/home', '/courts', '/signin', '/signup', '/reset-password', '/forget-password']
};