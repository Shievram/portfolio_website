'use client';

import { navItems, profile } from '@/data/portfolio';

export function Sidebar() {
  return (
    <aside className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
      <div>
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-teal-300/90">
            Portfolio
          </p>
          <div className="space-y-3">
            <h1 className="text-4xl font-bold tracking-tight text-slate-100 sm:text-5xl">
              {profile.name}
            </h1>
            <h2 className="text-xl font-semibold text-slate-200 sm:text-2xl">{profile.title}</h2>
            <p className="max-w-md text-base leading-7 text-slate-400">{profile.intro}</p>
          </div>
        </div>

        <nav className="mt-16 hidden lg:block" aria-label="Section navigation">
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="group flex items-center gap-4 text-xs font-bold uppercase tracking-[0.3em] text-slate-500 transition hover:text-slate-200"
                >
                  <span className="h-px w-8 bg-slate-600 transition-all duration-300 group-hover:w-16 group-hover:bg-slate-200" />
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="pt-12">
        <div className="flex flex-wrap gap-5 text-slate-400">
          <a
            className="transition hover:text-teal-300"
            href={`mailto:${profile.email}`}
            aria-label="Email"
            title="Email"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
              <path d="M1.5 6.75A2.25 2.25 0 0 1 3.75 4.5h16.5a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 17.25V6.75Zm2.64-.75 7.297 5.473a.938.938 0 0 0 1.126 0L19.86 6H4.14Z" />
            </svg>
          </a>
          <a
            className="transition hover:text-teal-300"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
              <path d="M6.94 8.5H3.56V19h3.38V8.5ZM5.25 3A1.97 1.97 0 1 0 5.3 6.94 1.97 1.97 0 0 0 5.25 3ZM21 12.58c0-3.17-1.69-4.64-3.95-4.64-1.82 0-2.64 1-3.1 1.7V8.5h-3.37c.04.75 0 10.5 0 10.5h3.37v-5.86c0-.31.02-.62.11-.84.24-.62.79-1.27 1.71-1.27 1.2 0 1.68.92 1.68 2.27V19H21v-6.42Z" />
            </svg>
          </a>
          <a
            className="transition hover:text-teal-300"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            title="GitHub"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.589 2 12.248c0 4.526 2.865 8.367 6.839 9.722.5.096.682-.222.682-.493 0-.243-.009-.888-.014-1.742-2.782.617-3.37-1.37-3.37-1.37-.455-1.18-1.11-1.494-1.11-1.494-.908-.637.069-.624.069-.624 1.004.072 1.532 1.054 1.532 1.054.892 1.566 2.341 1.114 2.91.852.091-.663.35-1.114.636-1.37-2.22-.259-4.555-1.137-4.555-5.06 0-1.118.389-2.033 1.029-2.75-.103-.26-.446-1.302.098-2.714 0 0 .84-.276 2.75 1.05A9.33 9.33 0 0 1 12 6.835c.85.004 1.706.117 2.505.343 1.909-1.326 2.747-1.05 2.747-1.05.546 1.412.203 2.454.1 2.714.64.717 1.027 1.632 1.027 2.75 0 3.933-2.339 4.798-4.566 5.052.359.319.678.947.678 1.91 0 1.379-.012 2.49-.012 2.829 0 .274.18.594.688.492C19.138 20.612 22 16.772 22 12.248 22 6.589 17.523 2 12 2Z" clipRule="evenodd" />
            </svg>
          </a>
          <a
            className="transition hover:text-teal-300"
            href="/Shievram_RajaRao_Portfolio_Profile.pdf"
            target="_blank"
            rel="noreferrer"
            aria-label="Download resume PDF"
            title="Download resume PDF"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
              <path fillRule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v9.19l2.47-2.47a.75.75 0 1 1 1.06 1.06l-3.75 3.75a.75.75 0 0 1-1.06 0l-3.75-3.75a.75.75 0 1 1 1.06-1.06l2.47 2.47V3a.75.75 0 0 1 .75-.75ZM4.5 15.75a.75.75 0 0 1 .75.75v1.5A1.5 1.5 0 0 0 6.75 19.5h10.5a1.5 1.5 0 0 0 1.5-1.5v-1.5a.75.75 0 0 1 1.5 0v1.5A3 3 0 0 1 17.25 21h-10.5a3 3 0 0 1-3-3v-1.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </aside>
  );
}
