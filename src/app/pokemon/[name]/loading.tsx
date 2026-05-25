// Loading skeleton shown while page data is fetching
export default function Loading() {
  return (
    <div className="flex flex-col gap-6 animate-pulse">
      {/* Image placeholder */}
      <div className="h-52 w-52 rounded-xl bg-muted" />

      {/* Text placeholders */}
      <div className="space-y-2">
        <div className="h-8 w-48 rounded bg-muted" />
        <div className="h-5 w-32 rounded bg-muted" />
      </div>

      {/* Card/list placeholders */}
      <div className="grid gap-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="h-20 rounded-xl bg-muted" />
        ))}
      </div>
    </div>
  );
}
