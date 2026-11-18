import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: '#12151d' },
          headerTintColor: '#e8eaf0',
          contentStyle: { backgroundColor: '#0b0d12' },
        }}
      />
    </>
  );
}
