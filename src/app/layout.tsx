import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'
import { QueryProvider } from "@/providers/query-provider";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SpendLane",
  description: "A finace management app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{ 
        variables: { 
          colorPrimary: '#243A5A',
          colorBackground: '#f9fafb',
          fontSize: "16px",
        },
       }}
    >
      <html lang="en">
        <body className={raleway.className}>
          <QueryProvider>
            {children}
          </QueryProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
