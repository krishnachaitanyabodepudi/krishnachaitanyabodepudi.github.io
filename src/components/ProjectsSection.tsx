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
                Most LLM-based applications treat memory as an extension of the prompt, replaying long conversation histories or injecting shared global context. This approach does not scale across users, tasks, or sessions and leads to excessive token usage, degraded response quality, and a high risk of context leakage.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-3" style={{ color: 'hsl(220 15% 20%)' }}>Why It's Hard</h4>
              <p className="leading-relaxed" style={{ color: 'hsl(220 10% 45%)' }}>
                Long-term memory introduces subtle failure modes. Semantic similarity can surface context that is technically related but logically incorrect. Retrieval failures often fail silently, injecting partial or misleading information into prompts. Without explicit scoping, memory systems become non-deterministic under concurrency and difficult to reason about.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-3" style={{ color: 'hsl(220 15% 20%)' }}>Solution</h4>
              <p className="leading-relaxed" style={{ color: 'hsl(220 10% 45%)' }}>
                I designed and implemented a persistent memory service that separates long-term memory from conversational context. Memory is stored at a task-scoped namespace and retrieved independently of chat history. Semantic retrieval is implemented using vector embeddings and FAISS, with controlled similarity thresholds to balance recall and precision. The system is exposed via an async FastAPI service, supporting concurrent access while maintaining consistent behavior across sessions and restarts.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-3" style={{ color: 'hsl(220 15% 20%)' }}>Reliability & Safety</h4>
              <p className="leading-relaxed" style={{ color: 'hsl(220 10% 45%)' }}>
                Enforced strict namespace-based isolation using explicit user and task identifiers. Implemented fail-closed retrieval, where embedding or search failures return no memory rather than partial context. Reduced average prompt size by 30–40%, improving inference efficiency and response stability. Validated correctness under concurrent multi-session access with zero observed cross-context leakage.
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
                Clinical communication systems require context retention across a single patient visit while guaranteeing that data never leaks across visits or patients. Generic conversational memory approaches risk accidental cross-patient exposure, especially when handling multilingual conversations or repeated clinical terms that appear across different visits.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-3" style={{ color: 'hsl(220 15% 20%)' }}>Why It's Hard</h4>
              <p className="leading-relaxed" style={{ color: 'hsl(220 10% 45%)' }}>
                Semantic similarity alone does not enforce access boundaries. Similar symptoms, medications, or phrases can appear across unrelated visits, making incorrect recall more dangerous than missing memory. In clinical contexts, silent retrieval errors are unacceptable from both safety and compliance perspectives.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-3" style={{ color: 'hsl(220 15% 20%)' }}>Solution</h4>
              <p className="leading-relaxed" style={{ color: 'hsl(220 10% 45%)' }}>
                I built a visit-scoped semantic memory system where all reads and writes are explicitly bound to a UUID-based visit identifier. The backend enforces visit context at every layer, from request validation to repository access. Semantic search is performed strictly within visit boundaries, preventing cross-visit contamination even under concurrent workloads.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-3" style={{ color: 'hsl(220 15% 20%)' }}>Reliability & Safety</h4>
              <p className="leading-relaxed" style={{ color: 'hsl(220 10% 45%)' }}>
                Implemented fail-closed retrieval to prevent partial or incorrect context injection. Added structured audit logging for all semantic access to support traceability and debugging. Validated isolation guarantees under concurrent and adversarial request patterns, achieving 100% isolation accuracy in testing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;