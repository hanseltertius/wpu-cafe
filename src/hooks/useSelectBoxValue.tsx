import { useCallback } from 'react';
import useCallbackState from './useCallbackState';

const useSelectBoxValue = (initialValue: string) => {
  const [selectBoxValue, setSelectBoxValueRaw] =
    useCallbackState<string>(initialValue);

  const setSelectBoxValue = useCallback(
    (
      e: React.ChangeEvent<HTMLSelectElement>,
      callback?: (val: string) => void,
    ) => {
      setSelectBoxValueRaw(e.target.value, callback);
    },
    [setSelectBoxValueRaw],
  );

  return {
    selectBoxValue,
    setSelectBoxValue,
    setSelectBoxValueRaw,
  };
};

export default useSelectBoxValue;
