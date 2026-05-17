import { cn } from "@/lib/utils";

type Props = {
  title: string;
  values: string[];
  className?: string;
};

export default function PokemonResistanceList({
  title,
  values,
  className,
}: Readonly<Props>) {
  if (!values.length) {
    return null;
  }

  return (
    <section className={cn("space-y-4", className)}>
      <h2 className="text-2xl font-semibold">{title}</h2>

      <div className="flex flex-wrap gap-2">
        {values.map((value) => (
          <span key={value} className="rounded-full border px-3 py-1 text-sm">
            {value}
          </span>
        ))}
      </div>
    </section>
  );
}
