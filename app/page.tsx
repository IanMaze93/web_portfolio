import CodeObject from "@/components/codeObject";
import Logo from "@/components/logo";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#002b36] text-white p-6">
      <section className="border border-[#184b55] rounded-lg overflow-hidden">
        <header className="bg-[#001e26] px-4 py-2 border-b border-[#184b55]">
          <p className="text-sm text-gray-300">IanMaze/home.tsx</p>
        </header>

        <Logo/>

        <CodeObject
          title="details"
          items={[
            {
                name: "role",
                value: "Software Engineer",
            },
            {
                name: "objective",
                value: 
                `Results-driven software engineer with expertise in backend development using SST, TypeScript, and AWS. 
                Skilled in creating scalable, serverless solutions, event-driven architectures, and robust APIs. 
                
                Seeking to contribute technical expertise and problem-solving abilities to a dynamic team focused 
                on innovation and growth.`,
            },
        ]}
        />

        <header className="bg-[#001e26] px-4 py-2 border-b border-[#184b55]">
          <p className="text-sm text-gray-300">IanMaze/experience.tsx</p>
        </header>

        <div className="grid grid-cols-5">
        <CodeObject
          title="position"
          items={[
            {
                name: "title",
                value: "Software Engineer 2",
            },
            {
                name: "years",
                value: "2",
            },
        ]}
        />

        <CodeObject
          title="position"
          items={[
            {
                name: "title",
                value: "Software Engineer 1",
            },
            {
                name: "years",
                value: "3",
            },
        ]}
        />

        <CodeObject
          title="position"
          items={[
            {
                name: "title",
                value: "IT Support",
            },
            {
                name: "years",
                value: "3",
            },
        ]}
        />

        </div>

      </section>
    </main>
  );
}