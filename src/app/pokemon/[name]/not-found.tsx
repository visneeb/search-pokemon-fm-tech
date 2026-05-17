"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();

  let pokemonName = "Unknown Pokémon";

  try {
    const segment = pathname.split("/").pop() ?? "";
    if (segment) {
      pokemonName = decodeURIComponent(segment);
    }
  } catch {
    pokemonName = "Unknown Pokémon";
  }

  return (
    <div className="flex flex-col items-center justify-center gap-4 py-20 text-center">
      <h1 className="text-4xl font-bold">Pokemon Not Found</h1>

      <p className="max-w-md text-muted-foreground">
        &quot;{pokemonName}&quot; does not exist in this Pokedex.
      </p>

      <p className="text-sm text-muted-foreground">
        Pokemon names are currently supported in English only.
      </p>

      <Link
        href="/"
        className="rounded-md border px-4 py-2 transition-colors hover:bg-muted"
      >
        Back to Home
      </Link>
    </div>
  );
}
