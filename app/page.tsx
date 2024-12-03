import About from "@/components/home/About";
import Hero from "@/components/home/Hero";

export default function Home() {
  return (
    <main className="bg-white dark:bg-black text-black dark:text-white min-h-screen">
      <Hero />
      <About />
    </main>
  );
}