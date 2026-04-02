import CardsGrid from "@/components/CardsGrid";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <CardsGrid />
        <CardsGrid />
      </main>
    </div>
  );
}
