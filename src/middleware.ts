import { NextRequest, NextResponse } from "next/server";
import AuthService from "./lib/AuthService";

export const middleware = async (req: NextRequest) => {
  const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
  try {
    const res = await AuthService.checkAuth();

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
