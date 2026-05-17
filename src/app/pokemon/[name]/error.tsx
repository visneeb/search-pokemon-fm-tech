"use client";

type Props = {
  error: Error;
  reset: () => void;
};

export default function Error({ error, reset }: Readonly<Props>) {
  return (
    <div className="flex flex-col items-center gap-4 py-10 text-center">
      <h2 className="text-2xl font-bold">Failed to load Pokémon</h2>

      <p className="text-muted-foreground">{error.message}</p>

      <button
        type="button"
        onClick={reset}
        className="rounded-md border px-4 py-2"
      >
        Try again
      </button>
    </div>
  );
}
