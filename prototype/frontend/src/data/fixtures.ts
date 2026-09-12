import type { DailyKpi, Employee } from './types'

export const SECTIONS = [
  'Горячий цех',
  'Холодный цех',
  'Мойка',
  'Фасовка',
  'Комплектация',
]

export const employees: Employee[] = [
  {
    id: 'e1',
    fullName: 'Иванова Мария',
    position: 'Повар',
    category: 'own_official',
    rate: 4200,
    section: 'Горячий цех',
  },
  {
    id: 'e2',
    fullName: 'Петров Алексей',
    position: 'Повар',
    category: 'own_cash',
    rate: 3800,
    section: 'Горячий цех',
  },
  {
    id: 'e3',
    fullName: 'Сидорова Елена',
    position: 'Мойщица',
    category: 'outsource_a',
    rate: 2900,
    section: 'Мойка',
  },
  {
    id: 'e4',
    fullName: 'Кузнецов Дмитрий',
    position: 'Фасовщик',
    category: 'outsource_b',
    rate: 3100,
    section: 'Фасовка',
  },
  {
    id: 'e5',
    fullName: 'Новикова Ольга',
    position: 'Комплектовщик',
    category: 'own_cash',
    rate: 3500,
    section: 'Комплектация',
  },
]

export const weeklyKpi: DailyKpi[] = [
  {
    date: '2026-03-10',
    fotPlan: 118000,
    fotFact: 121500,
    revenuePlan: 820000,
    revenueFact: 795000,
    unitsPlan: 4200,
    unitsFact: 4080,
  },
  {
    date: '2026-03-11',
    fotPlan: 115000,
    fotFact: 112800,
    revenuePlan: 810000,
    revenueFact: 832000,
    unitsPlan: 4150,
    unitsFact: 4210,
  },
  {
    date: '2026-03-12',
    fotPlan: 120000,
    fotFact: 134200,
    revenuePlan: 830000,
    revenueFact: 760000,
    unitsPlan: 4300,
    unitsFact: 3890,
  },
  {
    date: '2026-03-13',
    fotPlan: 117000,
    fotFact: 116400,
    revenuePlan: 825000,
    revenueFact: 841000,
    unitsPlan: 4250,
    unitsFact: 4310,
  },
  {
    date: '2026-03-14',
    fotPlan: 122000,
    fotFact: 119800,
    revenuePlan: 840000,
    revenueFact: 858000,
    unitsPlan: 4400,
    unitsFact: 4450,
  },
]

export function fotPercent(fot: number, revenue: number): number {
  if (revenue === 0) return 0
  return Math.round((fot / revenue) * 1000) / 10
}
