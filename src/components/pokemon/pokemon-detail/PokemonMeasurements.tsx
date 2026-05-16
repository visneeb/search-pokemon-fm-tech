import type { Pokemon } from "@/types/pokemonType";

type Props = Pick<Pokemon, "weight" | "height">;

export default function PokemonMeasurements({
  weight,
  height,
}: Readonly<Props>) {
  const measurements = [
    {
      label: "Weight",
      minimum: weight.minimum,
      maximum: weight.maximum,
    },
    {
      label: "Height",
      minimum: height.minimum,
      maximum: height.maximum,
    },
  ];

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold">Measurements</h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {measurements.map((measurement) => (
          <div key={measurement.label} className="rounded-xl border p-4">
            <p className="text-sm text-muted-foreground">{measurement.label}</p>

            <div className="mt-2 space-y-1">
              <p>Min: {measurement.minimum}</p>

              <p>Max: {measurement.maximum}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
