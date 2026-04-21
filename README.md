# Morpheus Chatbot

A full-featured AI chatbot powered by the Morpheus decentralized inference network.

<p align="center">
  <a href="#powered-by-morpheus-inference-api"><strong>Morpheus API</strong></a> ·
  <a href="#features"><strong>Features</strong></a> ·
  <a href="#model-providers"><strong>Model Providers</strong></a> ·
  <a href="#running-locally"><strong>Running locally</strong></a>
</p>
<br/>

## Powered by Morpheus Inference API

This template uses the [Morpheus Inference API](https://apidocs.mor.org) — an OpenAI-compatible API backed by a decentralized network of inference providers.

[![Get API Key](https://img.shields.io/badge/Get%20API%20Key-Morpheus-00D084?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTIgMkw0IDdWMTdMMTIgMjJMMjAgMTdWN0wxMiAyWiIgZmlsbD0id2hpdGUiLz48L3N2Zz4=)](https://app.mor.org)

📖 [API Documentation](https://apidocs.mor.org) · 🔧 [Available Models](https://apidocs.mor.org/documentation/models)

## Features

- [Next.js](https://nextjs.org) App Router
  - Advanced routing for seamless navigation and performance
  - React Server Components (RSCs) and Server Actions for server-side rendering and increased performance
- [AI SDK](https://ai-sdk.dev/docs/introduction)
  - Unified API for generating text, structured objects, and tool calls with LLMs
  - Hooks for building dynamic chat and generative user interfaces
  - Powered by Morpheus decentralized inference
- [shadcn/ui](https://ui.shadcn.com)
  - Styling with [Tailwind CSS](https://tailwindcss.com)
  - Component primitives from [Radix UI](https://radix-ui.com) for accessibility and flexibility
- Data Persistence
  - [Neon Serverless Postgres](https://vercel.com/marketplace/neon) for saving chat history and user data
  - [Vercel Blob](https://vercel.com/storage/blob) for efficient file storage
- [Auth.js](https://authjs.dev)
  - Simple and secure authentication

## Model Providers

This template connects to the [Morpheus Inference API](https://apidocs.mor.org) — a decentralized, OpenAI-compatible inference network. Models are configured in `lib/ai/models.ts`.

| Model | Context | Capabilities |
|-------|---------|--------------|
| Kimi K2.5 | 256K | Vision, reasoning, code |
| GLM 5 | 200K | Reasoning, function calling |
| Qwen3 235B | 128K | Function calling |
| Llama 3.3 70B | 128K | Function calling |
| MiniMax M2.5 | 198K | Code, reasoning |

Get your API key at [app.mor.org](https://app.mor.org).

## Running locally

You will need to use the environment variables [defined in `.env.example`](.env.example) to run the chatbot.

> Note: You should not commit your `.env` file or it will expose secrets that will allow others to control access to your accounts.

1. Copy `.env.example` to `.env.local` and fill in the values:
   - `AUTH_SECRET`: Generate with `openssl rand -base64 32`
   - `MORPHEUS_API_KEY`: Get from [app.mor.org](https://app.mor.org)
   - `POSTGRES_URL`: Your Postgres connection string
   - `BLOB_READ_WRITE_TOKEN`: Your Vercel Blob token
   - `REDIS_URL`: Your Redis connection string

```bash
pnpm install
pnpm db:migrate # Setup database or apply latest database changes
pnpm dev
```

Your app should now be running on [localhost:3000](http://localhost:3000).
