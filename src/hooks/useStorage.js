import { useState, useCallback, useMemo } from 'react';

const useStorage = (key, initialValue, storageType = 'local') => {
  const storage = useMemo(
    () => (storageType === 'local' ? localStorage : sessionStorage),
    [storageType],
  );

  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = storage.getItem(key);

      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);

      return initialValue;
    }
  });

  const setValue = useCallback(
    value => {
      try {
        setStoredValue(storedValue => {
          const valueToStore =
            typeof value === 'function' ? value(storedValue) : value;
          storage.setItem(key, JSON.stringify(valueToStore));

          return valueToStore;
        });
      } catch (error) {
        console.error(error);
      }
    },
    [key, storage],
  );

  return [storedValue, setValue];
};

export default useStorage;
