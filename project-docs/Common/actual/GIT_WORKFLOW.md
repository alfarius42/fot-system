# Git Workflow

Репозиторий: https://github.com/alfarius42/fot-system

## Ветки

| Ветка | Назначение | Куда коммитить |
|-------|------------|----------------|
| `main` | Релиз демо на хостинг | Только merge из `develop` |
| `develop` | Разработка прототипа | `prototype/`, `project-docs/`, `.cursor/` |
| `project-docs` | *(опционально)* только документация | `project-docs/`, оценки |

## Правила

1. **Прототип:** feature → `develop` → после деплоя merge → `main`.
2. **Docs:** изменения scope/ТЗ — в `develop` (или отдельная ветка `project-docs`).
3. **Не пушить** незаконченное в `main`.
4. **Не force-push** в `main`.

## Типовые команды

```bash
git checkout develop
git pull origin develop
# ... правки в prototype/ ...
git add prototype/
git commit -m "feat(prototype): ..."
git push origin develop

# Релиз демо
git checkout main
git merge develop
git push origin main
```

## Работа из Cursor Chat

Агент может выполнять те же команды через Shell при явной просьбе пользователя.  
Перед push — `git status`, `git diff`.

## Remote

```bash
git remote add origin https://github.com/alfarius42/fot-system.git
```
