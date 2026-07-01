import { Project } from "./project";
import ProjectsLogo from "./projectLogo";

export default function projectContent() {
  return (
    <div className="h-140 overflow-y-auto">
      <div className="flex justify-center">
        <ProjectsLogo />
      </div>

      <Project
        label="IanMaze/projects/web_portfolio"
        name="Web Portfolio"
        description="This is the source code for this website portfolio"
        githubLink="https://github.com/IanMaze93/web_portfolio"
        imageSrc="/web_portfolio.png"
        imageAlt="Web Portfolio"
      />

      <Project
        label="IanMaze/projects/ask_alfred"
        name="Ask Alfred (Fan Project)"
        description=""
        githubLink="https://github.com/IanMaze93/Alfred-Virtual-Assistant"
        imageSrc="/alfred.png"
        imageAlt="Ask Alfred"
      />

      <Project
        label="IanMaze/projects/s3_uploader"
        name="S3 Uploader"
        description="Upload images to AWS S3 buckets"
        githubLink="https://github.com/IanMaze93/s3Uploader"
        imageSrc="/s3_upload.png"
        imageAlt="S3 Uploader"
      />
    </div>
  );
}
