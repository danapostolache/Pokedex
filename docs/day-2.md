The coding agent reused my `ItemRow` component but replaced the single row with a `FlatList` using `renderItem` and `keyExtractor`.
The agent's approach was better for displaying all the items efficiently, while building `ItemRow` myself was better for learning how the layout and theme tokens work.
I do not fully understand yet how `FlatList` virtualization decides which rows remain rendered while I scroll.
