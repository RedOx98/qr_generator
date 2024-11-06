'use server'

import { User } from "./definitions"
import { createSession } from "./session"

export type AuthRequest = {
    payload: User
}

export const loginUser = async (payload: User)  => {
    try {
        if (payload == null) {
            return Promise.reject({
                status: 400,
                message: "Bad credentials",
            });
        }
    
        const user = await createSession(payload);
        console.log(user);
        return user;
    } catch (err) {
        return Promise.reject({
            status: 500,
            message: 'Internal Server Error',
        });
    }
}

export const logout = ()=> {
    logout();
}