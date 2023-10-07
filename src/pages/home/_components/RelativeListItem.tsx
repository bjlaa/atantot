import Card from '../../../components/display/Card'
import { Relative } from '../../../types/userData'

export default function RelativeListItem({ relative }: { relative: Relative }) {
  return (
    <Card
      tag="li"
      key={relative.id}
      className="relative mb-4 last-of-type:mb-0">
      <h2 className="text-base">{relative.name}</h2>
      <p className="mb-0 text-xs text-slate-700">
        <span className="mr-2 inline-block text-lg">🤝</span>{' '}
        {relative.meetupFrequence}
      </p>
      <p className="mb-0 text-xs  text-slate-700">
        <span className="mr-2 inline-block text-lg">☎️</span>{' '}
        {relative.phoneCallFrequence}
      </p>
    </Card>
  )
}
