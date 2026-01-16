# VIT Chat Assistant

A VIT-themed React + Vite application with a built-in chatbot powered by a local Ollama model. The site showcases a landing page with announcements, rankings, programs, and an integrated assistant that collects basic lead information (name and phone) and provides answers using an LLM. An admin dashboard is included to review and manage collected leads (client-side only).

## Table of Contents

- Features
- Tech Stack
- Getting Started
- Running the Chat Assistant (Ollama)
- Configuration and Customization
- Project Structure
- Scripts
- Deployment
- Troubleshooting
- Roadmap
- License

## Features

- Modern VIT-themed UI built with Tailwind CSS and shadcn/ui components
- Responsive landing page with sections:
  - AnnouncementBar
  - Header
  - Hero
  - Rankings
  - Programs
  - Footer
- Floating Chat Assistant:
  - Collects user name and phone before chatting
  - Persists leads in `localStorage` (client-side only)
  - Talks to a local Ollama instance (default model `llama3.2`)
  - Smooth UI with loading states and auto-scrolling
- Admin Dashboard (`/admin`):
  - View all collected leads
  - Refresh, delete individual leads, or clear all
  - Basic stats (total leads, today’s leads, unique phones)
- Strong theming and design tokens:
  - VIT-inspired colors and animations defined in Tailwind config and CSS
- TypeScript + React Router + TanStack Query setup

## Tech Stack

- Vite 5, React 18, TypeScript
- Tailwind CSS + tailwindcss-animate
- shadcn/ui + Radix UI primitives
- TanStack React Query
- Lucide icons
- React Router
- Vitest + Testing Library (for tests)

## Getting Started

Prerequisites:
- Node.js 18+ and npm
- (Optional, for the chatbot) [Ollama](https://ollama.com/) installed locally

Steps:
```sh
# 1) Clone the repository
git clone https://github.com/Sahil-Gulihar/vit-chat-assistant.git
cd vit-chat-assistant

# 2) Install dependencies
npm install

# 3) Start the dev server (defaults to http://localhost:8080)
npm run dev
```

## Running the Chat Assistant (Ollama)

The chatbot calls a local Ollama server at `http://localhost:11434/api/chat` using the `llama3.2` model.

1) Install Ollama (see [Ollama docs](https://ollama.com/))
2) Pull and run the model:
```sh
ollama pull llama3.2
ollama run llama3.2
```
3) Keep Ollama running while you use the app. The chat window (bottom-right) will become available after entering name and phone.

If the assistant cannot connect, you’ll see an error message guiding you to start Ollama.

## Configuration and Customization

- Chat model and endpoint:
  - File: `src/components/Chatbot.tsx`
  - Default endpoint: `http://localhost:11434/api/chat`
  - Default model: `llama3.2`
  - You can change both in the `fetch` call body and URL.
- System prompt:
  - The assistant’s “system” role message is defined in `Chatbot.tsx`. Update it to refine tone, scope, and instructions for the VIT use case.
- Theming:
  - Tailwind tokens and animations in `tailwind.config.ts` and `src/index.css`
  - VIT color variables like `--vit-navy`, `--vit-gold`, etc.
- Lead storage:
  - Client-side only via `localStorage` under key `vit_chat_leads`
  - Consider adding a backend if you need persistence beyond the browser or want to store sensitive data securely.

## Project Structure

Key files and directories:
- `src/App.tsx` — App shell with router, providers (QueryClient, Tooltip, Toasters)
- `src/pages/Index.tsx` — Landing page assembling core sections and Chatbot
- `src/pages/Admin.tsx` — Admin dashboard to view/manage leads
- `src/components/Chatbot.tsx` — Chat assistant UI and Ollama integration
- `src/index.css` — Global styles, CSS variables, utility classes
- `tailwind.config.ts` — Tailwind theme configuration
- `vite.config.ts` — Vite config (port 8080, alias `@` → `./src`)
- `package.json` — Dependencies and scripts

## Scripts

```json
{
  "dev": "vite",
  "build": "vite build",
  "build:dev": "vite build --mode development",
  "preview": "vite preview",
  "lint": "eslint .",
  "test": "vitest run",
  "test:watch": "vitest"
}
```

- `npm run dev` — Start the dev server (HMR, port 8080)
- `npm run build` — Production build
- `npm run preview` — Preview the production build locally
- `npm run lint` — Run ESLint
- `npm run test` — Run tests once
- `npm run test:watch` — Watch mode for tests

## Deployment

This is a static SPA and can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting that serves the `dist` output

Build and deploy:
```sh
npm run build
# Then deploy the 'dist' folder to your hosting provider
```

Notes:
- The chatbot depends on a local Ollama server by default. For production, either:
  - Run Ollama server accessible to the deployed frontend and handle CORS,
  - Or proxy requests through a backend API,
  - Or switch to a hosted model API (OpenAI, etc.) and secure credentials server-side.

## Troubleshooting

- Chatbot says it can’t connect:
  - Ensure Ollama is running: `ollama run llama3.2`
  - Check that it’s accessible at `http://localhost:11434/api/chat`
- Port conflicts:
  - Vite uses port 8080 by default (see `vite.config.ts`). Change if needed.
- Node version:
  - Use Node 18+ (Vite 5 requires newer Node versions).
- CORS issues (production):
  - If you expose an Ollama or LLM endpoint, configure CORS or proxy via your backend.
- Styling not applied:
  - Ensure Tailwind content paths include `./src/**/*.{ts,tsx}`.
  - Run a fresh build or restart dev server.

## Roadmap

- Backend API for secure lead storage and contact workflows
- Authentication for admin dashboard
- Better prompt engineering and contextual knowledge (VIT-specific FAQs, admissions data)
- Streaming responses and chat history persistence
- Model selection and settings UI

## License

No license specified. Add a LICENSE file (e.g., MIT) if you intend to open-source this project.

---
Author: Sahil Gulihar
