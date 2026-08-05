# Pokémon Search

A web app for searching and browsing Pokémon information, built with [Next.js](https://nextjs.org).

**Live demo:** [search-pokemon-fm-tech-wheat.vercel.app](https://search-pokemon-fm-tech-wheat.vercel.app)

## Features

- Search for Pokémon by name
- Browse Pokémon details in a clean, responsive UI

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org) with TypeScript
- **Styling:** Tailwind CSS ([PostCSS](https://postcss.org))
- **UI Components:** [shadcn/ui](https://ui.shadcn.com) (see `components.json`)
- **Linting:** ESLint
- **Testing:** Jest
- **Deployment:** [Vercel](https://vercel.com)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) (LTS recommended)
- A package manager: npm, yarn, pnpm, or bun

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/visneeb/search-pokemon-fm-tech.git
   cd search-pokemon-fm-tech
   ```
2. Install dependencies
   ```bash
   npm install
   ```
3. Run the development server
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

You can start editing the app by modifying the files in `src/`. The page auto-updates as you edit.

### Running Tests

```bash
npm test
```

## Project Structure

```
search-pokemon-fm-tech/
├── public/              # Static assets
├── src/                 # Application source code (pages/components/etc.)
├── components.json      # shadcn/ui configuration
├── eslint.config.mjs    # ESLint configuration
├── jest.config.ts       # Jest configuration
├── next.config.ts       # Next.js configuration
├── postcss.config.mjs   # PostCSS / Tailwind configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Project dependencies and scripts
```

## Deployment

This project is deployed on [Vercel](https://vercel.com), the platform from the creators of Next.js. Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for details on deploying your own instance.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) — learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) — an interactive Next.js tutorial
- [shadcn/ui Documentation](https://ui.shadcn.com/docs) — learn about the UI components used

## License

No license has been specified yet for this project.
