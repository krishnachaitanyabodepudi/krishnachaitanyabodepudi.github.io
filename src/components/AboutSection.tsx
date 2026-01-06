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
              I build ML-driven backend systems and AI-enabled services that support real product workflows. My work sits at the intersection of applied machine learning and backend engineering, where models are exposed through APIs, operated reliably, and expected to behave predictably under real-world constraints.
            </p>
            <p className="text-lg md:text-xl leading-relaxed italic" style={{ color: 'hsl(220 10% 45%)' }}>
              I focus on system boundaries, failure handling, and correctness, treating incorrect behavior as a failure condition rather than an acceptable tradeoff. This approach has shaped how I build inference services, retrieval pipelines, and ML-backed APIs intended for production-like environments.
            </p>
          </div>
        </div>

        {/* Profile */}
        <div className="mb-16">
          <h3 className="text-xl font-serif mb-4 uppercase tracking-wider font-semibold" style={{ color: 'hsl(220 15% 20%)' }}>
            Profile
          </h3>
          <p className="leading-relaxed" style={{ color: 'hsl(220 10% 45%)' }}>
            Applied AI / ML Engineer focused on ML inference services, LLM-powered backends, and reliable API-driven systems.
          </p>
        </div>

        {/* Focus Areas */}
        <div className="mb-16">
          <h3 className="text-xl font-serif mb-6 uppercase tracking-wider font-semibold" style={{ color: 'hsl(220 15% 20%)' }}>
            Focus Areas
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-lg" style={{ backgroundColor: 'hsl(220 10% 96%)' }}>
              <h4 className="text-lg font-serif font-semibold mb-3" style={{ color: 'hsl(220 15% 20%)' }}>
                ML Inference & APIs
              </h4>
              <p className="leading-relaxed text-sm" style={{ color: 'hsl(220 10% 45%)' }}>
                Building FastAPI-based inference services with attention to latency, batching, validation, and safe failure behavior.
              </p>
            </div>
            <div className="p-6 rounded-lg" style={{ backgroundColor: 'hsl(220 10% 96%)' }}>
              <h4 className="text-lg font-serif font-semibold mb-3" style={{ color: 'hsl(220 15% 20%)' }}>
                LLM & Retrieval Systems
              </h4>
              <p className="leading-relaxed text-sm" style={{ color: 'hsl(220 10% 45%)' }}>
                Implementing embedding-based retrieval pipelines with strict scoping, relevance control, and predictable context injection.
              </p>
            </div>
            <div className="p-6 rounded-lg" style={{ backgroundColor: 'hsl(220 10% 96%)' }}>
              <h4 className="text-lg font-serif font-semibold mb-3" style={{ color: 'hsl(220 15% 20%)' }}>
                Reliability & Failure Handling
              </h4>
              <p className="leading-relaxed text-sm" style={{ color: 'hsl(220 10% 45%)' }}>
                Designing systems that handle malformed inputs, low-confidence outputs, and edge cases without returning misleading results.
              </p>
            </div>
            <div className="p-6 rounded-lg" style={{ backgroundColor: 'hsl(220 10% 96%)' }}>
              <h4 className="text-lg font-serif font-semibold mb-3" style={{ color: 'hsl(220 15% 20%)' }}>
                Backend for Applied ML
              </h4>
              <p className="leading-relaxed text-sm" style={{ color: 'hsl(220 10% 45%)' }}>
                Developing Python-based services and data pipelines that integrate ML cleanly into larger backend systems.
              </p>
            </div>
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