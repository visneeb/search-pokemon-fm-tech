"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const isHomePage = pathname === "/";

  return (
    <header className="border-b">
      <nav className="flex h-14 items-center justify-between px-10">
        <Link href="/" className="text-xl font-bold">
          Pokedex
        </Link>

        {!isHomePage && (
          <Link
            href="/"
            className="text-sm font-medium transition-opacity hover:opacity-70"
          >
            ← Back to Home
          </Link>
        )}
      </nav>
    </header>
  );
}
