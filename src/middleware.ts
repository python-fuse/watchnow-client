import { NextRequest, NextResponse } from "next/server";
import AxiosService from "./lib/AxiosService";

export const middleware = async (req: NextRequest) => {
  try {
    // Check if the cookie is present
    const cookie = req.headers.get("cookie");
    if (!cookie) {
      return NextResponse.redirect(new URL("/login", req.url));
    }

    console.log("Cookie from middleware:", cookie);
    // Use fetch to check authentication via API
    const response = await fetch(
      `${
        process.env.NODE_ENV === "development"
          ? process.env.NEXT_PUBLIC_BACKEND_URL
          : process.env.NEXT_PUBLIC_BACKEND_URL_PROD
      }/api/auth/check-auth`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Cookie: cookie, // Forward cookie to the authentication endpoint
          Origin:
            process.env.NODE_ENV === "development"
              ? "http://localhost:3000"
              : process.env.NEXT_PUBLIC_BASE_URL_PROD!,
        },
        credentials: "include",
      }
    );

    // If authenticated, proceed
    if (response.status == 200) {
      console.log("Check from middleware: Authenticated");
      return NextResponse.next();
    }
    // If authentication fails, redirect to login
    console.log("Check from middleware: Not Authenticated");
    return NextResponse.redirect(new URL("/login", req.url));
  } catch (error) {
    console.error("Fetch Auth Error:", error);
    // Redirect to login page if an error occurs
    return NextResponse.redirect(new URL("/login", req.url));
  }
};

export const config = {
  matcher: "/dashboard/:path*",
};
