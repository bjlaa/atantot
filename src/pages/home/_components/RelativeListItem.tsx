import dayjs from 'dayjs'
import Card from '../../../components/display/Card'
import { getFrequenceLabel } from '../../../helpers/relatives/getFrequenceLabel'
import { Relative } from '../../../types/userData'

import relativeTime from 'dayjs/plugin/relativeTime'
import updateLocale from 'dayjs/plugin/updateLocale'
import { capitalizeString } from '../../../utils/capitalizeString'

dayjs.extend(relativeTime)
dayjs.extend(updateLocale)

dayjs.updateLocale('en', {
  relativeTime: {
    future: 'in %s',
    past: '%s ago',
    s: 'a few seconds',
    m: 'a minute',
    mm: '%d minutes',
    h: 'an hour',
    hh: '%d hours',
    d: 'a day',
    dd: '%d days',
    M: 'a month',
    MM: '%d months',
    y: '%d months',
    yy: '%d years',
  },
})

export default function RelativeListItem({
  relative,
  isLate,
}: {
  relative: Relative
  isLate?: boolean
}) {
  const meetupNumberDaysDiffHumanized = dayjs(relative.lastMeetupDate).fromNow()

  const phoneCallNumberDaysDiffHumanized = dayjs(
    relative.lastPhoneCallDate
  ).fromNow()

  return (
    <Card
      tag="li"
      key={relative.id}
      className={`relative mb-2 last-of-type:mb-0 ${
        isLate ? '!bg-red-50' : ''
      }`}>
      <h2 className="mb-2 text-base">{relative.name}</h2>
      <div className="flex">
        <div className="mb-0 flex-1 ">
          <p className="mb-1 text-2xs text-slate-700">
            <span className="inline-block text-xs">👋</span> Meetup
          </p>

          <p
            className={`mb-0 text-2xs ${
              isLate ? 'font-bold text-red-700' : ''
            }`}>
            {relative.lastMeetupDate ? (
              <span>{capitalizeString(meetupNumberDaysDiffHumanized)}</span>
            ) : (
              <span className="font-normal text-slate-400">--</span>
            )}
          </p>

          <p className="mb-0 text-2xs text-teal-800">
            {' '}
            {getFrequenceLabel(relative.meetupFrequence) || (
              <span className="font-normal text-slate-400">--</span>
            )}
          </p>
        </div>

        <div className="mb-0 flex-1 ">
          <p className="mb-1 text-2xs text-slate-700">
            <span className="inline-block text-xs">☎️</span> Phone call
          </p>

          <p
            className={`mb-0 text-2xs ${
              isLate ? 'font-bold text-red-700' : ''
            }`}>
            {relative.lastPhoneCallDate ? (
              <span>{capitalizeString(phoneCallNumberDaysDiffHumanized)}</span>
            ) : (
              <span className="font-normal text-slate-400">--</span>
            )}
          </p>

          <p className="mb-0 text-2xs text-teal-800">
            {getFrequenceLabel(relative.phoneCallFrequence) || (
              <span className="font-normal text-slate-400">--</span>
            )}
          </p>
        </div>
      </div>
    </Card>
  )
}
