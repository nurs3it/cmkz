"use client";

import { Button } from "@ui/button";
import { menu } from "@components/features/header/data";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@ui/hover-card";
import { Sheet, SheetContent, SheetTrigger } from "@ui/sheet";
import { Menu } from "lucide-react";
import { getId } from "@lib/id";
import Link from "next/link";

export function Navigation() {
  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-2 ml-auto">
        {menu.map((item) => (
          <HoverCard key={item.code} openDelay={0} closeDelay={0}>
            <HoverCardTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="text-sm px-2 hover:text-primary"
              >
                {item.label}
              </Button>
            </HoverCardTrigger>
            <HoverCardContent className="p-0 w-max h-max">
              <div className="flex flex-col w-max h-max">
                {item.children?.map((child) => (
                  <Button
                    asChild
                    key={getId()}
                    variant="ghost"
                    className="p-4 flex-wrap font-normal max-w-80 flex h-auto text-left justify-start cursor-pointer rounded-none border-b whitespace-normal hover:text-primary"
                  >
                    <Link href={child.href || ""}>{child.label}</Link>
                  </Button>
                ))}
              </div>
            </HoverCardContent>
          </HoverCard>
        ))}
      </nav>

      {/* Mobile Navigation */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[70vw] overflow-auto">
          <nav className="flex flex-col gap-8 mt-8">
            {menu.map((item) => (
              <div key={item.label} className="flex flex-col gap-6">
                <div className="font-semibold text-lg">{item.label}</div>
                <div className="flex flex-col gap-3 pl-2">
                  {item.children?.map((child) => (
                    <Button
                      key={getId()}
                      variant="ghost"
                      className="justify-start whitespace-normal text-left font-normal"
                    >
                      {child.label}
                    </Button>
                  ))}
                </div>
              </div>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </>
  );
}
