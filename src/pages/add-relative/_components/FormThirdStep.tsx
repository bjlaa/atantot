import { useNavigate, useOutletContext } from 'react-router-dom'
import { v4 as uuid } from 'uuid'
import Button from '../../../components/inputs/Button'
import SelectInputGroup from '../../../components/inputs/SelectInputGroup'
import TextInputGroup from '../../../components/inputs/TextInputGroup'
import Header from '../../../components/layout/Header'
import { useUserData } from '../../../hooks/userData/useUserData'
import { Frequency, Relative } from '../../../types/userData'
import { ContextType } from '../_types/context'

export default function FormThirdStep() {
  const { addRelative } = useUserData()
  const { newRelative, resetNewRelative } = useOutletContext<ContextType>()

  const navigate = useNavigate()

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    const elements = new FormData(event.currentTarget)
    const phoneCallFrequence = String(
      elements.get('phoneCallFrequence')
    ) as Frequency
    const lastPhoneCallDate = String(
      elements.get('lastPhoneCallDate')
    ) as Frequency

    addRelative({
      ...newRelative,
      lastPhoneCallDate,
      phoneCallFrequence,
      id: uuid(),
    } as Relative)

    resetNewRelative()

    navigate('/')
  }

  return (
    <>
      <Header>
        <p className="mb-1 text-xs text-teal-800">Step 3 of 3</p>

        <h1 className="mb-0">
          Phone call habits with{' '}
          <span className="text-teal-600">{newRelative?.name}</span>
        </h1>
      </Header>

      <main className="p-4">
        <form
          onSubmit={(event) => {
            event.preventDefault()
            handleSubmit(event)
          }}>
          <TextInputGroup
            type="date"
            label="The date of your last phone call"
            name="lastPhoneCallDate"
            className="mb-4"
          />

          <SelectInputGroup
            label="Calling frequency"
            helperText="How often you'd like to call this person"
            name="phoneCallFrequence">
            <option value=""></option>
            <option value={Frequency.DAILY}>Daily</option>
            <option value={Frequency.BIWEEKLY}>Biweekly (twice a week)</option>
            <option value={Frequency.WEEKLY}>Weekly</option>
            <option value={Frequency.BIMONTHLY}>
              Bimonthly (twice a month)
            </option>
            <option value={Frequency.MONTHLY}>Monthly</option>
            <option value={Frequency.YEARLY}>Yearly</option>
          </SelectInputGroup>

          <div className="mt-8 text-right">
            <Button type="submit">Add Relative</Button>
          </div>
        </form>
      </main>
    </>
  )
}
