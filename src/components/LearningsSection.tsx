const LearningsSection = () => {
  const learnings = [
    {
      title: "Models fail quietly, systems shouldn't.",
      description: "In production-like environments, many failures don't raise exceptions. Retrieval returns low-quality context, embeddings drift, or inputs degrade. Designing explicit failure paths and safe fallbacks mattered more than squeezing out marginal model improvements.",
    },
    {
      title: "Correctness beats cleverness in applied ML.",
      description: "Simple, well-scoped pipelines with clear boundaries outperformed more complex designs that were harder to reason about. Enforcing request scoping, data isolation, and predictable behavior prevented subtle bugs that only appeared under concurrent or repeated usage.",
    },
    {
      title: "Inference behavior matters more than training metrics.",
      description: "Offline evaluation rarely reflected real usage patterns. Observing inference-time behavior exposed issues like semantic overreach, unstable outputs, and sensitivity to malformed inputs that weren't visible during model experimentation.",
    },
    {
      title: "ML systems live inside larger systems.",
      description: "Most real problems weren't about the model itself but about how it interacted with APIs, databases, and downstream consumers. Tight API contracts, defensive input validation, and clear integration points made ML outputs usable by other engineers.",
    },
    {
      title: "Operational constraints shape design decisions.",
      description: "Latency, cost, and reliability constraints forced tradeoffs that influenced architecture more than algorithm choice. Batching, response-size control, and conservative retrieval thresholds often delivered more value than switching models.",
    },
    {
      title: "Debugging ML systems requires observability, not intuition.",
      description: "Logging, audit trails, and reproducible inputs were essential for understanding why systems behaved the way they did. Without visibility into retrieval results and inference paths, issues were difficult to diagnose or explain.",
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

