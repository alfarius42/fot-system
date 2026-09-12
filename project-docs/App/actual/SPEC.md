# Spec — FOT Web App

Статус: **черновик для оценки**. Детали — после `QUESTIONS.md`.

## 1. Модули приложения

| Модуль | Описание | ID оценки |
|--------|----------|-----------|
| Auth | Логин, сессии, базовые роли | INF-01 |
| Справочники | Должности, сотрудники, категории, ставки | REF-01 |
| График | План на месяц: дата × смена × участок × сотрудник | SCH-01 |
| Производство | План единиц по дням / месяцу | SCH-01 |
| Оперативка | Завтра, явка, доп. вызов, план vs факт | OPS-01 |
| Дашборд | KPI, фильтры, периоды | DSH-01 |
| Ежедневный ввод | Явка, выручка, факт производства | INP-01 |
| Расчёты | ФОТ, % от выручки, аутсорс A/B | CALC-01 |

## 2. Справочники

### Должность

- `name` — строка, уникальная
- `default_rate` — ставка по умолчанию (число + тип: shift/hour/day — **TBD**)
- `is_active`

### Сотрудник

- `full_name`
- `position_id`
- `category` — enum: `own_cash` | `own_official` | `outsource_a` | `outsource_b`
- `outsource_company_id` — nullable, для A/B
- `rate_override` — nullable
- `effective_rate` — computed: override ?? position.default_rate
- `is_active`

### Аутсорс-компания *(если несколько — TBD)*

- `name`
- `type` — A | B
- `commission_per_person_day` — для типа B

## 3. График (план)

### ShiftAssignment (плановая смена)

- `date`
- `shift_id` — смена (утро/вечер — **TBD**)
- `section_id` — участок цеха
- `employee_id`
- `is_planned` — true для базового графика; false для доп. вызова

### ProductionPlan

- `date`
- `planned_units` — целевые единицы
- `planned_revenue` — опционально, если план выручки отдельно (**TBD**)

## 4. Факт (оперативка)

### DailyAttendance

- `date`
- `shift_assignment_id` или (`date`, `employee_id`, `shift_id`)
- `status` — `present` | `absent` | `unknown`
- `source` — planned | extra_own | extra_outsource_a | extra_outsource_b

### DailyMetrics

- `date`
- `actual_revenue`
- `actual_units`

## 5. Расчёты (бизнес-логика)

### Плановый ФОТ (день / неделя / месяц)

- Сумма `effective_rate` по всем плановым ShiftAssignment за период.
- Группировка: по участку, категории, количеству человек.

### Фактический ФОТ

- Только смены со статусом `present` (+ правила для absent — **TBD**).
- Аутсорс A: человеко-смены для сверки; сумма счёта — **TBD**.
- Аутсорс B: нал сотруднику + комиссия × человеко-дни.

### KPI дашборда

- `fot_plan`, `fot_fact` — ₽
- `fot_percent = fot_fact / revenue_fact × 100` (alert если > 15% — **TBD**)
- `revenue_plan`, `revenue_fact`
- `units_plan`, `units_fact`
- headcount по категориям — time series

## 6. UI (разделы)

1. **Дашборд** — фильтры + графики/таблицы KPI
2. **График** — месячное планирование
3. **Завтра / Оперативка** — быстрый экран на следующий день
4. **Ежедневный ввод** — форма факта
5. **Справочники** — должности, сотрудники
6. **Настройки** — участки, смены, пользователи *(TBD)*

Mobile: responsive web, touch-friendly формы.

## 7. Concurrent access

- 3–5 пользователей без потери данных.
- MVP: optimistic locking (version на запись) или row-level updated_at.
- Realtime — только если заказчик подтвердит (**+4–6 ч**).

## 8. Вне MVP

- 1С, бухгалтерия, автоматическая выручка
- Native mobile app
- Сложный BI (drill-down, custom reports)

## 9. Traceability

Feature ID из оценки: см. `BENCHMARKS.md` §3.
