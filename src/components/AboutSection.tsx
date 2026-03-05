import img5591 from "@/assets/img5591.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 light-section">
      <div className="max-w-4xl mx-auto">
        <p className="text-primary font-sans text-sm tracking-[0.3em] uppercase mb-4 text-center">
          About
        </p>
        <h2 className="text-3xl md:text-5xl font-serif mb-16 text-center" style={{ color: "hsl(220 15% 20%)" }}>
          AI / LLM Systems Engineer
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
            <p className="text-lg md:text-xl leading-relaxed italic" style={{ color: "hsl(220 10% 45%)" }}>
              I am an AI engineer specializing in LLM evaluation systems, data annotation workflows, and
              retrieval-augmented architectures.
            </p>
            <p className="text-lg md:text-xl leading-relaxed italic" style={{ color: "hsl(220 10% 45%)" }}>
              My work focuses on the intersection of coding and AI model training workflows — where engineers must
              evaluate how models behave in real scenarios, identify failure patterns, and design systems that
              systematically improve model outputs.
            </p>
            <p className="text-lg md:text-xl leading-relaxed italic" style={{ color: "hsl(220 10% 45%)" }}>
              Rather than treating models as black boxes, I focus on understanding why models fail and building
              evaluation systems that make those failures measurable.
            </p>
            <div className="pt-2">
              <p className="text-sm font-semibold mb-2 uppercase tracking-wider" style={{ color: "hsl(220 15% 20%)" }}>
                I regularly work with:
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm" style={{ color: "hsl(220 10% 45%)" }}>
                <li>Writing code from scratch in Python, C++, JavaScript, SQL, and PHP</li>
                <li>Designing benchmark datasets for evaluating model outputs</li>
                <li>Analyzing hallucination, reasoning failures, and retrieval errors</li>
                <li>Building evaluation pipelines used in SFT and RLHF-style model improvement</li>
                <li>Creating guidelines and scoring rubrics for structured annotation</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Profile */}
        <div className="mb-16">
          <h3 className="text-xl font-serif mb-4 uppercase tracking-wider font-semibold" style={{ color: 'hsl(220 15% 20%)' }}>
            Profile
          </h3>
          <p className="leading-relaxed mb-4" style={{ color: "hsl(220 10% 45%)" }}>
            AI / LLM Systems Engineer focused on model evaluation, failure analysis, and reliable retrieval-augmented
            systems.
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4" style={{ color: "hsl(220 10% 45%)" }}>
            <li>Structured evaluation of LLM outputs using rubric-based scoring and rankings</li>
            <li>Designing benchmark and edge-case datasets for real-world failure analysis</li>
            <li>Building retrieval-augmented systems with deterministic, safe context injection</li>
            <li>Integrating evaluation workflows into SFT and RLHF-style improvement loops</li>
          </ul>
        </div>

        {/* Focus Areas */}
        <div className="mb-16">
          <h3 className="text-xl font-serif mb-6 uppercase tracking-wider font-semibold" style={{ color: 'hsl(220 15% 20%)' }}>
            Focus Areas
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-lg" style={{ backgroundColor: "hsl(220 10% 96%)" }}>
              <h4 className="text-lg font-serif font-semibold mb-3" style={{ color: 'hsl(220 15% 20%)' }}>
                LLM Evaluation & Data Annotation
              </h4>
              <p className="leading-relaxed text-sm" style={{ color: 'hsl(220 10% 45%)' }}>
                Designing benchmark datasets, scoring rubrics, and annotation workflows to evaluate LLM responses using
                SFT-style annotations and RLHF-style ranking frameworks.
              </p>
            </div>
            <div className="p-6 rounded-lg" style={{ backgroundColor: "hsl(220 10% 96%)" }}>
              <h4 className="text-lg font-serif font-semibold mb-3" style={{ color: 'hsl(220 15% 20%)' }}>
                Code Generation Quality
              </h4>
              <p className="leading-relaxed text-sm" style={{ color: 'hsl(220 10% 45%)' }}>
                Evaluating model-generated code for correctness, efficiency, readability, and edge-case handling across
                realistic problem settings.
              </p>
            </div>
            <div className="p-6 rounded-lg" style={{ backgroundColor: "hsl(220 10% 96%)" }}>
              <h4 className="text-lg font-serif font-semibold mb-3" style={{ color: 'hsl(220 15% 20%)' }}>
                Model Failure Analysis
              </h4>
              <p className="leading-relaxed text-sm" style={{ color: 'hsl(220 10% 45%)' }}>
                Systematically identifying hallucinations, incorrect retrieval, logical inconsistencies, and reasoning
                breakdowns in AI outputs.
              </p>
            </div>
            <div className="p-6 rounded-lg" style={{ backgroundColor: "hsl(220 10% 96%)" }}>
              <h4 className="text-lg font-serif font-semibold mb-3" style={{ color: 'hsl(220 15% 20%)' }}>
                Retrieval-Augmented Systems & Reliability
              </h4>
              <p className="leading-relaxed text-sm" style={{ color: 'hsl(220 10% 45%)' }}>
                Building retrieval-augmented pipelines that improve contextual retrieval, enforce deterministic behavior,
                and ensure systems fail safely when context is ambiguous or low-confidence.
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