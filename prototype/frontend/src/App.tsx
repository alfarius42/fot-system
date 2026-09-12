import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AppLayout } from './components/AppLayout'
import { DashboardPage } from './pages/DashboardPage'
import { DailyInputPage } from './pages/DailyInputPage'
import { DirectoriesPage } from './pages/DirectoriesPage'
import { SchedulePage } from './pages/SchedulePage'
import { TomorrowPage } from './pages/TomorrowPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="schedule" element={<SchedulePage />} />
          <Route path="tomorrow" element={<TomorrowPage />} />
          <Route path="daily" element={<DailyInputPage />} />
          <Route path="directories" element={<DirectoriesPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
