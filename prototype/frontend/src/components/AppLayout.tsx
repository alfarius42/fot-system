import { NavLink, Outlet } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Дашборд' },
  { to: '/schedule', label: 'График' },
  { to: '/tomorrow', label: 'Завтра' },
  { to: '/daily', label: 'Ежедневный ввод' },
  { to: '/directories', label: 'Справочники' },
]

export function AppLayout() {
  return (
    <div className="min-h-screen">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
              Демо-прототип
            </p>
            <h1 className="text-lg font-semibold text-slate-900">
              ФОТ · Планирование смен
            </h1>
          </div>
          <p className="hidden text-sm text-slate-500 sm:block">
            Руководитель кухни · март 2026
          </p>
        </div>
        <nav className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-4 pb-2">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                [
                  'rounded-md px-3 py-2 text-sm font-medium whitespace-nowrap transition-colors',
                  isActive
                    ? 'bg-slate-900 text-white'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900',
                ].join(' ')
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>
      <main className="mx-auto max-w-7xl px-4 py-6">
        <Outlet />
      </main>
    </div>
  )
}
