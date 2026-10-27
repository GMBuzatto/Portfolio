export function SectionHeading({
  id,
  eyebrow,
  title,
}: {
  id: string;
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="flex flex-col gap-3">
      <p className="font-heading text-[10px] tracking-widest text-text-highlight uppercase">
        {eyebrow}
      </p>
      <h2 id={id} className="text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}
