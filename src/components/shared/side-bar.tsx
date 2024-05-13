"use client";

import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { Icons } from "./icons";
import { docsConfig } from "@/config/docs";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import NavItems from "./hamburger-sheet";

const SideBar = () => {
  const pathname = usePathname();

  return (
    <div className="max-md:hidden max-h-screen border-r bg-muted/40">
      <div className="flex md:w-[220px] lg:w-[280px] flex-col gap-2 fixed">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Icons.Logo className="h-8 w-8" />
            <span className="text-2xl font-bold">SpendLane</span>
          </Link>
        </div>
        <div className="flex flex-col gap-2 pt-4">
          {docsConfig.mainNav.map((item, index) => {
            const Icon = item.icon && Icons[item.icon];
            const isActive = pathname === item.href;
            return (
              <Link
                href={item.href}
                key={index}
                className={cn("flex gap-2 h-10 items-center font-medium pl-4", {
                  "border-l-[2px] bg-gradient-to-r from-primary/50 via-primary/20 via-10% to-95% to-transparent border-primary": isActive,
                })}
              >
                {Icon && <Icon size={20} />}
                <p>{item.title}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
