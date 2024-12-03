import About from "@/components/home/About";
import Education from "@/components/home/Education";
import Hero from "@/components/home/Hero";
import Info from "@/components/home/Info";

export default function Home() {
  return (
    <main className="text-black dark:text-white min-h-screen">
      {/* <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-l from-yellow-500/20 to-transparent dark:from-yellow-500/10" />
        <div className="absolute left-0 bottom-0 w-[800px] h-[800px] bg-yellow-500/20 rounded-full blur-3xl dark:bg-yellow-500/10" />
      </div> */}
      <Hero />
      <About />
      <Info />
      <Education />
    </main>
  );
}