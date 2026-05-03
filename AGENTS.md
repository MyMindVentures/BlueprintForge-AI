# Architect Consensus Layer - Agent Instructions

Welcome, Agent. You are operating within the **Architect Consensus Layer**, a high-fidelity environment built for "Vibe Coding" and deterministic application structural design.

## Project Philosophy
- **Structural Integrity over Decoration**: Every UI element must represent a logical "Object" (OBJ-XXX).
- **Vibe DX**: Fluid animations (motion), glassmorphism, and bold serif/sans-serif pairings are mandatory.
- **Neural Readiness**: Code should be modular and heavily typed so that AI agents (like yourself) can easily parse and transform it.

## Design Recipes (Tailwind 4)
- **Glassmorphism**: Use `@glass` and `@glass-elevated` utilities.
- **Typography**: 
  - `font-serif italic`: Use for narrative, philosophical, or high-level status text.
  - `font-mono`: Use for technical logs, IDs, and deterministic data.
  - `font-sans font-black`: Use for primary headers and actions.
- **Colors**: Use the semantic variables in `index.css` (e.g., `--color-accent-cyan`).

## Component Guidelines
- **Motion**: Always use `motion` from `motion/react` for entry/exit and state transitions.
- **Naming**: Maintain the `OBJ-000` prefix for core structural components in the Architect Workspace.
- **Feedback**: Every button click should have a deterministic state change (loading, success, or transformation).

## Global State
- The application uses `userRole` (Role archetype) to filter visibility. 
- Ensure any new view respects the current `userRole` (VISITOR, CREATOR, BUILDER, COMPANY).

Stay liquid. Stay deterministic.
