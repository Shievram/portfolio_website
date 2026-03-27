import { projects } from '@/data/portfolio';
import { SectionHeading } from './SectionHeading';

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-24 pb-20">
      <SectionHeading title="Projects" />
      <div className="space-y-4">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="group block rounded-2xl border border-transparent px-6 py-5 transition duration-300 hover:border-slate-700/50 hover:bg-slate-800/30"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-base font-medium leading-7 text-slate-200 transition group-hover:text-teal-300">
                {project.title}
              </h3>
              <span
                className="mt-1 shrink-0 text-slate-400 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-teal-300"
                aria-hidden="true"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                  <path
                    fillRule="evenodd"
                    d="M5.22 14.78a.75.75 0 0 1 0-1.06l7.19-7.19H8.75a.75.75 0 0 1 0-1.5h5.47c.414 0 .75.336.75.75v5.47a.75.75 0 0 1-1.5 0V7.59l-7.19 7.19a.75.75 0 0 1-1.06 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-400">{project.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span key={tool} className="text-xs font-medium text-teal-300">
                  {tool}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
