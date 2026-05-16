import type { Metadata } from "next";
import "./globals.css";
import { ApolloWrapper } from "./ApolloWrapper";
import { Inter, Roboto } from "next/font/google";
import { cn } from "@/lib/utils";
import { SearchBar } from "@/components/search/SearchBar";
import Navbar from "@/components/Navbar";

const robotoHeading = Roboto({
  subsets: ["latin"],
  variable: "--font-heading",
});

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Pokemon Search",
  description: "Searching for pokemon infomation",
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
          <header className="p-10">
            <SearchBar />
          </header>
          <main className="p-10">{children}</main>
        </ApolloWrapper>
      </body>
    </html>
  );
}
