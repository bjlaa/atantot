import { Frequency } from '../../types/userData'

export function getFrequenceLabel(frequence: Frequency | undefined) {
  switch (frequence) {
    case Frequency.DAILY:
      return 'Every day'
    case Frequency.BIWEEKLY:
      return 'Twice a week'
    case Frequency.WEEKLY:
      return 'Every week'
    case Frequency.BIMONTHLY:
      return 'Twice a month'
    case Frequency.MONTHLY:
      return 'Every month'
    case Frequency.YEARLY:
      return 'Every year'
    default:
      return ''
  }
}
