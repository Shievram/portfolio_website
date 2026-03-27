import { AboutSection } from '@/components/AboutSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { Sidebar } from '@/components/Sidebar';
import { SkillsSection } from '@/components/SkillsSection';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0a192f] text-slate-200 selection:bg-teal-300/20 selection:text-teal-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-24">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Sidebar />
          <main className="pt-20 lg:w-[52%] lg:py-24">
            <AboutSection />
            <ExperienceSection />
            <ProjectsSection />
            <SkillsSection />
          </main>
        </div>
      </div>
    </div>
  );
}
