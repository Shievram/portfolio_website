import { aboutParagraphs } from '@/data/portfolio';
import { SectionHeading } from './SectionHeading';

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 pb-20">
      <SectionHeading title="About" />
      <div className="space-y-5 text-base leading-8 text-slate-400">
        {aboutParagraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
