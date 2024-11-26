import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export function middleware(request: NextRequest) {
    console.log('Middleware running');
    const cookieStore = cookies(); // Access cookies
    const token = cookieStore.get('token')?.value; // Get the value of the 'token' cookie

    console.log('Middleware executed');
    console.log('Token:', token);
    console.log('Requested Path:', request.nextUrl.pathname);

    const publicPaths = ['/auth/sign-in', '/auth/sign-up', '/'];
    // If path is public, allow access
    if (publicPaths.includes(request.nextUrl.pathname)) {
        console.log('Public path accessed, allowing next');
        return NextResponse.next();
    }

    // If no token exists, redirect to login
    if (!token) {
        console.log('No token found, redirecting to /auth/sign-in');
        return NextResponse.redirect(new URL('/auth/sign-in', request.url));
    }

    try {
        const isValidToken = verifyJwtToken(token); // Proper JWT verification

        if (isValidToken) {
            console.log('Token is valid, proceeding...');
            return NextResponse.next();
        } else {
            throw new Error('Invalid token');
        }
    } catch (error) {
        console.error('Token verification failed:', error);
        return NextResponse.redirect(new URL('/auth/sign-in', request.url));
    }
}

// JWT token verification (placeholder)
function verifyJwtToken(token: string): boolean {
    // Implement JWT verification logic here
    // Check expiration, signature, etc.
    return true; // Replace this with proper verification
}

// Middleware configuration
export const config = {
    matcher: ['/auth/*', '/register', '/dashboard/*', '/*'], // Define paths for middleware
};
