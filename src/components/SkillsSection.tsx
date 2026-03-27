import { certifications, skills } from '@/data/portfolio';
import { SectionHeading } from './SectionHeading';

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-24 pb-20">
      <SectionHeading title="Skills" />
      <div className="space-y-10">
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">Core Skills</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium text-teal-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">
            Certifications
          </h3>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-400">
            {certifications.map((item) => (
              <li key={item.title}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-start gap-2 transition hover:text-teal-300"
                >
                  <span>{item.title}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="mt-1 h-4 w-4 shrink-0 text-slate-500 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-teal-300"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.22 14.78a.75.75 0 0 1 0-1.06l7.19-7.19H8.75a.75.75 0 0 1 0-1.5h5.47c.414 0 .75.336.75.75v5.47a.75.75 0 0 1-1.5 0V7.59l-7.19 7.19a.75.75 0 0 1-1.06 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
