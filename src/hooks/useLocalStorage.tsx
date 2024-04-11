import { useState, useEffect } from "react";

function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(`Ошибка при чтении localStorage: ${error}`);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.warn(`Ошибка при записи в localStorage: ${error}`);
    }
  }, [key, storedValue]);

  const setValue = (value: T | ((val: T) => T)) => {
    const valueToStore = typeof value === "function" ? (value as Function)(storedValue) : value;
    setStoredValue(valueToStore);
  };

  const clearValue = () => {
    window.localStorage.removeItem(key);
    setStoredValue(initialValue);
  };

  return [storedValue, setValue, clearValue] as const;
}

export default useLocalStorage;
