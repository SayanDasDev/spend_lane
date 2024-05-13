"use client";

import { docsConfig } from "@/config/docs";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Icons } from "./icons";
import { MainNavItem } from "@/types/nav";
import { usePathname } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import { SheetClose } from "../ui/sheet";

const NavSheet = () => {
  const pathname = usePathname();

  return (
    <>
      <div className="flex h-14 items-center px-4 pt-12 lg:h-[60px] lg:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Icons.Logo className="h-7 w-7" />
          <span className="text-xl font-bold text-primary">SpendLane</span>
        </Link>
      </div>
      <div className="flex flex-col gap-2 pt-8">
        {docsConfig.mainNav.map((item, index) => {
          const Icon = item.icon && Icons[item.icon];
          const isActive = pathname === item.href;
          return (
            <SheetClose asChild key={index}>
              <Link
                href={item.href}
                key={index}
                className={cn(
                  "flex gap-2 h-10 items-center font-medium pl-4 text-primary",
                  { "bg-primary/20 rounded-md": isActive }
                )}
              >
                {Icon && <Icon size={20} />}
                <p>{item.title}</p>
              </Link>
            </SheetClose>
          );
        })}
      </div>
    </>
  );
};

export default NavSheet;
