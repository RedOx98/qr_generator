// import { AuthResponse } from "./actions";

export const BASE_URL = process.env.BACKEND_BASE_URL;
export const ROUTE_SECRET = process.env.ROUTE_SECRET;


export const COOOKIE_EXPIRY = 100000000000000;

const SESSION_EXPIRY = 10000;

export enum NAVIGATION {
  
    /*************************** User Routes ********************************************/
    USER = "/",
    USER_CUSTOMIZE = `${USER}/buildvcc`,
    LOGIN = "/login",
  }

export type User = {
    token: string;
    level: string;
    firstName: string;
    lastName: string;
    username: string;
    email: string,
    role: string,
};

export type Session = {SESSION_EXPIRY: number}

export type UserType = {
  user: User
}

export type ActionTypes = {
  addUserInfo:(user:User)=>void;
  destroyUserInfo:(user:User)=>void;
}