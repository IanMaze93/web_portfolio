import Nav from "@/components/common/nav";
import Terminal from "@/components/common/terminal";
import Experience from "@/components/home/experience";
import ExtraStuff from "@/components/home/extra";
import Summary from "@/components/home/summary";

export default function Home() {
  return (
    <main className="h-screen bg-[black] text-white p-6">
      <section className="lg:flex border border-[#184b55] rounded-lg bg-[#002b36] lg:overflow-hidden lg:h-full">
        <Nav activePage="home" />

        <div className="xl:flex-1">
          <Summary />
          <Experience />
        </div>

        <ExtraStuff />
      </section>

      <Terminal />
    </main>
  );
}
