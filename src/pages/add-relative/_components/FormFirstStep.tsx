import { useState } from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom'
import Button from '../../../components/inputs/Button'
import TextInputGroup from '../../../components/inputs/TextInputGroup'
import Header from '../../../components/layout/Header'
import { useUserData } from '../../../hooks/userData/useUserData'
import { ContextType } from '../_types/context'

export default function FormFirstStep() {
  const { updateNewRelative, newRelative } = useOutletContext<ContextType>()
  const [name, setName] = useState(newRelative?.name || '')
  const [birthday, setBirthday] = useState(newRelative?.birthday || '')

  const { userData } = useUserData()

  const navigate = useNavigate()

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    const elements = new FormData(event.currentTarget)
    const name = String(elements.get('name'))
    const birthday = String(elements.get('birthday'))

    updateNewRelative({
      name,
      birthday,
    })

    navigate('/add-relative/meetup')
  }

  const isFirstRelative =
    !userData?.relatives || userData?.relatives?.length === 0

  return (
    <>
      <Header>
        <p className="mb-1 text-xs text-teal-800">Step 1 of 3</p>

        <h1 className="mb-0">
          {isFirstRelative ? 'Add a first relative' : 'Add a relative'}
        </h1>
      </Header>

      <main className="p-4">
        <form
          onSubmit={(event) => {
            event.preventDefault()
            handleSubmit(event)
          }}>
          <TextInputGroup
            label="What's their name?"
            name="name"
            className="mb-4"
            value={name}
            onChange={(event) => {
              setName(event.target.value)
              console.log(event.target.value)
            }}
          />

          <TextInputGroup
            type="date"
            label="And what's their birthday?"
            helperText="We'll send you a reminder when the time comes 🎁"
            name="birthday"
            value={birthday}
            onChange={(event) => setBirthday(event.target.value)}
          />

          <div className="mt-8 text-right">
            <Button type="submit">Continue</Button>
          </div>
        </form>
      </main>
    </>
  )
}
