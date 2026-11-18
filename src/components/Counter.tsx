import { useState } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

import { colors, radius, spacing } from '@/theme';

export function Counter({ initial = 0 }: { initial?: number }) {
  const [count, setCount] = useState(initial);

  return (
    <Pressable
      accessibilityRole="button"
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={() => setCount((value) => value + 1)}
    >
      <Text style={styles.label}>count is {count}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.accent,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.lg,
    borderRadius: radius,
  },
  pressed: {
    opacity: 0.85,
  },
  label: {
    color: colors.accentText,
    fontSize: 16,
    fontWeight: '600',
  },
});
