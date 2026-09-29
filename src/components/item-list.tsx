import { router } from 'expo-router';
import { FlatList } from 'react-native';

import { ItemRow } from '@/components/item-row';
import { Item } from '@/constants/items';
import { Spacing } from '@/constants/theme';

type Props = { items: Item[] };

export function ItemList({ items }: Props) {
  return (
    <FlatList
      data={items}
      keyExtractor={(item) => String(item.id)}
      contentContainerStyle={{ gap: Spacing.two, paddingBottom: Spacing.three }}
      renderItem={({ item }) => (
        <ItemRow
          item={item}
          onPress={() => router.push({ pathname: '/item/[id]', params: { id: item.id } })}
        />
      )}
    />
  );
}
