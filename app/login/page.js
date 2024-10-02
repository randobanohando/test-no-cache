"use client";

import { SetLoginCookie } from "@/app/actions/login";

export default function Login() {
    async function HandleLoginCookie() {
        await SetLoginCookie();
    }

    console.log("In Login!");

    return (
        <div>
            You will be logged in, check cookies to see in Chrome!
            <br />
            <button onClick={HandleLoginCookie}>Log me in!</button>
            <br />
            Once done, manually remove the cookie or let it expire then use the nav links, it should still show as if you're logged in.
        </div>
    );
}