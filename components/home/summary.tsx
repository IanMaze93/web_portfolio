import CodeObject from "../common/codeObject";
import Label from "../common/label";
import Logo from "../common/logo";

function getObjectiveText(): string {
  return `
Software engineer specializing in backend platforms, AI applications, cloud infrastructure, and distributed systems. 
Passionate about building scalable software from enterprise APIs and event-driven architectures to self-hosted AI platforms, 
developer tooling, and Linux infrastructure.
  `.trim();
}

export default function Summary() {
  return (
    <>
      <Label value="IanMaze/home" />

      <div>
        <div>
          <Logo />

          <CodeObject
            title="details"
            items={[
              {
                name: "role",
                value: "Software Engineer",
              },
              {
                name: "objective",
                value: getObjectiveText(),
              },
            ]}
          />
        </div>
      </div>
    </>
  );
}
