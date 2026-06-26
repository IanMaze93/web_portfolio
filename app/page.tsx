import Nav from "@/components/common/nav";
import Terminal from "@/components/common/terminal";
import Experience from "@/components/home/experience";
import ExtraStuff from "@/components/home/extra";
import Summary from "@/components/home/summary";

export default function Home() {
  return (
    <main className="h-screen bg-[#002b36] text-white p-6 pb-[30vh]">
      <section className="flex border border-[#184b55] rounded-lg overflow-hidden h-full">
        <Nav activePage="home" />

        <div className="flex-1 overflow-auto">
          <Summary />
          <Experience />
        </div>

        <ExtraStuff />
      </section>

      <Terminal />
    </main>
  );
}
