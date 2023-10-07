import dayjs from 'dayjs'
import { Relative } from '../../types/userData'

const getFrequencyAsNumberDays = (frequency: string) => {
  switch (frequency) {
    case 'DAILY':
      return 1
    case 'BIWEEKLY':
      return 3.5
    case 'WEEKLY':
      return 7
    case 'BIMONTHLY':
      return 15
    case 'MONTHLY':
      return 30
    case 'YEARLY':
      return 365
    default:
      return 0
  }
}

export function getLateAndSeenRelatives(relatives: Relative[]) {
  return relatives.reduce(
    (acc, relative) => {
      const {
        lastMeetupDate,
        lastPhoneCallDate,
        meetupFrequence,
        phoneCallFrequence,
      } = relative

      const today = dayjs()

      const lastMeetupDateAsDate = lastMeetupDate && dayjs(lastMeetupDate)
      const lastPhoneCallDateAsDate =
        lastPhoneCallDate && dayjs(lastPhoneCallDate)

      const isLastMeetupDateLate =
        lastMeetupDateAsDate &&
        meetupFrequence &&
        lastMeetupDateAsDate
          .add(getFrequencyAsNumberDays(meetupFrequence), 'day')
          .isBefore(today)

      const isLastPhoneCallDateLate =
        lastPhoneCallDateAsDate &&
        phoneCallFrequence &&
        lastPhoneCallDateAsDate
          .add(getFrequencyAsNumberDays(phoneCallFrequence), 'day')
          .isBefore(today)

      if (isLastMeetupDateLate || isLastPhoneCallDateLate) {
        acc.lateRelatives.push(relative)
      } else {
        acc.seenRelatives.push(relative)
      }

      return acc
    },
    {
      lateRelatives: [] as Relative[],
      seenRelatives: [] as Relative[],
    }
  )
}
