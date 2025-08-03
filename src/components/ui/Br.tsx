
export default function Br({ size=4 }: { size: number }) {
  return (
    <div>
      {Array.from({ length: size }).map((_, i) => (
        <br key={i} />
      ))}
    </div>
  );
}
