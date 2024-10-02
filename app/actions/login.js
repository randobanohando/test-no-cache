"use server";

import { cookies } from "next/headers";

export async function SetLoginCookie() {
    const cookieStore = cookies();
    cookieStore.set({
        name: 'loggedin',
        value: 'true',
        path: '/',
        httpOnly: true,
        expires: new Date(Date.now() + 5 * 60 * 1000), // Set to expire in 5 minutes
    });
}