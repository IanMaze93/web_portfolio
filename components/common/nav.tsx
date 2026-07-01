import Link from "next/link";
import Label from "./label";
import Image from "next/image";

type NavProps = {
  activePage: string;
};

function isActivePage(page: string, activePage: string): string {
  if (page === activePage) {
    return "underline";
  }
  return "";
}

export default function Nav({ activePage }: NavProps) {
  return (
    <nav className="w-50 bg-[#001e26] border-r border-[#184b55]">
      <Label value="File Explorer"></Label>

      <Link
        className="p-3 flex justify-content text-[#569cd6]"
        style={{ textDecoration: isActivePage("home", activePage) }}
        href="/"
      >
        <Image
          src="/folder_icon.png"
          alt="Home"
          width={20}
          height={20}
          className="mr-1 w-auto h-auto"
        />{" "}
        IanMaze/home
      </Link>

      <Link
        className="p-3 flex justify-content text-[#569cd6]"
        style={{ textDecoration: isActivePage("projects", activePage) }}
        href="/projects"
      >
        <Image
          src="/folder_icon.png"
          alt="Home"
          width={20}
          height={20}
          className="mr-1 w-auto h-auto"
        />{" "}
        IanMaze/projects
      </Link>

      <Link
        className="p-3 flex justify-content text-[#569cd6]"
        style={{ textDecoration: isActivePage("contact", activePage) }}
        href="/contact"
      >
        <Image
          src="/folder_icon.png"
          alt="Home"
          width={20}
          height={20}
          className="mr-1 w-auto h-auto"
        />{" "}
        IanMaze/contact
      </Link>
    </nav>
  );
}
