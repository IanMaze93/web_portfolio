import { Project } from "./project";
import ProjectsLogo from "./projectLogo";

function getPortfolioText() {
  return `
This portfolio was built from the ground up using Next.js, React, TypeScript, and Tailwind CSS 
to showcase both my experience and my approach to software development. 
  
Rather than using a traditional portfolio template, I designed the interface to resemble a 
developer workstation, complete with a file explorer, terminal, and interactive navigation. 
  
The site is fully responsive and includes downloadable resumes, project showcases, GitHub activity, 
and a contact form.
  `.trim();
}

function getAlfredText() {
  return `
Ask Alfred is a Python-based voice assistant inspired by Batman's loyal butler. The application
listens for spoken commands, converts speech to text, processes simple voice commands, and 
responds using text-to-speech.

Users can ask Alfred for the current date or time, perform web searches, launch websites, and
interact through a conversational voice interface. 

While the assistant uses rule-based command processing rather than AI, the project provided 
hands-on experience with speech recognition, audio processing, and event-driven application 
development.
`.trim();
}

function getS3UploaderText() {
  return `
The S3 Image Uploader is a full-stack serverless application built with React, TypeScript, AWS
Lambda, API Gateway, Amazon S3, and SST. The project allows users to select an image from their
computer and upload it directly to an S3 bucket through a REST API.

The frontend provides a simple interface for selecting files, previewing images before upload,
and displaying upload status to the user. The backend consists of a serverless Lambda function
that receives image data through API Gateway and securely stores it in an Amazon S3 bucket.

This project was created to gain hands-on experience with AWS serverless architecture, cloud
storage, REST APIs, and infrastructure as code while building a complete frontend-to-cloud
upload workflow.
`.trim();
}

export default function projectContent() {
  return (
    <div className="overflow-y-auto">
      <div className="flex justify-center">
        <ProjectsLogo />
      </div>

      <Project
        label="IanMaze/projects/web_portfolio"
        name="Web Portfolio"
        description={getPortfolioText()}
        githubLink="https://github.com/IanMaze93/web_portfolio"
        imageSrc="/web_portfolio.png"
        imageAlt="Web Portfolio"
      />

      <Project
        label="IanMaze/projects/ask_alfred"
        name="Ask Alfred (Batman Fan Project)"
        description={getAlfredText()}
        githubLink="https://github.com/IanMaze93/Alfred-Virtual-Assistant"
        imageSrc="/alfred.png"
        imageAlt="Ask Alfred"
      />

      <Project
        label="IanMaze/projects/s3_uploader"
        name="S3 Uploader"
        description={getS3UploaderText()}
        githubLink="https://github.com/IanMaze93/s3Uploader"
        imageSrc="/s3_upload.png"
        imageAlt="S3 Uploader"
      />
    </div>
  );
}
