import { SectionHeading } from './SectionHeading';

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 pb-8">
      <SectionHeading title="Contact" />
      <div className="rounded-[28px] border border-slate-700/50 bg-slate-900/20 px-8 py-8">
        <p className="max-w-2xl text-lg leading-10 text-slate-300">
          Open to data, analytics, ETL, reporting, and problem-solving roles where structured thinking and practical execution can drive business value.
        </p>
      </div>
    </section>
  );
}
