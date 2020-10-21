import { useState, useCallback } from 'react';

type Id = string | number | object;

const useArrayState = <T extends { id: Id }>(
  initialState: T[]
): [T[], (item: T) => void, (id: Id, newItem: T) => void, (id: string) => void, (newItems: T[]) => void] => {
  const [items, updateItems] = useState<T[]>(initialState);

  const addItem = useCallback(
    (item: T) => {
      updateItems([...items, item]);
    },
    [items]
  );

  const updateItem = useCallback(
    (id: Id, newItem: T) => {
      updateItems(
        items.map((item) => {
          if (item.id === id) {
            return newItem;
          }
          return item;
        })
      );
    },
    [items]
  );

  const deleteItem = useCallback(
    (id: Id) => {
      updateItems(
        items.filter((item) => {
          return item.id !== id;
        })
      );
    },
    [items]
  );

  const concatItems = useCallback(
    (newItems: T[]) => {
      updateItems([...items, ...newItems]);
    },
    [items]
  );

  return [items, addItem, updateItem, deleteItem, concatItems];
};

export default useArrayState;
