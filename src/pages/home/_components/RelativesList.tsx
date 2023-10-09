import { getLateAndSeenRelatives } from '../../../helpers/relatives/getLateAndSeenRelatives'
import { useUserData } from '../../../hooks/userData/useUserData'
import RelativeListItem from './RelativeListItem'

export default function RelativesList() {
  const { userData } = useUserData()

  const { lateRelatives, seenRelatives } = getLateAndSeenRelatives(
    userData?.relatives || []
  )

  return (
    <div className="pb-12">
      {lateRelatives?.length > 0 && (
        <>
          <h2 className="text-xs">You should take news from :</h2>
          <ul className="mb-8">
            {lateRelatives?.map((relative) => (
              <RelativeListItem key={relative.id} relative={relative} isLate />
            ))}
          </ul>
        </>
      )}

      {seenRelatives?.length > 0 && (
        <>
          <div className="w-16 border  border-teal-400" />
          <ul className="mt-8">
            {seenRelatives?.map((relative) => (
              <RelativeListItem key={relative.id} relative={relative} />
            ))}
          </ul>
        </>
      )}

      {seenRelatives?.length === 0 && lateRelatives?.length === 0 && (
        <>
          <p className="text-center">Things are quiet here... 😪</p>
          <p className="block text-sm">
            Start adding relatives by clicking on the{' '}
            <span className="text-teal-600">button below</span>.
          </p>
        </>
      )}
    </div>
  )
}
