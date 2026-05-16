import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b">
      <nav className=" flex h-14 items-center justify-between px-10">
        {" "}
        <h1 className="text-xl font-bold">Pokedex</h1>
        <Link
          href="/"
          className="text-sm font-medium transition-opacity hover:opacity-70"
        >
          ← Back to Home
        </Link>
      </nav>
    </header>
  );
}
