import { ChangeEvent, useCallback } from 'react';
import useCallbackState from './useCallbackState';

const useInputValue = (initialValue: string) => {
  const [inputValue, setInputValueRaw] = useCallbackState<string>(initialValue);

  const setInputValue = useCallback(
    (e: ChangeEvent<HTMLInputElement>, callback?: (val: string) => void) => {
      setInputValueRaw(e.target.value, callback);
    },
    [setInputValueRaw],
  );

  return {
    inputValue,
    setInputValue,
    setInputValueRaw,
  };
};

export default useInputValue;
