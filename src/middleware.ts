import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  response.headers.set("x-pathname", request.nextUrl.pathname);

  const locale = request.cookies.get("x-locale") || "ru";

  if (!request.cookies.has("x-locale")) {
    request.cookies.set("x-locale", "ru");
  }

  if (typeof locale === "string") {
    response.headers.set("x-locale", locale);
  } else {
    response.headers.set("x-locale", locale?.["value"]);
  }

  return response;
}
