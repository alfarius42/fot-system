# FOT System — демо-прототип (портфолио)

Интерактивный frontend-only прототип для кейса: скриншоты и live-демо без backend.

**Не production.** Данные — фикстуры в `frontend/src/data/fixtures.ts`.

## Стек

- React 19 + TypeScript + Vite
- Tailwind CSS v4
- React Router
- Recharts (дашборд)

## Экраны

| Маршрут | Назначение |
|---------|------------|
| `/` | Дашборд KPI |
| `/schedule` | График на месяц |
| `/tomorrow` | Оперативка «завтра» |
| `/daily` | Ежедневный ввод |
| `/directories` | Справочники |

## Локальный запуск

```bash
cd prototype/frontend
npm install
npm run dev
```

Сборка: `npm run build` → `dist/` (деплой на Vercel / Netlify).

## Ветка

Весь код прототипа — ветка **`develop`**. Релиз демо на хостинг — merge в `main`.

## Документация

- Домен и scope: `project-docs/Common/actual/FULL_SPEC.md`
- Текст кейса: `project-docs/App/actual/CASE_STUDY.md`
