export default function Title({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="text-4xl font-bold mb-8 font-[family-name:var(--font-geist-sans)] text-[#333333]">
      {children}
    </h1>
  );
}
