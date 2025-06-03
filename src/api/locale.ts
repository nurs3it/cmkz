"use server";

import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";

export const changeLocale = async (locale: string) => {
  const cookieStore = await cookies();
  const headerStore = await headers();
  cookieStore.set("x-locale", locale);

  redirect(headerStore.get("x-pathname") || "/");
};

export const getLocale = async () => {
  try {
    const cookieStore = await cookies();
    return cookieStore.get("x-locale")?.value || "ru";
  } catch (error) {
    console.error("Error getting locale:", error);
    return "ru";
  }
};
