import type { Metadata } from "next";
import "./globals.css";
import { ApolloWrapper } from "@/lib/apollo-wrapper";
import { Inter, Roboto } from "next/font/google";
import { cn } from "@/lib/utils";
import { SearchBar } from "@/components/search/SearchBar";
import Navbar from "@/components/layout/Navbar";
import { Suspense } from "react";

const robotoHeading = Roboto({
  subsets: ["latin"],
  variable: "--font-heading",
});

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Pokemon Search",
  description: "Searching for pokemon information",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full antialiased",
        "font-sans",
        inter.variable,
        robotoHeading.variable,
      )}
    >
      <body className="flex flex-col justify-center ">
        <Navbar />
        <ApolloWrapper>
          <header className="p-10 ">
            <Suspense>
              <SearchBar />
            </Suspense>
          </header>
          <main className="p-10">{children}</main>
        </ApolloWrapper>
      </body>
    </html>
  );
}
