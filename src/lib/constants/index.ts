export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "Israel Kitchen";
export const APP_DESCRIPTION= process.env.NEXT_PUBLIC_APP_DESCRIPTION || "A modern and easy to use Israel Kitchen app";
export const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL || "https://localhost:3000";
export const APP_VERSION = process.env.NEXT_PUBLIC_APP_VERSION || "1.0.0";
export const APP_AUTHOR = process.env.NEXT_PUBLIC_APP_AUTHOR || "Israel Kitchen Team";
export const APP_AUTHOR_URL = process.env.NEXT_PUBLIC_APP_AUTHOR_URL || "https://israel-kitchen.vercel.app";
export const APP_AUTHOR_EMAIL = process.env.NEXT_PUBLIC_APP_AUTHOR_EMAIL || "israel-kitchen@gmail.com";
export  const LATEST_PRODUCTS_LIMIT = Number(process.env.LATEST_PRODUCTS_LIMIT) || 4;
export const signInDefaultValues = {
    email: "admin@example.com",
    password: "letmein123",
}       