const ExperienceSection = () => {
  const experiences = [
    {
      title: "Machine Learning Engineer",
      company: "Optum – UnitedHealth Group",
      location: "USA (Remote)",
      period: "January 2024 – Present",
      highlights: [
        "At Optum, I work on applied machine learning systems that support internal analytics and decision-support workflows. My role focuses on ML inference services, retrieval-augmented generation pipelines, and reliability-first backend systems, rather than offline model experimentation.",
        "I am responsible for designing and operating ML systems where correctness, isolation, and predictable behavior under load are treated as core requirements.",
        "Designed and implemented Retrieval-Augmented Generation (RAG) pipelines integrating structured healthcare data and unstructured clinical text, improving retrieval relevance and downstream response accuracy by approximately 35–40% during internal evaluations.",
        "Built FAISS-based semantic retrieval systems indexing tens of thousands of records, enabling sub-second similarity search and consistent context injection into LLM inference workflows while reducing noisy or irrelevant retrieval by ~30%.",
        "Developed NLP pipelines for clinical text processing, including preprocessing, entity extraction, and semantic normalization, improving inference consistency and reducing incomplete or contradictory outputs observed during parallel testing.",
        "Engineered FastAPI-based ML inference services with async request handling, batching strategies, and response-size controls, achieving 20–25% reductions in end-to-end latency under concurrent workloads.",
        "Implemented robust input validation, response normalization, and fallback mechanisms across inference APIs, reducing malformed or partial outputs by approximately 30% in concurrent and adversarial request scenarios.",
        "Introduced request-level scoping and namespace isolation across inference and retrieval layers, preventing cross-context data access and ensuring deterministic behavior under parallel usage.",
        "Integrated structured persistence layers (PostgreSQL, SQLite) to manage intermediate state and metadata, ensuring consistent retrieval behavior across service restarts, failures, and redeployments.",
        "Designed fail-closed retrieval behavior so embedding or vector search failures returned empty context instead of partial or misleading information, improving system safety and predictability.",
        "Analyzed inference outputs across hundreds of real-world samples to identify semantic drift, low-confidence retrieval patterns, and hallucination risks, feeding insights back into retrieval tuning and prompt refinement cycles.",
        "Built and maintained production-style ML APIs using FastAPI and Docker, standardizing model access patterns and eliminating ad-hoc execution paths from early experimentation.",
        "Added structured logging and monitoring for inference behavior, retrieval decisions, latency metrics, and failure cases, enabling reproducible debugging and iterative system hardening.",
        "Collaborated with data scientists, ML engineers, and platform teams to transition experimental ML workflows into stable, reusable applied AI services suitable for ongoing internal use.",
        "Participated in architectural discussions around latency, cost, and reliability tradeoffs, influencing system design decisions more than model choice in several workflows.",
      ],
      focusAreas: "Focus areas: ML inference reliability · RAG systems · semantic retrieval · latency optimization · failure handling · API-driven ML systems · production hardening",
    },
    {
      title: "Software Engineer",
      company: "New Mek Solutions",
      location: "Hyderabad, India",
      period: "January 2022 – December 2023",
      highlights: [
        "At New Mek Solutions, I worked on backend and ML-powered services supporting internal NLP and analytics platforms. My role combined Python backend engineering with applied ML integration, focusing on making models usable through stable APIs and repeatable data pipelines.",
        "This role shaped my approach to treating ML as a system component, not a standalone artifact.",
        "Developed and deployed ML-backed inference services using FastAPI and Docker, standardizing model access across 3+ internal NLP and analytics workflows and reducing manual execution and setup effort by approximately 40%.",
        "Built and maintained REST APIs to serve ML inference results, supporting concurrent internal usage and significantly reducing reliance on ad-hoc scripts and manual model execution.",
        "Designed and implemented Python and SQL data pipelines to support model training and evaluation on datasets ranging from 100K to 2M+ records, improving data preparation consistency and experiment reproducibility.",
        "Implemented NLP pipelines using Hugging Face Transformers for document classification, summarization, and information extraction, automating processing of thousands of unstructured documents per run.",
        "Optimized backend performance by introducing async request handling and database query optimizations, improving average API response times by 25–35%.",
        "Integrated ML services into downstream analytics workflows by defining clear API contracts and data schemas, reducing integration issues and rework in consuming applications.",
        "Worked closely with application teams to refine inference interfaces and error handling behavior, improving overall system robustness and developer experience.",
        "Supported internal experimentation by enabling repeatable inference and evaluation workflows, reducing inconsistencies between development and deployment environments.",
      ],
      focusAreas: "Focus areas: ML inference services · NLP pipelines · backend APIs · data pipelines · performance optimization · ML system integration",
    },
  ];

  const education = {
    degree: "Master of Science in Information Systems",
    school: "Saint Louis University",
    location: "St. Louis, MO",
    gpa: "GPA: 3.90",
  };

  return (
    <section id="experience" className="py-24 px-4 light-section" style={{ backgroundColor: 'hsl(220 10% 96%)' }}>
      <div className="max-w-4xl mx-auto">
        <p className="text-primary font-sans text-sm tracking-[0.3em] uppercase mb-4 text-center">
          Experience
        </p>
        <h2 className="text-3xl md:text-5xl font-serif mb-16 text-center" style={{ color: 'hsl(220 15% 20%)' }}>
          Professional Background
        </h2>

        {/* Work Experience */}
        <div className="mb-16 space-y-12">
          {experiences.map((experience, expIndex) => (
            <div key={expIndex} className={expIndex > 0 ? "pt-8 border-t" : ""} style={expIndex > 0 ? { borderColor: 'hsl(220 10% 85%)' } : {}}>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-serif" style={{ color: 'hsl(220 15% 20%)' }}>
                    {experience.title} — {experience.company}
                  </h3>
                  {experience.location && (
                    <p className="text-primary font-medium">{experience.location}</p>
                  )}
                </div>
                <div className="text-right mt-2 md:mt-0">
                  <p style={{ color: 'hsl(220 10% 45%)' }}>{experience.period}</p>
                </div>
              </div>

              <ul className="space-y-3 mb-4">
                {experience.highlights.map((highlight, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="text-primary mt-1.5">•</span>
                    <span className="leading-relaxed" style={{ color: 'hsl(220 10% 45%)' }}>{highlight}</span>
                  </li>
                ))}
              </ul>
              
              {experience.focusAreas && (
                <p className="text-sm font-semibold mt-4" style={{ color: 'hsl(220 15% 20%)' }}>
                  {experience.focusAreas}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="pt-8 border-t" style={{ borderColor: 'hsl(220 10% 85%)' }}>
          <h3 className="text-xl font-serif mb-6 uppercase tracking-wider" style={{ color: 'hsl(220 15% 20%)' }}>
            Education
          </h3>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h4 className="text-lg font-serif" style={{ color: 'hsl(220 15% 20%)' }}>
                {education.degree}
              </h4>
              <p className="text-primary font-medium">{education.school}</p>
            </div>
            <div className="text-right mt-2 md:mt-0">
              <p style={{ color: 'hsl(220 10% 45%)' }}>{education.gpa}</p>
              <p style={{ color: 'hsl(220 10% 55%)' }}>{education.location}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;