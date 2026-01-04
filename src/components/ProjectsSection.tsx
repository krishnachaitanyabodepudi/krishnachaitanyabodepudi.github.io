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
                Most LLM-based applications treat memory as an extension of the prompt, either by replaying long conversation histories or by storing shared global context. This approach breaks down quickly as applications scale across users, tasks, and sessions. It leads to excessive token usage, degraded response quality, and a high risk of context leakage between unrelated interactions.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-3" style={{ color: 'hsl(220 15% 20%)' }}>Why it's hard</h4>
              <p className="leading-relaxed" style={{ color: 'hsl(220 10% 45%)' }}>
                Long-term memory in LLM systems introduces failure modes that are easy to overlook. Semantic similarity can surface context that is technically relevant but logically incorrect. Retrieval failures often fail silently, injecting partial or misleading information into prompts. Without explicit scoping, memory systems become non-deterministic under concurrency and difficult to reason about as the number of users and tasks grows.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-3" style={{ color: 'hsl(220 15% 20%)' }}>Solution</h4>
              <p className="leading-relaxed" style={{ color: 'hsl(220 10% 45%)' }}>
                Designed and implemented a persistent memory service that separates long-term memory from conversational context. Memory is stored at a task-scoped level and retrieved independently of chat history. Semantic retrieval is implemented using vector embeddings and FAISS, with similarity thresholds to control recall precision. The system is exposed through an async FastAPI service, enabling concurrent access while maintaining consistent behavior across sessions and application restarts.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-3" style={{ color: 'hsl(220 15% 20%)' }}>Reliability & Safety</h4>
              <p className="leading-relaxed" style={{ color: 'hsl(220 10% 45%)' }}>
                Implemented strict namespace isolation using explicit user and task identifiers, ensuring memory access is constrained by construction. Retrieval follows a fail-closed model: if embedding generation or vector search fails, no memory is injected into the prompt. This prevents incorrect recall from corrupting model outputs. Decoupling long-term memory from prompts reduced token usage and made system behavior more predictable under load.
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
              <h4 className="text-lg font-semibold mb-3" style={{ color: 'hsl(220 15% 20%)' }}>Why it's hard</h4>
              <p className="leading-relaxed" style={{ color: 'hsl(220 10% 45%)' }}>
                Semantic retrieval does not inherently enforce access boundaries. Similar symptoms, medications, or phrases can exist across unrelated patient visits, increasing the risk of incorrect recall. In clinical contexts, incorrect memory is more dangerous than missing memory, and silent retrieval errors are unacceptable from a safety and compliance standpoint.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-3" style={{ color: 'hsl(220 15% 20%)' }}>Solution</h4>
              <p className="leading-relaxed" style={{ color: 'hsl(220 10% 45%)' }}>
                Built a visit-scoped semantic memory system where all reads and writes are explicitly bound to a UUID-based visit identifier. The backend enforces visit context at every layer, from request validation to repository access, ensuring isolation is not optional or implicit. Semantic search is used only within the boundaries of a single visit, preventing cross-visit contamination even when content is semantically similar.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-3" style={{ color: 'hsl(220 15% 20%)' }}>Reliability & Safety</h4>
              <p className="leading-relaxed" style={{ color: 'hsl(220 10% 45%)' }}>
                Implemented fail-closed retrieval behavior so embedding or search failures return safe empty results instead of partial context. Added structured audit logging for all semantic access to support traceability, debugging, and compliance review. Validated isolation guarantees through concurrent and adversarial testing, including parallel requests with identical content across different visit scopes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;