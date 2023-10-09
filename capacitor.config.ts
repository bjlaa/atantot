import { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'atantot',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
  },
  plugins: {
    BackgroundRunner: {
      label: 'com.example.background.task',
      src: 'background.js',
      event: 'updateNotifications',
      repeat: true,
      interval: 1000,
      autoStart: true,
    },
  },
}

export default config
