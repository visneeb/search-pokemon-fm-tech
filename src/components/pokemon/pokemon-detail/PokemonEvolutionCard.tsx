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
      <div className="relative flex h-32 w-32 shrink-0 items-center justify-center">
        <Image
          src={evolution.image}
          alt={evolution.name}
          fill
          className="object-contain"
        />
      </div>
      <p className="mt-2 text-center">{evolution.name}</p>
    </Link>
  );
}
