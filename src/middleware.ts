import { NextRequest, NextResponse } from "next/server";

export const middleware = async (req: NextRequest) => {
  try {
    // Check if the cookie is present
    const cookie = req.headers.get("cookie");

    if (!cookie) {
      return NextResponse.redirect(new URL("/login", req.url));
    }

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

    const data = await response.json();
    console.log("response data", response);

    // If authenticated, proceed
    if (response.ok && data.user) {
      return NextResponse.next();
    }

    // If authentication fails, redirect to login
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
