import Image from "next/image";

import Label from "../common/label";

type GithubLink = {
  label: string;
  url: string;
};

type ProjectProps = {
  name: string;
  description: string;
  githubLinks: GithubLink[];
  imageSrc: string;
  imageAlt: string;
  label: string;
};

export function Project({
  name,
  description,
  githubLinks,
  imageSrc,
  imageAlt,
  label,
}: ProjectProps) {
  return (
    <div className="border-r border-[#184b55]">
      <Label value={label} />

      <div className="lg:flex">
        <div className="mr-4 border-[#184b55] lg:flex-1 lg:border-r">
          <div className="m-4">
            <h1 className="mb-2 font-bold">{name}</h1>

            <div className="flex gap-2">
              {githubLinks.map((link, index) => (
                <span key={link.url}>
                  <a
                    className="text-[#569cd6] hover:text-blue-300"
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>

                  {index < githubLinks.length - 1 && " | "}
                </span>
              ))}
            </div>

            <p className="mt-4 whitespace-pre-wrap">{description}</p>
          </div>
        </div>

        <div className="flex items-center justify-center p-4 lg:flex-1">
          <Image
            className="h-auto max-w-full rounded-lg p-2"
            src={imageSrc}
            alt={imageAlt}
            width={800}
            height={700}
          />
        </div>
      </div>
    </div>
  );
}
