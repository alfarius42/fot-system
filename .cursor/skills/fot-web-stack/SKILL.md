---
name: fot-web-stack
description: Stack and conventions for FOT shift-planning web app. Use when implementing or estimating the restaurant production payroll system.
---

# FOT Web Stack (draft)

## Project

Single web app: shift planning, attendance, payroll (FOT) dashboard for food production.

## Preferred stack (until customer confirms)

- **Frontend:** React 18 + TypeScript + Vite
- **UI:** shadcn/ui or similar — tables + forms + dashboard charts
- **Backend:** Fastify (Node) OR PHP 8 — match hosting
- **DB:** PostgreSQL preferred; MySQL acceptable
- **Auth:** session cookies, bcrypt passwords
- **Charts:** Recharts

## Domain rules (must read)

1. `project-docs/Common/actual/FULL_SPEC.md`
2. `project-docs/App/actual/SPEC.md`
3. Four employee categories — different payroll logic (see SPEC §2.3)

## Code layout (when `app/` exists)

```
app/
├── frontend/     # React SPA
├── backend/      # API + domain services
└── README.md
```

## Conventions

- Domain logic in pure functions / services — testable
- API JSON REST under `/api/`
- Optimistic locking for concurrent edits (3–5 users)
- Mobile-responsive; no native app in MVP

## Prototype (current)

- Code lives in `prototype/frontend/` on branch `develop`
- Mock data only — no backend for portfolio demo

## Do not

- Expose Google Sheets as primary UI
- Add backend to prototype unless scope explicitly expands
