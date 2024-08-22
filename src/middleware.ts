import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "./utils/session";
import { NAVIGATION, Session } from "./utils/definitions";

export default async function middleware(req: NextRequest) {
  // Get path
  const path = req.nextUrl.pathname;

  console.log("this path: " + path);

  const publicRoutes = [NAVIGATION.LOGIN.toString()];

  /* Define Protected Routes By User Roles */
  const isUserProtectedRoute = path.startsWith(NAVIGATION.USER);

  // Decrypt the session gotten from the cookie
  const cookie = req.cookies.get("session")?.value;

  // If /login and cookie is set, redirect to user dashboard
  if (path === "/" && cookie) {
    return NextResponse.redirect(new URL(NAVIGATION.USER, req.nextUrl));
  }

  // If on empty path - Go to Login page
  if (path === "/") {
    if (!cookie) {
      return NextResponse.redirect(new URL(NAVIGATION.LOGIN, req.nextUrl));
    }
    return NextResponse.redirect(new URL(NAVIGATION.USER, req.nextUrl));
  }

  if (publicRoutes.includes(path)) {
    // if going to login page, please go
    return NextResponse.next();
  }

  // 4. if no cookie found redirect to /login page
  if (!cookie) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  // Retrieve session
  let session: Session | null = null;

  try {
    session = await decrypt(cookie);
    console.log(session);
  } catch (err) {
    console.error("Error decrypting session:", err);
    // Redirect to login to create new session
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  // Redirect to /login if user is not authenticated
  if (isUserProtectedRoute && !session) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  // Successful authentication, continue on path
  return NextResponse.next();
}

// Allow images and SVGs
export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|.*\\.png$|.*\\.svg$|.*\\.gif$).*)",
  ],
};

