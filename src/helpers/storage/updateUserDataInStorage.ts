import { Preferences } from '@capacitor/preferences'
import { UserData } from '../../types/userData'

export async function updateUserDataInStorage(value: UserData) {
  await Preferences.set({ key: 'userData', value: JSON.stringify(value) })
}
