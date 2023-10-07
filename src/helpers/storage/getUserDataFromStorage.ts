import { Preferences } from '@capacitor/preferences'

export async function getUserDataFromStorage() {
  const result = await Preferences.get({ key: 'userData' })
  return JSON.parse(result.value || '{}')
}
