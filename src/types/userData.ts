enum Frequency {
  DAILY = 'DAILY',
  WEEKLY = 'WEEKLY',
  BIWEEKLY = 'BIWEEKLY',
  MONTHLY = 'MONTHLY',
  BIMONTHLY = 'BIMONTHLY',
  YEARLY = 'YEARLY',
}

export type Relative = {
  name: string
  frequency: Frequency
  lastContactDate?: Date
  id: string
}

export type UserData = {
  name: string
  relatives: Relative[]
}
