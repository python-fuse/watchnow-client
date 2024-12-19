"use server";
import { cookies } from "next/headers";

export async function checkAuth() {
  const cookieStore = cookies();

  const sessionCookies = cookieStore.get("connect.sid");
  console.log("Session cookies::", sessionCookies);

  if (!sessionCookies) {
    console.log("No session cookies found");
    return { authenticated: false, user: null };
  }

  try {
    const res = await fetch("http://localhost:3031/api/auth/check-auth", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Cookie: `connect.sid=${sessionCookies.value}`,
      },
      credentials: "include",
      cache: "no-store",
    });

    console.log("User authenticated::", res.ok);
    return {
      authenticated: true,
      "connect.sid": sessionCookies.value,
    };
  } catch (e) {
    console.error(e);
    return { authenticated: false, user: null };
  }
}
