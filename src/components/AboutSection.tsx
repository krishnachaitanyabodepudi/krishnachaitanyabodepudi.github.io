import img5591 from "@/assets/img5591.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 light-section">
      <div className="max-w-4xl mx-auto">
        <p className="text-primary font-sans text-sm tracking-[0.3em] uppercase mb-4 text-center">
          About
        </p>
        <h2 className="text-3xl md:text-5xl font-serif mb-16 text-center" style={{ color: 'hsl(220 15% 20%)' }}>
          Let me introduce myself.
        </h2>

        {/* Hero intro with photo */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
          <div className="w-48 h-48 rounded-full overflow-hidden flex-shrink-0 border-4 border-primary/20">
            <img 
              src={img5591} 
              alt="Krishna Chaitanya Bodepudi" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-4">
            <p className="text-lg md:text-xl leading-relaxed italic" style={{ color: 'hsl(220 10% 45%)' }}>
              I have professional experience building ML-driven backend systems and AI-enabled services that support real product workflows. My work sits at the intersection of applied machine learning and software engineering, where models need to be integrated into APIs, operated reliably, and behave predictably under real-world constraints.
            </p>
            <p className="text-lg md:text-xl leading-relaxed italic" style={{ color: 'hsl(220 10% 45%)' }}>
              I tend to start with system boundaries: what data is allowed to flow, under what scope, and what should happen when a component fails. This approach has shaped how I design inference services, retrieval pipelines, and ML-backed APIs, where incorrect behavior is treated as a failure condition rather than an acceptable tradeoff.
            </p>
            <p className="text-lg md:text-xl leading-relaxed italic" style={{ color: 'hsl(220 10% 45%)' }}>
              I'm comfortable operating across applied ML, GenAI components, and backend engineering, and I look for roles where ML capabilities need to fit cleanly into larger systems instead of existing as isolated experiments.
            </p>
          </div>
        </div>

        {/* Two-column: Profile and Focus */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-xl font-serif mb-4 uppercase tracking-wider font-semibold" style={{ color: 'hsl(220 15% 20%)' }}>
              Profile
            </h3>
            <p className="leading-relaxed" style={{ color: 'hsl(220 10% 45%)' }}>
              Applied AI / ML Engineer with experience across ML-backed backend systems, inference services, and AI-enabled APIs. Background includes both full-time engineering work and internship experience, contributing to production-adjacent systems used beyond experimental settings.
            </p>
            <p className="leading-relaxed mt-4" style={{ color: 'hsl(220 10% 45%)' }}>
              My strengths lie in integrating models into real systems, handling edge cases, and ensuring predictable runtime behavior. I work comfortably across Python-based backends, ML pipelines, and API-driven architectures where correctness, maintainability, and reliability matter.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-serif mb-4 uppercase tracking-wider font-semibold" style={{ color: 'hsl(220 15% 20%)' }}>
              Focus
            </h3>
            <p className="leading-relaxed" style={{ color: 'hsl(220 10% 45%)' }}>
              I focus on roles where machine learning and AI are part of a larger system, not the entire product. This includes applied ML engineering, GenAI feature development, and ML-adjacent backend engineering.
            </p>
            <p className="leading-relaxed mt-4" style={{ color: 'hsl(220 10% 45%)' }}>
              I'm particularly effective in environments where models must be exposed through APIs, operate under latency and reliability constraints, and integrate with existing data and backend infrastructure. I prioritize building systems that are understandable, testable, and predictable in production.
            </p>
          </div>
        </div>

        {/* Contact details */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider mb-1" style={{ color: 'hsl(220 15% 20%)' }}>Fullname:</p>
            <p style={{ color: 'hsl(220 10% 45%)' }}>Krishna Chaitanya Bodepudi</p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider mb-1" style={{ color: 'hsl(220 15% 20%)' }}>Location:</p>
            <p style={{ color: 'hsl(220 10% 45%)' }}>St. Louis, MO (Open to Relocate)</p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider mb-1" style={{ color: 'hsl(220 15% 20%)' }}>Email:</p>
            <a href="mailto:kcbodepudi@gmail.com" className="text-primary hover:underline">kcbodepudi@gmail.com</a>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider mb-1" style={{ color: 'hsl(220 15% 20%)' }}>LinkedIn:</p>
            <a href="https://www.linkedin.com/in/krishna-chaitanya-bodepudi" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">krishna-chaitanya-bodepudi</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;