"use client";

import Label from "../common/label";
import dynamic from "next/dynamic";

const GitHubCalendar = dynamic(
  () => import("react-github-calendar").then((module) => module.GitHubCalendar),
  { ssr: false }
);

function GithubGraphCalander() {
  return (
    <section className="p-6 text-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">
        <a
          className="text-[#569cd6] border-b hover:text-blue-300"
          href="https://github.com/IanMaze93"
        >
          Github | Ian Maze
        </a>
      </h2>
      <div className="flex justify-center p-4 rounded-md">
        <GitHubCalendar
          username="IanMaze93"
          blockSize={8}
          blockMargin={2}
          colorScheme="dark"
        />
      </div>
    </section>
  );
}

function TerminalCommands() {
  return (
    <div className="bg-[#001e26] m-5 rounded-lg p-6">
      <p className="text-center text-xl font-bold">Terminal Commands:</p>

      <ul className="p-8">
        <li>
          <p>
            <strong>--show-commands</strong>{" "}
            <span className="text-green-500">&#47;&#47; Display Commands</span>
          </p>
        </li>
        <li>
          <p>
            <strong>--clear</strong>{" "}
            <span className="text-green-500">&#47;&#47; Clears Terminal</span>
          </p>
        </li>
        <li>
          <p>
            <strong>--verify-candidate</strong>{" "}
            <span className="text-green-500">
              &#47;&#47; Verify My Candidacy
            </span>
          </p>
        </li>
        <li>
          <p>
            <strong>--download-resume</strong>{" "}
            <span className="text-green-500">&#47;&#47; Download Resume</span>
          </p>
        </li>
      </ul>
    </div>
  );
}

export default function ExtraStuff() {
  return (
    <div className="block border-l border-[#184b55]">
      <Label value="IanMaze/github" />

      <GithubGraphCalander />

      <Label value="IanMaze/terminal" />

      <TerminalCommands />
    </div>
  );
}
