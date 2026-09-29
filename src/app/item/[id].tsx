import { Stack, useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { itemData } from '@/constants/items';
import { Radius, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

export default function ItemDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const theme = useTheme();
  const item = itemData.find((candidate) => candidate.id === Number(id));

  if (!item) {
    return (
      <>
        <Stack.Screen options={{ title: 'Item' }} />
        <SafeAreaView
          edges={['bottom']}
          style={[styles.container, { backgroundColor: theme.background }]}>
          <Text style={[styles.notFound, { color: theme.text }]}>Item not found.</Text>
        </SafeAreaView>
      </>
    );
  }

  return (
    <>
      <Stack.Screen options={{ title: item.name }} />
      <SafeAreaView
        edges={['bottom']}
        style={[styles.container, { backgroundColor: theme.background }]}>
        <View style={[styles.card, { backgroundColor: theme.card }]}>
          <Text style={[styles.name, { color: theme.text }]}>{item.name}</Text>
          <Text style={[styles.id, { color: theme.textSecondary }]}>Item #{item.id}</Text>
          <View style={[styles.badge, { backgroundColor: theme.badge }]}>
            <Text style={{ color: theme.badgeText }}>{item.category}</Text>
          </View>
          <Text style={[styles.effect, { color: theme.text }]}>{item.effect}</Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: Spacing.three },
  card: { gap: Spacing.two, padding: Spacing.three, borderRadius: Radius.m },
  name: { fontSize: 28, fontWeight: 'bold' },
  id: { fontSize: 16 },
  badge: {
    alignSelf: 'flex-start',
    paddingHorizontal: Spacing.two,
    paddingVertical: Spacing.half,
    borderRadius: Radius.s,
  },
  effect: { fontSize: 17, marginTop: Spacing.two },
  notFound: { fontSize: 18 },
});
