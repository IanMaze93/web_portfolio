import Label from "@/components/common/label";
import Nav from "@/components/common/nav";
import Terminal from "@/components/common/terminal";
import ProjectContent from "@/components/projects/projectContent";

export default function Projects() {
  return (
    <main className="min-h-screen bg-[black] text-white p-6">
      <section className="flex border border-[#184b55] rounded-lg bg-[#002b36] overflow-hidden">
        <Nav activePage="projects" />
        <div className="block w-100% flex-1">
          <Label value="IanMaze/projects" />
          <ProjectContent />
        </div>
      </section>
      <Terminal />
    </main>
  );
}
