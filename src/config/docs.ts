import { MainNavItem } from "@/types/nav"

interface DocsConfig {
  mainNav: MainNavItem[]
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Overview",
      href: "/",
      icon: "Overview",
    },
    {
      title: "Transactions",
      href: "/transactions",
      icon: "Transactions",
    },
    {
      title: "Accounts",
      href: "/accounts",
      icon: "Accounts",
    },
    {
      title: "Categories",
      href: "/categories",
      icon: "Categories",
    },
    {
      title: "Settings",
      href: "/settings",
      icon: "Settings",
    },
  ],
}