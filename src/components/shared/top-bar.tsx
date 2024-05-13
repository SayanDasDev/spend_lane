"use client";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { Menu } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Icons } from "./icons";
import { Skeleton } from "../ui/skeleton";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import NavSheet from "./hamburger-sheet";
import { usePathname } from "next/navigation";
import { docsConfig } from "@/config/docs";

const TopBar = () => {
  const pathName = usePathname();

  return (
    <header className="flex fixed w-full !bg-[#f5f8f9] md:w-[calc(100%-220px)] lg:w-[calc(100%-280px)] h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
      <div className="">
        <div className="md:hidden bg-primary/10 rounded-md border">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side={"left"} className="flex flex-col">
              <NavSheet />
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <div className="mx-auto font-semibold">
        <span className="max-[200px]:hidden md:hidden">{docsConfig.mainNav.find((item) => item.href === pathName)?.title}</span>
      </div>
      <div className="pt-2">
        <ClerkLoaded>
          <UserButton
            appearance={{
              variables: {
                colorText: "#243A5A",
                fontWeight: {
                  medium: 600,
                },
                fontSize: "1.05rem",
              },
            }}
            afterSignOutUrl="/"
          />
        </ClerkLoaded>
        <ClerkLoading>
          <Skeleton className="h-7 w-7 rounded-full" />
        </ClerkLoading>
      </div>
    </header>
  );
};

export default TopBar;
