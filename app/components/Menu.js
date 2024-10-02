import Link from "next/link";
import { cookies } from "next/headers";

export default function Menu() {
    const cookieStore = cookies();
    const loggedIn = cookieStore.get('loggedin')?.value || false;

    console.log("Menu Loaded!");

    return (
        <div>
                <Link href="/">[Home]</Link>
                <Link href="/news">[News]</Link>
                <Link href="/login">[Login]</Link>
                {loggedIn && "HELLO LOGGED IN"}
        </div>
    );
}