type SectionHeadingProps = {
  title: string;
};

export function SectionHeading({ title }: SectionHeadingProps) {
  return (
    <div className="mb-8 text-xs font-semibold uppercase tracking-[0.35em] text-teal-300">
      {title}
    </div>
  );
}
