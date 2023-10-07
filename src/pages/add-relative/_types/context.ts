import { Relative } from '../../../types/userData'

export type ContextType = {
  newRelative: Partial<Relative> | undefined
  setNewRelative: (newRelative: Partial<Relative> | undefined) => void
  updateNewRelative: (newRelative: Partial<Relative> | undefined) => void
  resetNewRelative: () => void
}
