import { useContext } from 'react'
import { UserDataContext } from '../../contexts/UserDataContext'

export function useGetUserData() {
  return useContext(UserDataContext).userData
}
