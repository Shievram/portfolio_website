import { experience } from '@/data/portfolio';
import { SectionHeading } from './SectionHeading';

export function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-24 pb-20">
      <SectionHeading title="Experience" />
      <div className="space-y-4">
        {experience.map((item) => (
          <article
            key={`${item.role}-${item.company}`}
            className="group rounded-2xl border border-transparent px-6 py-5 transition duration-300 hover:border-slate-700/50 hover:bg-slate-800/30"
          >
            <div className="grid gap-4 md:grid-cols-[140px_1fr]">
              <div className="pt-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                {item.period}
              </div>
              <div>
                <h3 className="text-base font-medium leading-7 text-slate-200 transition group-hover:text-teal-300">
                  {item.role} · {item.company}
                </h3>
                <ul className="mt-3 space-y-3 text-sm leading-7 text-slate-400">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium text-teal-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
