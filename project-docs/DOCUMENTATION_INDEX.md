# Documentation Index — FOT System

> Актуальные документы — в `actual/`. Устаревшие — в `archive/`.

## Common

| Документ | Путь |
|----------|------|
| **Full spec (scope MVP)** | [Common/actual/FULL_SPEC.md](Common/actual/FULL_SPEC.md) |
| **Бриф заказчика (docx)** | [Common/actual/BRIEF-zakazchika.docx](Common/actual/BRIEF-zakazchika.docx) · [исходник BRIEF.md](Common/actual/BRIEF.md) |
| Уточняющие вопросы (redirect) | [Common/actual/QUESTIONS.md](Common/actual/QUESTIONS.md) |
| **Бенчмарки скорости** | [Common/actual/BENCHMARKS.md](Common/actual/BENCHMARKS.md) |
| Changelog scope | [Common/actual/SCOPE_CHANGELOG.md](Common/actual/SCOPE_CHANGELOG.md) |
| Changelog ТЗ | [Common/actual/TZ_CHANGELOG.md](Common/actual/TZ_CHANGELOG.md) |
| Git workflow | [Common/actual/GIT_WORKFLOW.md](Common/actual/GIT_WORKFLOW.md) |
| Календарный план | [Common/actual/CALENDAR_PLAN.md](Common/actual/CALENDAR_PLAN.md) |
| Оценка | [Common/actual/estimate-fot.xlsx](Common/actual/estimate-fot.xlsx) *(после расчёта)* |
| Исходное ТЗ (PDF) | [Common/source/tz-fot-system.pdf](Common/source/tz-fot-system.pdf) |
| Общий TODO | [../TODO.md](../TODO.md) |

## App (веб-приложение)

| Документ | Путь |
|----------|------|
| **Spec** | [App/actual/SPEC.md](App/actual/SPEC.md) |
| **Architecture** | [App/actual/ARCHITECTURE.md](App/actual/ARCHITECTURE.md) |
| Case study (портфолио) | [App/actual/CASE_STUDY.md](App/actual/CASE_STUDY.md) |

## Код

| Домен | Папка | Статус |
|-------|-------|--------|
| Демо-прототип | `prototype/frontend/` | 🔄 develop |

## Правила Cursor

| Правило | Путь |
|---------|------|
| Пути документов | `.cursor/rules/project-doc-paths.mdc` |
| Workflow документации | `.cursor/rules/documentation-workflow.mdc` |
| Git workflow | `.cursor/rules/git-workflow.mdc` |
| Стек (черновик) | `.cursor/skills/fot-web-stack/SKILL.md` |

## Порядок загрузки (агент)

1. `AGENTS.md`
2. `project-docs/DOCUMENTATION_INDEX.md`
3. `FULL_SPEC.md` → `QUESTIONS.md` → App/SPEC → ARCHITECTURE
4. `TODO.md`
