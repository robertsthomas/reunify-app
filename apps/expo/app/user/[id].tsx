import { UserDetailScreen } from 'app/features/user/detail-screen'
import { Stack } from 'expo-router'

import { Text } from '@my/ui'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'User',
        }}
      />

      <UserDetailScreen />
    </>
  )
}
