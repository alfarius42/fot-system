import { employees } from '../data/fixtures'

export function DailyInputPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-slate-900">Ежедневный ввод</h2>
        <p className="mt-1 text-sm text-slate-500">14 марта 2026 · явка, выручка, производство</p>
      </div>

      <form className="grid gap-6 lg:grid-cols-2">
        <section className="space-y-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <h3 className="font-medium text-slate-800">Показатели дня</h3>
          <label className="block text-sm">
            <span className="text-slate-600">Выручка факт, ₽</span>
            <input
              type="text"
              defaultValue="858 000"
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
            />
          </label>
          <label className="block text-sm">
            <span className="text-slate-600">Единиц продукции факт</span>
            <input
              type="text"
              defaultValue="4450"
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
            />
          </label>
        </section>

        <section className="space-y-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <h3 className="font-medium text-slate-800">Явка по графику</h3>
          {employees.map((employee) => (
            <label key={employee.id} className="flex items-center justify-between gap-3 text-sm">
              <span>{employee.fullName}</span>
              <select className="rounded-lg border border-slate-300 px-2 py-1">
                <option>Вышел</option>
                <option>Не вышел</option>
              </select>
            </label>
          ))}
        </section>
      </form>

      <button type="button" className="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white">
        Сохранить день
      </button>
    </div>
  )
}
