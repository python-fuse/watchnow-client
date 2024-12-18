import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export const middleware = async (req: NextRequest) => {
  try {
    // Try to check authentication via API
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/check-auth`,
      {
        headers: {
          Cookie: req.headers.get("cookie") || "",
        },
      }
    );

    // If authentication fails, redirect to login
    return NextResponse.next();
  } catch (error) {
    // Redirect to login page if authentication fails
    return NextResponse.redirect(new URL("/login", req.url));
  }
};

export const config = {
  matcher: "/dashboard/:path*",
};
