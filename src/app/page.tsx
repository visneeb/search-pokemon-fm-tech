import { Suspense } from "react";
import PokemonList from "../components/pokemon/PokemonList";

export default function Home() {
  return (
    <div>
      <main>
        <Suspense fallback={<p>Loading...</p>}>
          <PokemonList />
        </Suspense>
      </main>
    </div>
  );
}
