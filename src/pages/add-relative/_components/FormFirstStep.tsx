import { useState } from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom'
import Button from '../../../components/inputs/Button'
import TextInputGroup from '../../../components/inputs/TextInputGroup'
import { ContextType } from '../_types/context'

export default function FormFirstStep() {
  const { updateNewRelative, newRelative } = useOutletContext<ContextType>()
  const [name, setName] = useState(newRelative?.name || '')
  const [birthday, setBirthday] = useState(newRelative?.birthday || '')

  const navigate = useNavigate()

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    const elements = new FormData(event.currentTarget)
    const name = String(elements.get('name'))
    const birthday = String(elements.get('birthday'))

    updateNewRelative({
      name,
      birthday,
    })

    navigate('/add-relative/frequency')
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        handleSubmit(event)
      }}>
      <TextInputGroup
        label="Name"
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
        label="Birthdate of your relative"
        helperText="We'll be able to send you a reminder"
        name="birthday"
        value={birthday}
        onChange={(event) => setBirthday(event.target.value)}
      />

      <div className="mt-8 text-right">
        <Button type="submit">Continue</Button>
      </div>
    </form>
  )
}
