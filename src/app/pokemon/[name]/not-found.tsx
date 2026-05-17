import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-20 text-center">
      <h1 className="text-4xl font-bold">Pokemon Not Found</h1>

      <p className="text-muted-foreground">
        We could not find that Pokemon in the Pokedex.
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
