// protectedRoutes.js

export const protectedRoutes = {
    user: ['/home', '/courts'], // Routes accessible by any authenticated user
    admin: ['/admin/:path*'] // Routes accessible by admin users only
  };