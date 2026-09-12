# AGENTS — FOT System (производство)

## Старт сессии

1. `project-docs/DOCUMENTATION_INDEX.md` — найти нужный документ.
2. `project-docs/Common/actual/FULL_SPEC.md` — scope и решения.
3. `project-docs/App/actual/SPEC.md` + `ARCHITECTURE.md` — домен и стек.
4. `project-docs/TODO.md` — текущие задачи.
5. `project-docs/App/actual/CASE_STUDY.md` — текст для портфолио.
6. Skill `.cursor/skills/fot-web-stack/SKILL.md` — стек прототипа.

## Фаза проекта

**Сейчас: демо-прототип для кейса** (лид не сросся). Код — `prototype/frontend/`. Backend не делаем.

## Ветки (строго)

| Задача | Ветка |
|--------|-------|
| Код прототипа (`prototype/**`) | `develop` |
| Релиз демо на хостинг | merge `develop` → `main` |
| Документация, оценки, ТЗ | `develop` или `project-docs` *(опционально)* |

## Документация

- Живёт только в `project-docs/`.
- Актуальное — `actual/`, устаревшее — `archive/`.
- При изменении scope — FULL_SPEC, SCOPE_CHANGELOG, TZ_CHANGELOG, TODO.
- Порядок: FULL_SPEC → App/SPEC → App/ARCHITECTURE → TODO.

## Git

- Репозиторий: https://github.com/alfarius42/fot-system
- Коммиты и push — по запросу пользователя; агент может пушить при явном поручении.
- Подробнее: `project-docs/Common/actual/GIT_WORKFLOW.md`

## Dev (прототип)

```bash
cd prototype/frontend
npm install
npm run dev
```

Сборка: `npm run build`
