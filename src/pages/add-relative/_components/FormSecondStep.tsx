import { useNavigate, useOutletContext } from 'react-router-dom'
import { v4 as uuid } from 'uuid'
import Button from '../../../components/inputs/Button'
import SelectInputGroup from '../../../components/inputs/SelectInputGroup'
import { useUserData } from '../../../hooks/userData/useUserData'
import { Frequency, Relative } from '../../../types/userData'
import { ContextType } from '../_types/context'

export default function FormSecondStep() {
  const { addRelative } = useUserData()
  const { newRelative, resetNewRelative } = useOutletContext<ContextType>()

  const navigate = useNavigate()

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    const elements = new FormData(event.currentTarget)
    const meetingFrequency = String(
      elements.get('meetingFrequency')
    ) as Frequency
    const callingFrequency = String(
      elements.get('callingFrequency')
    ) as Frequency

    addRelative({
      ...newRelative,
      meetingFrequency,
      callingFrequency,
      id: uuid(),
    } as Relative)

    resetNewRelative()

    navigate('/')
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        handleSubmit(event)
      }}>
      <SelectInputGroup
        label="Meeting frequency"
        helperText="How often you'd like to see this person"
        name="meetingFrequency"
        className="mb-4">
        <option value={Frequency.DAILY}>Daily</option>
        <option value={Frequency.WEEKLY}>Weekly</option>
        <option value={Frequency.BIWEEKLY}>Biweekly</option>
        <option value={Frequency.MONTHLY}>Monthly</option>
        <option value={Frequency.BIMONTHLY}>Bimonthly</option>
        <option value={Frequency.YEARLY}>Yearly</option>
      </SelectInputGroup>

      <SelectInputGroup
        label="Calling frequency"
        helperText="How often you'd like to call this person"
        name="callingFrequency">
        <option value={Frequency.DAILY}>Daily</option>
        <option value={Frequency.WEEKLY}>Weekly</option>
        <option value={Frequency.BIWEEKLY}>Biweekly</option>
        <option value={Frequency.MONTHLY}>Monthly</option>
        <option value={Frequency.BIMONTHLY}>Bimonthly</option>
        <option value={Frequency.YEARLY}>Yearly</option>
      </SelectInputGroup>

      <div className="mt-8 text-right">
        <Button type="submit">Add Relative</Button>
      </div>
    </form>
  )
}
