import { Counter } from '@/components/Counter';
import { Screen } from '@/components/Screen';

export default function HomeScreen() {
  return (
    <Screen
      title="template-mobile"
      subtitle="Expo and React Native with TypeScript. Replace this screen with your own."
    >
      <Counter />
    </Screen>
  );
}
