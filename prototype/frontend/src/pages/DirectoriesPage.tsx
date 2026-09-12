import { employees } from '../data/fixtures'
import { CATEGORY_LABELS } from '../data/types'

const positions = ['Повар', 'Мойщица', 'Уборщица', 'Фасовщик', 'Комплектовщик']

export function DirectoriesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold text-slate-900">Справочники</h2>
        <p className="mt-1 text-sm text-slate-500">Должности, сотрудники, ставки</p>
      </div>

      <section className="space-y-3">
        <h3 className="text-lg font-medium text-slate-800">Должности</h3>
        <div className="flex flex-wrap gap-2">
          {positions.map((position) => (
            <span
              key={position}
              className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700"
            >
              {position}
            </span>
          ))}
        </div>
      </section>

      <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th className="px-4 py-3">ФИО</th>
              <th className="px-4 py-3">Должность</th>
              <th className="px-4 py-3">Категория</th>
              <th className="px-4 py-3">Участок</th>
              <th className="px-4 py-3">Ставка / смена</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id} className="border-t border-slate-100">
                <td className="px-4 py-3 font-medium">{employee.fullName}</td>
                <td className="px-4 py-3">{employee.position}</td>
                <td className="px-4 py-3">{CATEGORY_LABELS[employee.category]}</td>
                <td className="px-4 py-3">{employee.section}</td>
                <td className="px-4 py-3">{employee.rate.toLocaleString('ru-RU')} ₽</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  )
}
