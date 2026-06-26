import Nav from "@/components/common/nav";
import Terminal from "@/components/common/terminal";
import Experience from "@/components/home/experience";
import ExtraStuff from "@/components/home/extra";
import Summary from "@/components/home/summary";

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#002b36] text-white p-6">
      <section className="flex border border-[#184b55] rounded-lg overflow-hidden">
        <Nav activePage="contact" />
        <div className="block w-100% flex-1">
          <Summary />
          <Experience />
        </div>
        <ExtraStuff />
      </section>
      <Terminal />
    </main>
  );
}
