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
              I am Krishna Chaitanya Bodepudi, a Machine Learning Engineer specializing in building ML-driven backend systems and AI-enabled services for real product workflows.
            </p>
            <p className="text-lg md:text-xl leading-relaxed italic" style={{ color: 'hsl(220 10% 45%)' }}>
              My work sits at the intersection of applied machine learning and backend engineering, where models are exposed through APIs, operated under real-world constraints, and expected to behave predictably in production-like environments. I focus on designing systems where correctness, isolation, and failure handling are first-class concerns, not afterthoughts.
            </p>
            <p className="text-lg md:text-xl leading-relaxed italic" style={{ color: 'hsl(220 10% 45%)' }}>
              Rather than optimizing models in isolation, I prioritize how ML systems behave once deployed: how they handle malformed inputs, retrieval ambiguity, concurrency, and downstream integration. I treat incorrect or misleading outputs as system failures, and design defensively to prevent them.
            </p>
          </div>
        </div>

        {/* Profile */}
        <div className="mb-16">
          <h3 className="text-xl font-serif mb-4 uppercase tracking-wider font-semibold" style={{ color: 'hsl(220 15% 20%)' }}>
            Profile
          </h3>
          <p className="leading-relaxed mb-4" style={{ color: 'hsl(220 10% 45%)' }}>
            Machine Learning Engineer focused on:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4" style={{ color: 'hsl(220 10% 45%)' }}>
            <li>ML inference services</li>
            <li>LLM-powered backend systems</li>
            <li>Retrieval-augmented architectures</li>
            <li>Reliability-first, API-driven ML systems</li>
          </ul>
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
                Designing FastAPI-based inference services with attention to latency, batching, validation, and predictable failure behavior under concurrent usage.
              </p>
            </div>
            <div className="p-6 rounded-lg" style={{ backgroundColor: 'hsl(220 10% 96%)' }}>
              <h4 className="text-lg font-serif font-semibold mb-3" style={{ color: 'hsl(220 15% 20%)' }}>
                LLM & Retrieval Systems
              </h4>
              <p className="leading-relaxed text-sm" style={{ color: 'hsl(220 10% 45%)' }}>
                Building embedding-based retrieval pipelines with strict scoping, relevance control, and deterministic context injection for downstream LLM inference.
              </p>
            </div>
            <div className="p-6 rounded-lg" style={{ backgroundColor: 'hsl(220 10% 96%)' }}>
              <h4 className="text-lg font-serif font-semibold mb-3" style={{ color: 'hsl(220 15% 20%)' }}>
                Reliability & Failure Handling
              </h4>
              <p className="leading-relaxed text-sm" style={{ color: 'hsl(220 10% 45%)' }}>
                Designing systems that handle malformed inputs, low-confidence retrieval, and partial failures without returning misleading or unsafe outputs.
              </p>
            </div>
            <div className="p-6 rounded-lg" style={{ backgroundColor: 'hsl(220 10% 96%)' }}>
              <h4 className="text-lg font-serif font-semibold mb-3" style={{ color: 'hsl(220 15% 20%)' }}>
                Backend Engineering for Applied ML
              </h4>
              <p className="leading-relaxed text-sm" style={{ color: 'hsl(220 10% 45%)' }}>
                Developing Python-based backend services and data pipelines that integrate ML cleanly into larger systems through stable APIs and clear contracts.
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