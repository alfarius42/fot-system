import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { fotPercent, weeklyKpi } from '../data/fixtures'

function formatRub(value: number): string {
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    maximumFractionDigits: 0,
  }).format(value)
}

export function DashboardPage() {
  const latest = weeklyKpi[weeklyKpi.length - 1]
  const fotPct = fotPercent(latest.fotFact, latest.revenueFact)
  const overTarget = fotPct > 15

  const chartData = weeklyKpi.map((row) => ({
    date: row.date.slice(5),
    fotPlan: row.fotPlan / 1000,
    fotFact: row.fotFact / 1000,
    revenue: row.revenueFact / 1000,
  }))

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-slate-900">Дашборд KPI</h2>
        <p className="mt-1 text-sm text-slate-500">
          ФОТ, выручка и производство · фильтры на демо-данных
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {['Март 2026', 'Все участки', 'Все категории'].map((filter) => (
          <span
            key={filter}
            className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700"
          >
            {filter}
          </span>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <KpiCard title="ФОТ факт" value={formatRub(latest.fotFact)} hint={`План ${formatRub(latest.fotPlan)}`} />
        <KpiCard
          title="ФОТ / выручка"
          value={`${fotPct}%`}
          hint="Цель ≤ 15%"
          accent={overTarget ? 'danger' : 'success'}
        />
        <KpiCard title="Выручка факт" value={formatRub(latest.revenueFact)} hint={`План ${formatRub(latest.revenuePlan)}`} />
        <KpiCard title="Единиц продукции" value={latest.unitsFact.toLocaleString('ru-RU')} hint={`План ${latest.unitsPlan}`} />
      </div>

      <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <h3 className="mb-4 text-sm font-medium text-slate-700">Динамика за неделю (тыс. ₽)</h3>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="date" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Legend />
              <Bar dataKey="fotPlan" name="ФОТ план" fill="#94a3b8" radius={[4, 4, 0, 0]} />
              <Bar dataKey="fotFact" name="ФОТ факт" fill="#0f172a" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>
    </div>
  )
}

function KpiCard({
  title,
  value,
  hint,
  accent = 'default',
}: {
  title: string
  value: string
  hint: string
  accent?: 'default' | 'success' | 'danger'
}) {
  const accentClass =
    accent === 'danger'
      ? 'text-red-600'
      : accent === 'success'
        ? 'text-emerald-600'
        : 'text-slate-900'

  return (
    <article className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <p className="text-sm text-slate-500">{title}</p>
      <p className={`mt-2 text-2xl font-semibold ${accentClass}`}>{value}</p>
      <p className="mt-1 text-xs text-slate-400">{hint}</p>
    </article>
  )
}
