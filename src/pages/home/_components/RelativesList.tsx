import Card from '../../../components/display/Card'
import { useUserData } from '../../../hooks/userData/useUserData'

export default function RelativesList() {
  const { userData } = useUserData()
  return (
    <ul>
      {userData?.relatives?.map((relative) => (
        <Card tag="li" key={relative.id} className="relative">
          <h2 className="text-base">{relative.name}</h2>
          <p className="mb-0 text-xs text-slate-700">
            <span className="mr-2 inline-block text-lg">🤝</span>{' '}
            {relative.meetingFrequency}
          </p>
          <p className="mb-0 text-xs  text-slate-700">
            <span className="mr-2 inline-block text-lg">☎️</span>{' '}
            {relative.callingFrequency}
          </p>
        </Card>
      ))}
    </ul>
  )
}
