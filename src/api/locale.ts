"use server";

import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";

export const changeLocale = async (locale: string) => {
  const cookieStore = await cookies();
  const headerStore = await headers();
  cookieStore.set("x-locale", locale);

  redirect(headerStore.get("x-pathname") || "/");
};
