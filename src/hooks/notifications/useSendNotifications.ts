import {
  LocalNotifications,
  PendingResult,
} from '@capacitor/local-notifications'
import dayjs from 'dayjs'
import { useEffect, useState } from 'react'
import { getLateAndSeenRelatives } from '../../helpers/relatives/getLateAndSeenRelatives'
import { Relative } from '../../types/userData'

export function useSendNotifications(relatives: Relative[]) {
  const [pendingNotifications, setPendingNotifications] =
    useState<PendingResult>()
  const { lateRelatives } = getLateAndSeenRelatives(relatives)

  useEffect(() => {
    async function getPendingNotifications() {
      const notifs = await LocalNotifications.getPending()

      setPendingNotifications(notifs)
    }

    getPendingNotifications()
  }, [])

  useEffect(() => {
    async function sendNotifications() {
      if (
        pendingNotifications &&
        pendingNotifications.notifications.length > 0
      ) {
        await LocalNotifications.cancel(pendingNotifications)
      }

      if (lateRelatives.length > 0) {
        const notifications = lateRelatives.map((relative, index) => ({
          title: 'Relatives',
          body: `You haven't seen ${relative.name} in a while`,
          id: 100 + index,
          schedule: {
            at: dayjs().add(20, 'seconds').toDate(),
          },
        }))

        await LocalNotifications.schedule({
          notifications,
        })
      }
    }

    sendNotifications()
  })

  console.log(pendingNotifications)
}
