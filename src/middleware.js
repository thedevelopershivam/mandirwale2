import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export async function middleware(request) {
    const path = request.nextUrl.pathname;
    // const session = await getSession(req)
    const isPublic = path === "/admin/login" || 
                     path === "/admin/signup";
    const token = request.cookies.get('Authorization')?.value || '';

    if (isPublic && token && token !== undefined && token !== null && token !== '') 
    {
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