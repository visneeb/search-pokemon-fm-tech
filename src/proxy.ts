import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const response = NextResponse.next();
  // Add a custom response header called "x-pathname"
  // containing the current request pathname
  response.headers.set("x-pathname", request.nextUrl.pathname);
  return response;
}
