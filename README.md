# Unlox Interest Calculator

A full-stack starter for the Unlox Interest Calculator web app. It includes a Node.js API for account, transaction, and interest calculations plus a React dashboard that follows the shared UI direction.

## Project Structure

```
server/  # Express API + local JSON datastore
web/     # React (Vite) front-end
```

## Quick Start

### 1) Start the API

```bash
cd server
npm install
npm run dev
```

The API runs on `http://localhost:5000`.

### 2) Start the Web App

```bash
cd web
npm install
npm run dev
```

The UI runs on `http://localhost:5173` and expects the API at `http://localhost:5000`.

### Environment Variables

If you want to point the UI to a different API URL, create a `.env` file in `web/`:

```
VITE_API_URL=https://your-api-host
```

## API Overview

- `GET /api/summary` → totals + reminders
- `GET /api/accounts` → list accounts
- `POST /api/accounts` → create account
- `GET /api/transactions` → list transactions
- `POST /api/transactions` → create transaction
- `POST /api/transactions/calculate` → calculate interest

## Data Persistence

The API uses a local JSON file at `server/src/data/db.json` generated from `seed.json` on first run. Replace this with your preferred database once you confirm the storage requirements.

## Vercel Deployment Notes

This repo is a monorepo. The `vercel.json` file tells Vercel to build the `web/` app and serve `web/dist` so that the root URL does not 404.

If you deploy via the Vercel UI instead of using `vercel.json`, set the **Root Directory** to `web` and keep the default Vite build settings.
