import { useContext } from 'react'
import { UserDataContext } from '../../contexts/UserDataContext'

export function useGetName() {
  return useContext(UserDataContext).userData?.name || ''
}
