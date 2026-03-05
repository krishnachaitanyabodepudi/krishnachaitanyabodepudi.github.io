const LearningsSection = () => {
  const learnings = [
    {
      title: "Model outputs require structured evaluation.",
      description:
        "Without clear scoring rubrics and benchmark datasets, model improvements become subjective and difficult to measure.",
    },
    {
      title: "Retrieval errors cause many LLM failures.",
      description:
        "Incorrect context injection is a major source of hallucinated responses in RAG systems.",
    },
    {
      title: "Annotation quality determines model quality.",
      description:
        "Poor annotation guidelines or inconsistent grading can directly degrade the quality of fine-tuned models.",
    },
    {
      title: "AI systems must fail safely.",
      description:
        "Systems interacting with LLMs should prevent incorrect context or ambiguous prompts from influencing outputs whenever possible.",
    },
  ];

  return (
    <section id="learnings" className="py-24 px-4 light-section">
      <div className="max-w-4xl mx-auto">
        <p className="text-primary font-sans text-sm tracking-[0.3em] uppercase mb-4 text-center">
          Insights
        </p>
        <h2 className="text-3xl md:text-5xl font-serif mb-16 text-center" style={{ color: 'hsl(220 15% 20%)' }}>
          What I Learned Operating These Systems
        </h2>

        <div className="space-y-8">
          {learnings.map((learning, index) => (
            <div key={index} className="p-6 rounded-lg" style={{ backgroundColor: 'hsl(220 10% 96%)' }}>
              <h3 className="text-xl font-serif font-semibold mb-3" style={{ color: 'hsl(220 15% 20%)' }}>
                {learning.title}
              </h3>
              <p className="leading-relaxed" style={{ color: 'hsl(220 10% 45%)' }}>
                {learning.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningsSection;

