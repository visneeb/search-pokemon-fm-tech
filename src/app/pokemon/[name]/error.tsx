"use client";

type Props = {
  error: Error;

  // Retry function from Next.js error boundary
  reset: () => void;
};

// Error UI shown when page loading fails
export default function Error({ error, reset }: Readonly<Props>) {
  return (
    <div className="flex flex-col items-center gap-4 py-10 text-center">
      {/* Error title */}
      <h2 className="text-2xl font-bold">Failed to load Pokémon</h2>

      {/* Display error message */}
      <p className="text-muted-foreground">{error.message}</p>

      {/* Retry button */}
      <button
        type="button"
        // Retry rendering/loading
        onClick={reset}
        className="rounded-md border px-4 py-2"
      >
        Try again
      </button>
    </div>
  );
}
