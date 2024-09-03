import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "./utils/session";
import { NAVIGATION, Session } from "./utils/definitions";

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  console.log("Current path: " + path);

  const publicRoutes = [NAVIGATION.LOGIN.toString()];
  const isUserProtectedRoute = path.startsWith(NAVIGATION.USER);

  const cookie = req.cookies.get("session")?.value;

  if (path === "/") {
    if (cookie) {
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL(NAVIGATION.LOGIN, req.nextUrl));
  }

  if (publicRoutes.includes(path)) {
    return NextResponse.next();
  }

  if (!cookie) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  let session: Session | null = null;
  try {
    session = await decrypt(cookie);
    console.log("Session:", session);
  } catch (err) {
    console.error("Error decrypting session:", err);
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  if (isUserProtectedRoute && !session) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|.\\.png$|.\\.svg$|.\\.gif$).)",
  ],
};