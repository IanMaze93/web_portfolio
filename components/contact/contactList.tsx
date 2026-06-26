import Link from "next/link";
import ContactLogo from "./contactLogo";
import Image from "next/image";

function getContactText() {
  return `Thanks for stopping by.

Whether you're here about a software engineering opportunity, a project, or just to connect, 
I appreciate you taking the time to look through my work.

I've spent my career building applications, solving problems, and helping teams deliver reliable software. 
Outside of work, I enjoy building personal projects, exploring AI, and creating tools that solve real-world problems.

Feel free to reach out through any of the links below or send me a message directly using the contact form.
I look forward to hearing from you.

`;
}

export function ContactList() {
  return (
    <div className="m-6 block">
      <div className="flex">
        <div className="block">
          <ContactLogo />
          <p className="whitespace-pre-wrap">{getContactText()}</p>
          <div className="flex items-center justify-center space-x-15">
            <Link href="https://github.com/IanMaze93">
              <Image
                src="/github.png"
                alt="github icon"
                width={100}
                height={100}
              ></Image>
            </Link>
            <Link href="https://www.linkedin.com/in/ian-maze-50943a194/">
              <Image
                src="/linkedin.png"
                alt="linkedin icon"
                width={100}
                height={100}
              ></Image>
            </Link>
            <a href="mailto:mazeiandev@outlook.com">
              <Image
                src="/envelope.png"
                alt="linkedin icon"
                width={100}
                height={100}
              ></Image>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
