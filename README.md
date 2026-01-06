# Portfolio – Krishna Chaitanya Bodepudi

This repository hosts my personal portfolio site, which presents a focused view of the systems I've built and how I think about production AI and backend engineering.

The portfolio is intentionally concise and system-oriented. It is not a resume replacement. Instead, it highlights a small number of projects in depth, with emphasis on correctness, isolation, and reliability in real-world environments.

## About the Portfolio

This portfolio is designed for:

- Applied AI / ML Engineer roles
- GenAI / LLM Engineer roles
- Backend Engineer roles (ML-adjacent)

The content focuses on production behavior, not demos. Projects are presented with explicit discussion of:

- problem constraints
- failure modes
- design decisions
- safety and isolation guarantees

## Featured Projects

### Persistent Memory Layer for LLM Applications

A backend service that provides task-scoped, persistent memory for LLM-based applications. The system separates long-term memory from conversational context, uses semantic retrieval with explicit boundaries, and enforces fail-closed behavior to prevent incorrect recall.

**Key themes:**

- memory scoping and isolation
- semantic retrieval under concurrency
- predictable behavior under partial failure

**Repository:**

https://github.com/krishnachaitanyabodepudi/LLM-persistent-memory

### Clinical Communication Memory System

A visit-scoped semantic memory system designed for clinical communication workflows. The system guarantees that patient context is isolated per visit and prevents cross-patient data leakage, even under semantically similar inputs.

**Key themes:**

- UUID-based access boundaries
- fail-closed retrieval
- audit logging and traceability
- safety-first system design

**Repository:**

https://github.com/krishnachaitanyabodepudi/clinical-communication-memory

## What This Portfolio Is (and Is Not)

**This portfolio is:**

- system-focused
- backend-first
- explicit about constraints and failure modes
- intended for technical reviewers and founders

**This portfolio is not:**

- a list of many small projects
- a tutorial site
- a blog
- a resume clone

## Technology Scope

The portfolio reflects hands-on experience with:

- Python and SQL
- FastAPI and async backend services
- LLM inference and semantic retrieval
- Vector embeddings and FAISS
- Relational and document databases
- Docker, CI/CD, and Linux-based environments

Technologies are included only if they are used in real projects.

## Deployment

The site is deployed using GitHub Pages and is intentionally static.

There is no backend component in this repository.

## Contact

If you're interested in production AI systems, LLM-backed services, or ML-adjacent backend engineering, you can reach me at:

- **Email:** kcbodepudi021@gmail.com
- **LinkedIn:** https://www.linkedin.com/in/krishna-chaitanya-bodepudi
- **GitHub:** https://github.com/krishnachaitanyabodepudi
