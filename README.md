# DevRoast

DevRoast is a web app that analyzes source code quality with AI and returns a score, actionable feedback, and an improved version of the submitted snippet.  
It can run in professional mode (direct and constructive) or roast mode (sarcastic and entertaining).

## Highlights

- AI-powered code review with a **0.0 to 10.0** score
- Structured findings grouped by severity (`critical`, `warning`, `good`)
- Suggested fixed version of the submitted code
- Optional roast mode for humorous feedback
- Leaderboard and statistics backed by PostgreSQL

## Tech Stack

- **Frontend:** Next.js 16 (App Router), React 19, Tailwind CSS v4
- **API/Data layer:** tRPC v11 + TanStack React Query v5
- **Database:** PostgreSQL 16 + Drizzle ORM / Drizzle Kit
- **Validation:** Zod
- **Tooling:** TypeScript (strict), Biome, pnpm

## Prerequisites

- Node.js 20+
- pnpm 9+
- Docker (recommended for local PostgreSQL)
- OpenAI API key

## Environment Variables

Create `.env.local` in the project root:

```bash
DATABASE_URL=postgresql://devroast:devroast@localhost:5432/devroast
OPENAI_API_KEY=your_openai_api_key
```

## Local Setup

1. Install dependencies:

```bash
pnpm install
```

2. Start PostgreSQL with Docker:

```bash
docker compose up -d
```

3. Create/apply schema and seed data:

```bash
pnpm db:push
pnpm db:seed
```

4. Start the app:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available Scripts

- `pnpm dev` - run the development server
- `pnpm build` - create production build
- `pnpm start` - run production server
- `pnpm lint` - run Biome checks
- `pnpm format` - format and apply safe fixes with Biome
- `pnpm db:generate` - generate Drizzle migrations
- `pnpm db:migrate` - run Drizzle migrations
- `pnpm db:push` - push schema directly to database
- `pnpm db:studio` - open Drizzle Studio
- `pnpm db:seed` - seed database with sample records

## Project Structure

```text
src/
  app/          # Next.js routes, layouts, and pages
  components/   # feature components and UI primitives
  db/           # Drizzle schema, db client, and seeds
  hooks/        # custom React hooks
  lib/          # shared constants and utilities
  trpc/         # tRPC client/server infrastructure
specs/          # feature specifications
docs/           # supporting documentation
```

## License

This project is available for study and experimentation.
