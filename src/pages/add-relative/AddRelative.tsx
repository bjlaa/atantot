import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/layout/Header'
import { useUserData } from '../../hooks/userData/useUserData'
import { Relative } from '../../types/userData'
import { ContextType } from './_types/context'

export default function AddRelative() {
  const { userData } = useUserData()

  const [newRelative, setNewRelative] = useState<Partial<Relative> | undefined>(
    undefined
  )
  console.log(newRelative)
  function updateNewRelative(newRelative: Partial<Relative> | undefined) {
    setNewRelative(newRelative)
  }

  function resetNewRelative() {
    setNewRelative(undefined)
  }

  const isFirstRelative =
    !userData?.relatives || userData?.relatives?.length === 0

  return (
    <div className="min-h-screen bg-amber-50">
      <Header>
        <h1 className="mb-0">
          {isFirstRelative ? 'Add a first relative' : 'Add a relative'}
        </h1>
      </Header>

      <main className="p-4">
        <Outlet
          context={
            {
              newRelative,
              setNewRelative,
              updateNewRelative,
              resetNewRelative,
            } satisfies ContextType
          }
        />
      </main>
    </div>
  )
}
