import { Github, ExternalLink } from "lucide-react";

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 light-section" style={{ backgroundColor: 'hsl(220 10% 96%)' }}>
      <div className="max-w-4xl mx-auto">
        <p className="text-primary font-sans text-sm tracking-[0.3em] uppercase mb-4 text-center">
          Projects
        </p>
        <h2 className="text-3xl md:text-5xl font-serif mb-16 text-center" style={{ color: 'hsl(220 15% 20%)' }}>
          Featured Work
        </h2>

        {/* Flagship Project */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-serif mb-4" style={{ color: 'hsl(220 15% 20%)' }}>
            Persistent Memory Layer for LLM Applications
          </h3>
          
          <div className="mb-4">
            <h4 className="text-sm font-semibold mb-2 uppercase tracking-wider" style={{ color: 'hsl(220 15% 20%)' }}>
              Technical Constraints
            </h4>
            <p className="text-sm" style={{ color: 'hsl(220 10% 45%)' }}>
              FastAPI · FAISS · SQLite · Vector Embeddings · Async APIs · Local LLM Inference
            </p>
          </div>
          
          <a 
            href="https://github.com/krishnachaitanyabodepudi/LLM-persistent-memory"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:underline mb-8"
          >
            <Github className="w-4 h-4" />
            View on GitHub
            <ExternalLink className="w-3 h-3" />
          </a>

          <div className="space-y-8">
            <div>
              <h4 className="text-lg font-semibold mb-3" style={{ color: 'hsl(220 15% 20%)' }}>Problem</h4>
              <p className="leading-relaxed" style={{ color: 'hsl(220 10% 45%)' }}>
                LLM applications often rely on replaying long conversation histories or injecting shared global context into prompts. This approach leads to excessive token usage, inconsistent reasoning, and incorrect responses when unrelated context is retrieved. From an AI evaluation perspective, it becomes difficult to measure whether a model’s response quality improves or degrades when memory retrieval is introduced, because retrieval errors can silently influence outputs.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-3" style={{ color: 'hsl(220 15% 20%)' }}>Why It's Hard</h4>
              <p className="leading-relaxed" style={{ color: 'hsl(220 10% 45%)' }}>
                Semantic similarity retrieval frequently surfaces context that appears related but is logically incorrect. These retrieval failures introduce subtle model errors such as hallucinated facts, incorrect reasoning paths, or partially relevant responses. Without controlled evaluation frameworks, it is difficult to systematically analyze model behavior across ambiguous prompts, edge cases, and concurrent sessions.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-3" style={{ color: 'hsl(220 15% 20%)' }}>Solution</h4>
              <p className="leading-relaxed" style={{ color: 'hsl(220 10% 45%)' }}>
                I implemented a persistent memory service that separates long-term knowledge storage from conversational context. The system uses vector embeddings with FAISS to retrieve semantically relevant context based on similarity thresholds, retrieving only the most relevant information instead of replaying full chat histories. To evaluate model behavior with and without memory retrieval, I designed benchmark prompt datasets containing ambiguous queries, edge cases, and repeated semantic patterns, enabling systematic comparison of response quality across multiple inference scenarios. I also developed rubric-based scoring criteria to assess model outputs across correctness, reasoning clarity, and contextual grounding, making it possible to identify retrieval-driven hallucinations and analyze failure patterns. The memory service is exposed through an asynchronous FastAPI backend, supporting concurrent requests while maintaining deterministic retrieval behavior across sessions.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-3" style={{ color: 'hsl(220 15% 20%)' }}>Reliability & Safety</h4>
              <p className="leading-relaxed" style={{ color: 'hsl(220 10% 45%)' }}>
                Implemented namespace-based memory isolation using explicit user and task identifiers to ensure contextual boundaries are enforced across sessions. Added fail-closed retrieval logic, where retrieval failures or low-confidence matches return no context rather than injecting incorrect information. Reduced prompt token usage by 30–40%, improving inference efficiency and reducing noise in model responses. Validated system behavior using multi-session benchmark testing to confirm consistent retrieval behavior without cross-context leakage.
              </p>
            </div>
          </div>
        </div>

        {/* Supporting Project */}
        <div className="pt-8 border-t" style={{ borderColor: 'hsl(220 10% 85%)' }}>
          <h3 className="text-2xl md:text-3xl font-serif mb-4" style={{ color: 'hsl(220 15% 20%)' }}>
            Clinical Communication Memory System
          </h3>
          
          <div className="mb-4">
            <h4 className="text-sm font-semibold mb-2 uppercase tracking-wider" style={{ color: 'hsl(220 15% 20%)' }}>
              Technical Constraints
            </h4>
            <p className="text-sm" style={{ color: 'hsl(220 10% 45%)' }}>
              FastAPI · SQLite · Vector Embeddings · UUID-based Scoping · Fail-Closed Retrieval · Audit Logging
            </p>
          </div>
          
          <a 
            href="https://github.com/krishnachaitanyabodepudi/clinical-communication-memory"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:underline mb-8"
          >
            <Github className="w-4 h-4" />
            View on GitHub
            <ExternalLink className="w-3 h-3" />
          </a>

          <div className="space-y-8">
            <div>
              <h4 className="text-lg font-semibold mb-3" style={{ color: 'hsl(220 15% 20%)' }}>Problem</h4>
              <p className="leading-relaxed" style={{ color: 'hsl(220 10% 45%)' }}>
                Clinical AI systems must retain context within a patient visit while ensuring that information from one patient interaction never leaks into another. Generic conversational memory approaches often rely on global semantic retrieval, which risks retrieving context from unrelated sessions when similar symptoms, medications, or clinical terms appear. In healthcare AI systems, such retrieval failures can introduce incorrect model responses or unsafe contextual assumptions.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-3" style={{ color: 'hsl(220 15% 20%)' }}>Why It's Hard</h4>
              <p className="leading-relaxed" style={{ color: 'hsl(220 10% 45%)' }}>
                Semantic similarity retrieval alone does not enforce access boundaries. Clinical conversations often share similar terminology across unrelated patient visits, so embedding-based retrieval may surface context from the wrong interaction. From a model evaluation standpoint, detecting these errors requires structured testing using adversarial prompts and controlled evaluation scenarios.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-3" style={{ color: 'hsl(220 15% 20%)' }}>Solution</h4>
              <p className="leading-relaxed" style={{ color: 'hsl(220 10% 45%)' }}>
                I developed a visit-scoped semantic memory system that enforces strict contextual isolation across patient interactions. All memory reads and writes are bound to a UUID-based visit identifier, ensuring that semantic retrieval operates only within the current interaction scope. The backend enforces visit boundaries across all system layers, including request validation, repository access, and semantic retrieval operations. To evaluate the system’s reliability, I designed adversarial prompts and repeated query patterns to test whether the retrieval system incorrectly surfaced context from unrelated visits. Model responses generated using retrieved context were then analyzed using structured evaluation criteria, including contextual correctness, reasoning consistency, and response safety.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-3" style={{ color: 'hsl(220 15% 20%)' }}>Reliability & Safety</h4>
              <p className="leading-relaxed" style={{ color: 'hsl(220 10% 45%)' }}>
                Implemented fail-closed retrieval mechanisms to prevent partial or low-confidence context from influencing model outputs. Added structured audit logging for all semantic retrieval operations, enabling traceability and debugging of memory access patterns. Conducted concurrent testing across multiple simulated patient sessions to verify that contextual boundaries remained intact, confirming 100% visit isolation accuracy with no cross-session memory contamination.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;