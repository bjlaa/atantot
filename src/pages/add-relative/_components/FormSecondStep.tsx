import { useNavigate, useOutletContext } from 'react-router-dom'
import Button from '../../../components/inputs/Button'
import SelectInputGroup from '../../../components/inputs/SelectInputGroup'
import TextInputGroup from '../../../components/inputs/TextInputGroup'
import Header from '../../../components/layout/Header'
import { Frequency, Relative } from '../../../types/userData'
import { ContextType } from '../_types/context'

export default function FormSecondStep() {
  const { newRelative, updateNewRelative } = useOutletContext<ContextType>()

  const navigate = useNavigate()

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    const elements = new FormData(event.currentTarget)
    const meetupFrequence = String(elements.get('meetupFrequence')) as Frequency
    const lastMeetupDate = String(elements.get('lastMeetupDate')) as Frequency

    updateNewRelative({
      meetupFrequence,
      lastMeetupDate,
    } as Relative)

    navigate('/add-relative/phone-call')
  }

  return (
    <>
      <Header>
        <p className="mb-1 text-xs text-teal-800">Step 2 of 3</p>

        <h1 className="mb-0">
          Meetup habits with{' '}
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
            name="lastMeetupDate"
            label="The date of your last meetup"
            className="mb-4"
          />

          <SelectInputGroup
            label="Meeting frequency"
            helperText="How often you'd like to see this person"
            name="meetupFrequence">
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
            <Button type="submit">Continue</Button>
          </div>
        </form>
      </main>
    </>
  )
}
