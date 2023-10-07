export enum Frequency {
  DAILY = 'DAILY',
  WEEKLY = 'WEEKLY',
  BIWEEKLY = 'BIWEEKLY',
  MONTHLY = 'MONTHLY',
  BIMONTHLY = 'BIMONTHLY',
  YEARLY = 'YEARLY',
}

export type Relative = {
  id: string
  name: string
  meetupFrequence?: Frequency
  lastMeetupDate?: string // ISO String
  phoneCallFrequence?: Frequency
  lastPhoneCallDate?: string // ISO String
  birthday?: string // ISO String
}

export type UserData = {
  name: string
  relatives: Relative[]
}
