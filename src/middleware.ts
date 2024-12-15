import { NextRequest, NextResponse } from "next/server";

export const middleware = async (req: NextRequest) => {
  try {
    const res = await fetch("http://localhost:3031/api/auth/check-auth", {
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
