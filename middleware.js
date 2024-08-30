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
  const userRoutes = ['/admin', '/admin'];
  const authenticatedRoutes=['/signin','/signup','/reset-password','/forget-password']

  if (!token) {
    // Redirect to login if there is no token and the route is protected
    if (adminRoutes.some(route => pathname.startsWith(route)) || userRoutes.some(route => pathname.startsWith(route))) {
      url.pathname = '/home';
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

    // Admin specific route handling
    if (userRole === 'admin') {
      if (pathname.startsWith('/admin')) {
        return NextResponse.next(); // Allow access
      } else {
        url.pathname = '/home'; // Redirect to login or any other page
        return NextResponse.redirect(url);
      }
    }

    // User specific route handling
    if (userRole === 'user') {
      if (pathname.startsWith('/admin')) {
        url.pathname = '/home'; // Redirect to login or any other page
        return NextResponse.redirect(url);
      }
      return NextResponse.next(); // Allow access
    }

    // Handle unknown roles or token issues
    throw new Error('Unknown role');
  } catch (error) {
    console.error('Error handling middleware:', error);
    req.cookies.delete('authToken');
    url.pathname = '/home';
    return NextResponse.redirect(url);
  }
}


export const config = {
  matcher: ['/admin/:path*', '/home', '/courts','/signin','/signup','/reset-password','/forget-password']
};