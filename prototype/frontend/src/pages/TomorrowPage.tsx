import { employees } from '../data/fixtures'
import { CATEGORY_LABELS } from '../data/types'

const tomorrowRows = employees.map((employee, index) => ({
  ...employee,
  status: (index === 2 ? 'absent' : 'present') as 'absent' | 'present',
}))

export function TomorrowPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-slate-900">Завтра · 15 марта</h2>
        <p className="mt-1 text-sm text-slate-500">
          План vs факт явки · доп. вызов при нехватке
        </p>
      </div>

      <div className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
        Нехватка на участке «Горячий цех»: 1 человек. Рекомендуется доп. вызов.
      </div>

      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th className="px-4 py-3">Сотрудник</th>
              <th className="px-4 py-3">Участок</th>
              <th className="px-4 py-3">Категория</th>
              <th className="px-4 py-3">План</th>
              <th className="px-4 py-3">Факт</th>
            </tr>
          </thead>
          <tbody>
            {tomorrowRows.map((row) => (
              <tr key={row.id} className="border-t border-slate-100">
                <td className="px-4 py-3 font-medium">{row.fullName}</td>
                <td className="px-4 py-3">{row.section}</td>
                <td className="px-4 py-3">{CATEGORY_LABELS[row.category]}</td>
                <td className="px-4 py-3">Смена день</td>
                <td className="px-4 py-3">
                  <StatusBadge status={row.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-wrap gap-2">
        <button type="button" className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white">
          + Свой сверхурочно
        </button>
        <button type="button" className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700">
          + Аутсорс А
        </button>
        <button type="button" className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700">
          + Аутсорс Б
        </button>
      </div>
    </div>
  )
}

function StatusBadge({ status }: { status: 'present' | 'absent' }) {
  if (status === 'present') {
    return (
      <span className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-medium text-emerald-800">
        Вышел
      </span>
    )
  }
  return (
    <span className="rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-800">
      Не вышел
    </span>
  )
}
