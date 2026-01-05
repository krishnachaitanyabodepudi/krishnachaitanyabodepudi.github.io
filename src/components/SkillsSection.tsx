const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming & Data",
      skills: ["Python", "SQL", "Pandas", "NumPy"],
    },
    {
      title: "Backend Engineering",
      skills: ["FastAPI", "REST APIs", "async request handling", "API-based service design", "backend integration"],
    },
    {
      title: "Applied AI & Machine Learning",
      skills: ["Model integration", "inference pipelines", "feature engineering", "model evaluation", "ML-backed services"],
    },
    {
      title: "GenAI & Semantic Systems",
      skills: ["Embeddings", "semantic retrieval", "retrieval-augmented generation (RAG)", "FAISS", "Hugging Face Transformers"],
    },
    {
      title: "Data & Storage",
      skills: ["PostgreSQL", "SQLite", "MongoDB", "SQLAlchemy"],
    },
    {
      title: "Infrastructure & Operations",
      skills: ["Docker", "CI/CD (GitHub Actions)", "model serving", "environment isolation", "Linux", "AWS", "Git"],
    },
    {
      title: "System Design & Reliability",
      skills: ["Request scoping", "data isolation", "defensive failure handling", "edge-case validation", "predictable runtime behavior"],
    },
  ];

  return (
    <section id="skills" className="py-24 px-4 light-section">
      <div className="max-w-4xl mx-auto">
        <p className="text-primary font-sans text-sm tracking-[0.3em] uppercase mb-4 text-center">
          Skills
        </p>
        <h2 className="text-3xl md:text-5xl font-serif mb-16 text-center" style={{ color: 'hsl(220 15% 20%)' }}>
          Technical Expertise
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="p-6 rounded-lg" style={{ backgroundColor: 'hsl(220 10% 96%)' }}>
              <h3 className="text-lg font-serif font-semibold mb-4" style={{ color: 'hsl(220 15% 20%)' }}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 text-sm rounded-full"
                    style={{ 
                      backgroundColor: 'hsl(328 100% 54% / 0.1)',
                      color: 'hsl(328 100% 40%)'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;