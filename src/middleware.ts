import { NextRequest, NextResponse } from "next/server";

export const middleware = async (req: NextRequest) => {
  const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
  try {
    const res = await fetch(`${BACKEND_URL}/api/auth/check-auth`, {
      method: "GET",
      headers: {
        Cookie: req.headers.get("cookie") || "", // Pass cookies from the request
      },
    });

    if (res.status !== 200) {
      throw new Error("Unauthorized");
    }
  } catch (error) {
    return NextResponse.redirect(new URL("/login", req.nextUrl).toString());
  }
};

export const config = {
  matcher: "/dashboard/:path*",
};
