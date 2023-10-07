import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../../components/display/Card'
import Button from '../../components/inputs/Button'
import TextInputGroup from '../../components/inputs/TextInputGroup'
import { useGetUpdateName } from '../../hooks/userData/useGetUpdateName'

export default function Beginning() {
  const [userName, setUsername] = useState('')

  const updateUserName = useGetUpdateName()

  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-amber-50">
      <header className="px-4 pt-8">
        <h1>
          Welcome to <span className="text-primary">Atantot</span>!
        </h1>
      </header>

      <main className="p-4">
        <p className="mb-4 font-medium">
          This app is designed to help you keep in touch with your relatives.
        </p>
        <Card tag="p" className="mb-8 bg-green-50 p-2">
          <h2 className="mb-2 text-sm font-bold">Good to know:</h2>
          <p className="mb-0 text-sm">
            "À tantôt" is a french expression that means "see you soon".
          </p>
        </Card>

        <TextInputGroup
          name="username"
          label="To get started, please enter a username"
          placeholder="Benjamin"
          required
          value={userName}
          onChange={(e) => setUsername(e.target.value)}
        />

        <Button
          size="lg"
          className="mt-8 block w-full"
          onClick={() => {
            updateUserName(userName)

            navigate('/')
          }}>
          Submit
        </Button>
      </main>
    </div>
  )
}
