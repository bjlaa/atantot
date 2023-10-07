import { getLateAndSeenRelatives } from '../../../helpers/relatives/getLateAndSeenRelatives'
import { useUserData } from '../../../hooks/userData/useUserData'
import RelativeListItem from './RelativeListItem'

export default function RelativesList() {
  const { userData } = useUserData()

  const { lateRelatives, seenRelatives } = getLateAndSeenRelatives(
    userData?.relatives || []
  )
  console.log(lateRelatives, seenRelatives)
  return (
    <>
      {lateRelatives?.length > 0 && (
        <>
          <h2 className="text-sm text-red-700">
            You haven't heard for a while of :
          </h2>
          <ul className="mb-8">
            {lateRelatives?.map((relative) => (
              <RelativeListItem relative={relative} />
            ))}
          </ul>
        </>
      )}

      {seenRelatives?.length > 0 && (
        <>
          <h2 className="text-sm text-teal-600">Recently heard of or seen :</h2>
          <ul>
            {seenRelatives?.map((relative) => (
              <RelativeListItem relative={relative} />
            ))}
          </ul>
        </>
      )}

      {seenRelatives?.length === 0 && lateRelatives?.length === 0 && (
        <p className="text-center text-teal-600">
          You have no relatives yet.{' '}
          <span className="block text-sm">
            Add one by clicking on the button below.
          </span>
        </p>
      )}
    </>
  )
}
