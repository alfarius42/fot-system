# Architecture — FOT Web App

Статус: **черновик для оценки**. Стек финализировать после ответов заказчика и выбора хостинга.

## 1. Рекомендуемый стек (рабочая гипотеза)

| Слой | Вариант | Почему |
|------|---------|--------|
| Frontend | React + TypeScript (Vite) | Дашборд, формы, mobile-friendly |
| Backend | Node (Fastify) или PHP 8 | CRUD + расчёты; PHP — если shared hosting |
| DB | PostgreSQL или MySQL | Нормальные транзакции для concurrent users |
| Auth | Session + bcrypt | 3–5 users, без SSO в MVP |
| Charts | Recharts / Chart.js | KPI на дашборде |
| Deploy | VPS или managed (Railway, Timeweb) | HTTPS, бэкапы |

**Альтернатива «быстрый MVP»:** Supabase (Postgres + Auth + RLS) + React — меньше boilerplate, ~−4–6 dev-ч на infra.

**Не рекомендуется для MVP:** Google Sheets как primary DB при 3–5 concurrent editors (конфликты, не «единое приложение» по ощущению).

## 2. Структура репозитория (после старта)

```
Restoraunt_team/
├── app/                 # код приложения
│   ├── frontend/
│   ├── backend/
│   └── README.md
├── project-docs/        # docs only
├── .cursor/
├── AGENTS.md
└── README.md
```

## 3. Модель данных (ER, упрощённо)

```
positions ──< employees >── outsource_companies
                │
sections ──< shift_assignments >── employees
                │
shifts ─────────┘
                │
         daily_attendance
                │
production_plans / daily_metrics (per date)
users (auth)
```

## 4. API (черновик)

REST, JSON. Контракт детализировать в `API_CONTRACTS.md` **после старта** (API First gate).

| Area | Endpoints |
|------|-----------|
| Auth | POST /api/auth/login, logout, GET /api/auth/me |
| Directories | CRUD /api/positions, /api/employees, /api/sections, /api/shifts |
| Schedule | GET/PUT /api/schedule?month=, bulk assign |
| Operations | GET /api/operations/tomorrow, PATCH attendance |
| Daily input | PUT /api/daily-metrics/:date |
| Dashboard | GET /api/dashboard?from=&to=&filters |

## 5. Расчётный слой

- **Domain services** отдельно от HTTP:
  - `PayrollCalculator` — ФОТ plan/fact
  - `OutsourceCalculator` — A (person-shifts), B (commission)
  - `DashboardAggregator` — KPI series
- Чистые функции для unit-тестов на расчёты.

## 6. Concurrent editing

1. `updated_at` + `version` на `shift_assignments` и `daily_*`
2. PATCH с `If-Match: version` → 409 Conflict → UI «обновите страницу»
3. Опционально позже: SSE/WebSocket для live refresh

## 7. Безопасность (MVP)

- HTTPS
- Password hash (bcrypt/argon2)
- CSRF для cookie sessions
- Role check на API (admin / editor / viewer — **TBD**)

## 8. Деплой

- Docker Compose (app + db) или single VPS
- Daily DB backup
- `.env` не в git

## 9. Открытые решения

- [ ] Node vs PHP vs Supabase
- [ ] Хостинг заказчика
- [ ] Импорт Excel на старте

См. [`../../Common/actual/BRIEF.md`](../../Common/actual/BRIEF.md).
