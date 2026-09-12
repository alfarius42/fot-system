import { employees, SECTIONS } from '../data/fixtures'
import { CATEGORY_LABELS } from '../data/types'

const DAYS = Array.from({ length: 7 }, (_, i) => 10 + i)

export function SchedulePage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">График на месяц</h2>
          <p className="mt-1 text-sm text-slate-500">Март 2026 · смена «День»</p>
        </div>
        <p className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white">
          Плановый ФОТ недели: 612 700 ₽
        </p>
      </div>

      <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th className="px-4 py-3 font-medium">Сотрудник</th>
              <th className="px-4 py-3 font-medium">Участок</th>
              {DAYS.map((day) => (
                <th key={day} className="px-2 py-3 text-center font-medium">{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, rowIndex) => (
              <tr key={employee.id} className="border-t border-slate-100">
                <td className="px-4 py-3">
                  <p className="font-medium text-slate-900">{employee.fullName}</p>
                  <p className="text-xs text-slate-500">{CATEGORY_LABELS[employee.category]}</p>
                </td>
                <td className="px-4 py-3 text-slate-600">{employee.section}</td>
                {DAYS.map((day) => {
                  const scheduled = (rowIndex + day) % 3 !== 0
                  return (
                    <td key={day} className="px-2 py-3 text-center">
                      <span
                        className={[
                          'inline-block h-7 w-7 rounded-md text-xs leading-7',
                          scheduled
                            ? 'bg-emerald-100 text-emerald-800'
                            : 'bg-slate-100 text-slate-400',
                        ].join(' ')}
                      >
                        {scheduled ? '✓' : '—'}
                      </span>
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid gap-4 md:grid-cols-5">
        {SECTIONS.map((section, index) => (
          <div key={section} className="rounded-lg border border-slate-200 bg-white p-3 text-sm">
            <p className="font-medium text-slate-800">{section}</p>
            <p className="mt-1 text-slate-500">Ср. численность: {4 + index}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
