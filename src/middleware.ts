import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export const middleware = async (req: NextRequest) => {
  const cookie = cookies().get("connect.sid");
  console.log("Cookie from middleware:", cookie);

  if (!cookie) {
    console.log("Session cookie missing");
    return NextResponse.redirect(new URL("/login", req.url));
  }

  console.log("Cookie found:", cookie);

  try {
    const response = await fetch(
      `${
        process.env.NODE_ENV == "development"
          ? process.env.NEXT_PUBLIC_BACKEND_URL
          : process.env.NEXT_PUBLIC_BACKEND_URL_PROD
      }/api/auth/check-auth`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Cookie: `connect.sid=${cookie.value}`,
        },
        credentials: "include",
      }
    );

    if (response.status === 200) {
      console.log("Authenticated");
      return NextResponse.next();
    }

    console.log("Authentication failed");
    return NextResponse.redirect(new URL("/login", req.url));
  } catch (error) {
    console.error("Middleware fetch error:", error);
    return NextResponse.redirect(new URL("/login", req.url));
  }
};

export const config = {
  matcher: "/dashboard/:path*",
};
