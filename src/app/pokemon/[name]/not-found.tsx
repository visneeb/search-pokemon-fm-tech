import { headers } from "next/headers";
import Link from "next/link";

// Custom 404 page for Pokémon detail route
export default async function NotFound() {

  // Get request headers
  const headersList = await headers();

  // Read pathname from custom header
  const pathname =
    headersList.get("x-pathname") ?? "";

  // Default fallback name
  let pokemonName = "Unknown Pokémon";

  try {

    // Extract last URL segment
    const segment = pathname
      .split("/")
      .filter(Boolean)
      .pop() ?? "";

    // Decode URL text
    if (segment) {
      pokemonName = decodeURIComponent(segment);
    }

  } catch {

    // Fallback if decoding fails
    pokemonName = "Unknown Pokémon";
  }

  return (
    <div className="flex flex-col items-center justify-center gap-4 py-20 text-center">

      {/* Page title */}
      <h1 className="text-4xl font-bold">
        Pokemon Not Found
      </h1>

      {/* Missing Pokémon message */}
      <p className="max-w-md text-muted-foreground">
        &quot;{pokemonName}&quot;
        {" "}does not exist in this Pokedex.
      </p>

      {/* Extra information */}
      <p className="text-sm text-muted-foreground">
        Pokemon names are currently
        supported in English only.
      </p>

      {/* Back to homepage */}
      <Link
        href="/"
        className="rounded-md border px-4 py-2 transition-colors hover:bg-muted"
      >
        Back to Home
      </Link>
    </div>
  );
}