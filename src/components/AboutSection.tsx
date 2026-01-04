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
          <p className="text-lg md:text-xl leading-relaxed italic" style={{ color: 'hsl(220 10% 45%)' }}>
            I work on backend and applied ML systems where LLMs are part of a larger service, not the entire product. Most of my experience is in building API-driven services that manage memory, retrieval, and inference under real-world constraints such as concurrency, partial failures, and imperfect data.
          </p>
        </div>

        {/* Two-column: Profile and Focus */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-xl font-serif mb-4 uppercase tracking-wider font-semibold" style={{ color: 'hsl(220 15% 20%)' }}>
              Profile
            </h3>
            <p className="leading-relaxed" style={{ color: 'hsl(220 10% 45%)' }}>
              I tend to focus on system boundaries first: what data is allowed to flow, under what scope, and what should happen when a component fails. This has led me to design memory and retrieval systems where incorrect recall is treated as a failure condition rather than a best-effort outcome.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-serif mb-4 uppercase tracking-wider font-semibold" style={{ color: 'hsl(220 15% 20%)' }}>
              Focus
            </h3>
            <p className="leading-relaxed" style={{ color: 'hsl(220 10% 45%)' }}>
              I'm most effective in roles where AI features need to integrate cleanly into backend infrastructure, whether that's applied ML, GenAI systems, or ML-adjacent backend engineering, and where predictable behavior matters more than novelty.
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