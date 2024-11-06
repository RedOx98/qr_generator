import { NextRequest, NextResponse } from 'next/server'
// import { decrypt } from './lib/session'
import { cookies } from 'next/headers'
import { Session, NAVIGATION } from './utils/definitions'
import { decrypt } from './utils/session'
// import { NAVIGATION, ROLES, Session } from './lib/definitions'

const publicRoutes = ['/login', '/login/success', '/login/error']
const userRoutes = ['/']

export default async function middleware(req: NextRequest) {
    console.log("Middleware is being executed")
    // 2. Check if the current route is protected or public
    const path = req.nextUrl.pathname
    // const isAdminProtectedRoute = path.startsWith(NAVIGATION.HOME)

    console.log(path);

    const publicRoutes = [NAVIGATION.LOGIN.toString()];
    const isUserProtectedRoute = path.startsWith(NAVIGATION.USER);

    // 3. Decrypt the session gotten from the cookie
    const cookie = req.cookies.get('session')?.value!
    console.log("This is the cookie");
    console.log(cookie);
    // If on empty path - Go to dashboard
    if (path == "/") {
        // return NextResponse.redirect(new URL('/', req.nextUrl))
        // return NextResponse.next();
        if (cookie) {
            console.log("Cookie found, retuning nxt route")
            return NextResponse.next();
        }

        console.log("Cookie issue");
        return NextResponse.redirect(new URL(NAVIGATION.LOGIN, req.nextUrl));
    }

    if (publicRoutes.includes(path)) {
        // If going to login page, please go
        console.log("Going through public path");
        return NextResponse.next()
    }



    // 4. If no cookie found, redirect to /login page
    if (!cookie) {
        console.log("Another Cookie issue");
        return NextResponse.redirect(new URL('/login', req.nextUrl));
    }

    // Retrieve session
    // let session: Session | null = null;

    let session: Session | null = null;

    try {
        session = await decrypt(cookie)
    } catch (error) {
        console.error("Error decrypting session:", error);
        // Redirect to login to create new session
        return NextResponse.redirect(new URL('/login', req.nextUrl))
    }

    // // 5. Redirect to /login if the user is not authenticated or user is not an admin
    // if (isAdminProtectedRoute && !session?.id) {
    //     return NextResponse.redirect(new URL('/login', req.nextUrl))
    // }

    // Redirect to staff page if ROLE == UAM
    // if (session?.role == ROLES.UAM && path == NAVIGATION.HOME) {
    //     return NextResponse.redirect(new URL(NAVIGATION.STAFF, req.nextUrl))
    // }

    if (isUserProtectedRoute && !session) {
        console.log("Session issue");
            return NextResponse.redirect(new URL("/login", req.nextUrl));
          }

    return NextResponse.next()
}

// Allow images and SVGs
export const config = {
    matcher: [
        "/((?!api|_next/static|_next/image|.\\..).*)",
        // "/((?!api|_next/static|_next/image|.\\.css$|.\\.js$|.\\.png$|.\\.ico$|.\\.svg$|.\\.gif$).*)",
    ],
};

// import { NextRequest, NextResponse } from "next/server";
// import { decrypt } from "./utils/session";
// import { NAVIGATION, Session } from "./utils/definitions";

// export default async function middleware(req: NextRequest) {
//   const path = req.nextUrl.pathname;
//   console.log("Current path: " + path);

//   const publicRoutes = [NAVIGATION.LOGIN.toString()];
//   const isUserProtectedRoute = path.startsWith(NAVIGATION.USER);

//   const cookie = req.cookies.get("session")?.value;

//   console.log("first");
//   if (path === "/") {
//     if (cookie) {
//       return NextResponse.next();
//     }
//     return NextResponse.redirect(new URL(NAVIGATION.LOGIN, req.nextUrl));
//   }

//   if (publicRoutes.includes(path)) {
//     return NextResponse.next();
//   }

//   if (!cookie) {
//     return NextResponse.redirect(new URL("/login", req.nextUrl));
//   }

//   let session: Session | null = null;
//   try {
//     session = await decrypt(cookie);
//     console.log("Session:", session);
//   } catch (err) {
//     console.error("Error decrypting session:", err);
//     return NextResponse.redirect(new URL("/login", req.nextUrl));
//   }

//   if (isUserProtectedRoute && !session) {
//     return NextResponse.redirect(new URL("/login", req.nextUrl));
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: [
//     "/((?!api|_next/static|_next/image|.\\.png$|.\\.svg$|.\\.gif$).)",
//   ],
// };