import { useContext } from 'react'
import { UserDataContext } from '../../contexts/UserDataContext'

export function useGetAddRelative() {
  return useContext(UserDataContext).addRelative
}
