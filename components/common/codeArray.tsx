import { randomUUID } from "crypto";

type CodeArrayItem = Record<string, string | number>;

type CodeArrayProps = {
  title: string;
  items: CodeArrayItem[];
};

export default function CodeArray({ title, items }: CodeArrayProps) {
  return (
    <div className="p-4">
      <p className="text-[#569cd6]">const {title} = &#91;</p>
      <div className="pl-4 xl:flex gap-30">
        {items.map((item) => (
          <div className="pl-3" key={randomUUID()}>
            <p className="text-[#569cd6]">&#123;</p>
            {Object.entries(item).map(([key, value]) => (
              <div key={randomUUID()}>
                <p key={key} className="pl-4">
                  <strong>{key}:</strong>{" "}
                  <span className="text-[#b5cea8]">{value}</span>
                </p>
              </div>
            ))}
            <p className="text-[#569cd6]">&#125;,</p>
          </div>
        ))}
      </div>
      <p className="text-[#569cd6]">&#93;;</p>
    </div>
  );
}
