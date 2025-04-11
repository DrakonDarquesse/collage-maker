import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between align-center p-24">
      <Link className="px-2 py-3 bg-white text-black rounded" href="/collage">
        Create Collage
      </Link>
    </main>
  );
}
