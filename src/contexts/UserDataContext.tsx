import { PropsWithChildren, createContext, useEffect, useState } from 'react'
import { getUserDataFromStorage } from '../helpers/storage/getUserDataFromStorage'
import { updateUserDataInStorage } from '../helpers/storage/updateUserDataInStorage'
import { Relative, UserData } from '../types/userData'

type UserDataContextType = {
  userData?: UserData
  updateUserName: (name: string) => void
  addRelative: (relative: Relative) => void
  removeRelative: (relative: Relative) => void
}

const defaultUserData = { name: '', relatives: [] }

export const UserDataContext = createContext<UserDataContextType>({
  userData: defaultUserData,
  updateUserName: () => {},
  addRelative: () => {},
  removeRelative: () => {},
})

export function UserDataProvider({ children }: PropsWithChildren) {
  const [userData, setUserData] = useState<UserData | undefined>(undefined)

  // Handles loading the userData from the storage
  useEffect(() => {
    const handleLoadUserData = async () => {
      const userData = await getUserDataFromStorage()

      if (userData) setUserData(userData)
    }

    handleLoadUserData()
  }, [])

  // Handles maintaining in sync the userData in the context and in the storage
  useEffect(() => {
    if (!userData) return

    const handleUpdateStorage = async () => updateUserDataInStorage(userData)

    handleUpdateStorage()
  }, [userData, setUserData])

  function updateUserName(name: string) {
    setUserData({ ...(userData || defaultUserData), name })
  }

  function addRelative(relative: Relative) {
    setUserData({
      ...(userData || defaultUserData),
      relatives: [...(userData?.relatives || []), relative],
    })
  }

  function removeRelative(relative: Relative) {
    setUserData({
      ...(userData || defaultUserData),
      relatives:
        userData?.relatives.filter(
          (relativeInList) => relativeInList.id !== relative.id
        ) || [],
    })
  }

  return (
    <UserDataContext.Provider
      value={{ userData, updateUserName, addRelative, removeRelative }}>
      {children}
    </UserDataContext.Provider>
  )
}
