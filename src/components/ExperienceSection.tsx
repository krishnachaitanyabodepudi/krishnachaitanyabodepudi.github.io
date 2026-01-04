const ExperienceSection = () => {
  const experience = {
    title: "Software Engineer",
    company: "New Mek Solutions",
    location: "Hyderabad, India",
    period: "January 2021 – December 2023",
    highlights: [
      "Built and deployed ML-backed backend services supporting internal product and analytics workflows.",
      "Worked on FastAPI-based inference systems with attention to request scoping, concurrency handling, and predictable response behavior.",
      "Developed and maintained data pipelines supporting model inference and downstream consumption.",
      "Supported deployed services post-release by diagnosing data quality issues, retrieval failures, and performance regressions.",
      "Collaborated with product and engineering teams to integrate ML services into existing internal applications.",
    ],
  };

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
        <div className="mb-16">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h3 className="text-2xl font-serif" style={{ color: 'hsl(220 15% 20%)' }}>
                {experience.title}
              </h3>
              <p className="text-primary font-medium">{experience.company}</p>
            </div>
            <div className="text-right mt-2 md:mt-0">
              <p style={{ color: 'hsl(220 10% 45%)' }}>{experience.period}</p>
              <p style={{ color: 'hsl(220 10% 55%)' }}>{experience.location}</p>
            </div>
          </div>

          <ul className="space-y-3">
            {experience.highlights.map((highlight, index) => (
              <li key={index} className="flex gap-3">
                <span className="text-primary mt-1.5">•</span>
                <span className="leading-relaxed" style={{ color: 'hsl(220 10% 45%)' }}>{highlight}</span>
              </li>
            ))}
          </ul>
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