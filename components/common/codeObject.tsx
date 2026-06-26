type FieldProps = {
  name: string;
  value: string;
};

type CodeObjectProps = {
  title: string;
  items: FieldProps[];
};

export default function CodeObject({ title, items }: CodeObjectProps) {
  return (
    <div className="p-6">
      <p className="text-[#569cd6]">const {title} = &#123;</p>

      <div className="pl-6">
        {items.map((item) => (
          <p key={item.name}>
            <strong>{item.name}:</strong>{" "}
            <span className="text-[#b5cea8] whitespace-pre-wrap">
              {'"'}
              {item.value}
              {'"'}
            </span>
            ,
          </p>
        ))}
      </div>

      <p className="text-[#569cd6]">&#125;;</p>
    </div>
  );
}
