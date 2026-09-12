export type EmployeeCategory =
  | 'own_cash'
  | 'own_official'
  | 'outsource_a'
  | 'outsource_b'

export interface Employee {
  id: string
  fullName: string
  position: string
  category: EmployeeCategory
  rate: number
  section: string
}

export interface DailyKpi {
  date: string
  fotPlan: number
  fotFact: number
  revenuePlan: number
  revenueFact: number
  unitsPlan: number
  unitsFact: number
}

export const CATEGORY_LABELS: Record<EmployeeCategory, string> = {
  own_cash: 'Свой штат, нал',
  own_official: 'Свой штат, официальный',
  outsource_a: 'Аутсорс А (по счёту)',
  outsource_b: 'Аутсорс Б (комиссия)',
}
