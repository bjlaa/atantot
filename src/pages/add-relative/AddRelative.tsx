import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Relative } from '../../types/userData'
import { ContextType } from './_types/context'

export default function AddRelative() {
  const [newRelative, setNewRelative] = useState<Partial<Relative> | undefined>(
    undefined
  )

  function updateNewRelative(newRelative: Partial<Relative> | undefined) {
    setNewRelative((prevNewRelative) => ({
      ...prevNewRelative,
      ...newRelative,
    }))
  }

  function resetNewRelative() {
    setNewRelative(undefined)
  }

  return (
    <div className="min-h-screen bg-amber-50">
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
    </div>
  )
}
