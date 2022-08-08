import { useEffect, useState } from 'react';

const useLocalStorage = (storageKey: string, fallbackState: any) => {
  const [value, setValue] = useState(JSON.parse(localStorage.getItem(storageKey) || '') || fallbackState);

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(value));
  }, [value, storageKey]);

  return [value, setValue];
};

export { useLocalStorage };
