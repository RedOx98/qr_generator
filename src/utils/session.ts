'use server'
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { Session, User } from "./definitions"
import { JWTExpired } from "jose/errors";
import { FetchError } from "./FetchError";

const exp = 300 * 10000000;

// custom expiry for expired or invalid session
class SessionExpiredError extends Error {
    constructor(message: string = 'Session has expired') {
        super(message);
        this.name = 'SessionExpiredError';
    }
}

const secretKey = process.env.SESSION_SECRET;
if(!secretKey){
    throw new Error('SESSION_SECRET environment variable is not defined')
}

const key = new TextEncoder().encode(secretKey);

export type SSOResponse = {
    token: string,
    user: User
    exp: number
}

// Encrypt session
export const encrypt = async (payload: Session)=> {
    const expirationTime = new Date(Date.now() + exp); // 1 hour from now in seconds

    return await new SignJWT(payload)
    .setProtectedHeader({alg: "HS256"})
    .setIssuedAt()
    .setExpirationTime(expirationTime) // set expiration time as a timestamp
    .sign(key)
}

// Decrypt session

export const decrypt = async (input:string): Promise<any> => {
try {
    const {payload} = await jwtVerify(input, key, {
        algorithms: ["HS256"],
    });
    return payload;
} catch (err) {
    if (err instanceof JWTExpired) {
        throw new SessionExpiredError;
    }
    throw err; //Re-throw other errors
}
}

// Create session for Authenticated user
export const createSession = async (payload: User) => {
    try {
        // Set expiration time to 1 hour from now
        const expires = new Date(Date.now() + Math.floor(exp/1000));
        const session = await encrypt({...payload, SESSION_EXPIRY: Math.floor(expires.getTime() / 10000)});

        // Save session in a cookie
        cookies().set("session", session, {expires, httpOnly: true});
    } catch (err) {
        if (err instanceof FetchError) {
            // Custom error handling logic
            return Promise.reject({
                status: err.status,
                message: err.message,
            });
        }
        return Promise.reject({
            status: 500,
            message: 'Internal Server Error',
        });
    }
}

// Logout user
export const logout = async ()=>{
    // Destroy the session
    cookies().set("session", "", {expires: new Date(0)});
}

// Retrieve session from user storage
export const getSession = async ()=> {
    const session = cookies().get("session")?.value;
    if (!session) return null;
    try {
        return await decrypt(session);
    } catch (err) {
        return null;
    }
}

// Update session

export const updateSession = async (request: NextRequest)=> {
    const session = request.cookies.get("session")?.value;
    if (!session) return;
    // Refresh the session to expire in 1 hour
    try {
        const parsed = await decrypt(session);
        const expires = new Date(Date.now() + 60 * 60 * 1000);
        parsed.exp = Math.floor(expires.getTime() / 1000);
        const res = NextResponse.next();
        res.cookies.set({
            name: "session",
            value: await encrypt(parsed),
            httpOnly: true,
            expires,
        });
        return res;
    } catch (err) {
        
    }
}