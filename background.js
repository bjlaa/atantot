import { LocalNotifications } from '@capacitor/local-notifications'

addEventListener('updateNotifications', (resolve, reject) => {
  try {
    console.log('received silent push notification')

    LocalNotifications.schedule([
      {
        id: 100,
        title: 'Enterprise Background Runner',
        body: 'Received silent push notification',
      },
    ])

    resolve()
  } catch (err) {
    reject()
  }
})
