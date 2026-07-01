import Image from "next/image";
import Label from "../common/label";

type ProjectProps = {
  name: string;
  description: string;
  githubLink: string;
  imageSrc: string;
  imageAlt: string;
  label: string;
};

export function Project({
  name,
  description,
  githubLink,
  imageSrc,
  imageAlt,
  label,
}: ProjectProps) {
  return (
    <div className="border-r border-[#184b55]">
      <Label value={label} />
      <div className="flex">
        <div className="mr-4 border-r border-[#184b55]">
          <div className="m-4">
            <h1 className="font-bold mb-2">{name}</h1>
            <a className="text-[#569cd6]" href={githubLink}>
              {githubLink}
            </a>
            <p className="mt-4">{description}</p>
          </div>
        </div>
        <div className="ml-auto">
          <Image
            className="max-w-800 max-h-700 border border-[#184b55] rounded-lg p-2"
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
