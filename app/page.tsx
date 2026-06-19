import Experience from "@/components/home/experience";
import Summary from "@/components/home/summary";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#002b36] text-white p-6">
      <section className="border border-[#184b55] rounded-lg overflow-hidden">
        <Summary/>
        <Experience/>
      </section>
    </main>
  );
}