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
        <div className="flex-1 mr-4 border-r border-[#184b55]">
          <div className="m-4">
            <h1 className="font-bold mb-2">{name}</h1>
            <a className="text-[#569cd6]" href={githubLink}>
              {githubLink}
            </a>
            <p className="mt-4 whitespace-pre-wrap">{description}</p>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center p-4">
          <Image
            className="rounded-lg p-2 max-w-full h-auto"
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
