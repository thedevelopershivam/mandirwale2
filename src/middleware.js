import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request) {
    const path = request.nextUrl.pathname;
    // return NextResponse.redirect(new URL('/home', request.url))

    const isPublic = path === "/admin/login" || path === "/admin/signup";
    const token = request.cookies.get('token')?.value || '';

    if (isPublic && token) {
        return NextResponse.redirect(new URL("/admin/dashboard", request.nextUrl));
    }
    if (!isPublic && !token) {
        return NextResponse.redirect(new URL("/admin/login", request.nextUrl));
    }

}

// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        '/admin/login',
        '/admin/signup',
        '/admin/:path*'
    ],
}