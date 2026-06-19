type LabelProps = {
    value: string;
};

export default function Label({
    value
}:LabelProps) {
    return (
        <header className="bg-[#001e26] px-4 py-2 border-b border-[#184b55]">
          <p className="text-sm text-gray-300">{value}</p>
        </header>
    );
}