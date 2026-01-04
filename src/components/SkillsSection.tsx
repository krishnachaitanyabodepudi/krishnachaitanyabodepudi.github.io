const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "SQL"],
    },
    {
      title: "Backend & APIs",
      skills: ["FastAPI", "REST APIs", "Async request handling", "API-based service design"],
    },
    {
      title: "Data & Storage",
      skills: ["PostgreSQL", "SQLite", "MongoDB", "Pandas", "NumPy", "SQLAlchemy"],
    },
    {
      title: "ML / LLM Systems",
      skills: ["Vector embeddings", "Semantic retrieval", "Retrieval-augmented generation (RAG)", "FAISS", "Hugging Face Transformers", "Model inference pipelines"],
    },
    {
      title: "Machine Learning Foundations",
      skills: ["PyTorch", "Scikit-learn", "Feature engineering", "Model training and evaluation"],
    },
    {
      title: "Infrastructure & MLOps",
      skills: ["Docker", "CI/CD (GitHub Actions)", "Environment isolation", "Model serving", "AWS", "Linux", "Git"],
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