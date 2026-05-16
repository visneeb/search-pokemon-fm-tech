import Link from "next/link";
import Image from "next/image";

import type { Evolution } from "@/types/pokemonType";

type Props = {
  evolution: Evolution;
};

export default function EvolutionCard({ evolution }: Readonly<Props>) {
  return (
    <Link
      href={`/pokemon/${evolution.name}`}
      className="rounded-lg border p-3 transition-shadow hover:shadow-md"
    >
      <Image
        src={evolution.image}
        alt={evolution.name}
        width={90}
        height={90}
      />

      <p className="mt-2 text-center">{evolution.name}</p>
    </Link>
  );
}
