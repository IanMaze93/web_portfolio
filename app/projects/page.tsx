import Label from "@/components/common/label";
import Nav from "@/components/common/nav";
import Terminal from "@/components/common/terminal";

export default function Projects() {
  return (
    <main className="min-h-screen bg-[#002b36] text-white p-6">
      <section className="flex border border-[#184b55] rounded-lg overflow-hidden">
        <Nav activePage="projects" />
        <div className="block w-100% flex-1">
          <Label value="IanMaze/projects" />
        </div>
      </section>
      <Terminal />
    </main>
  );
}
