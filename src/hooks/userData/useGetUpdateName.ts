import { useContext } from 'react'
import { UserDataContext } from '../../contexts/UserDataContext'

export function useGetUpdateName() {
  return useContext(UserDataContext).updateUserName
}
