import { useState } from 'react';

const useInputValue = () => {
  const [inputValue, setInputValue] =
    useState('');

  const onValueChanged = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setInputValue(e.target.value);
  };

  return {
    inputValue,
    setInputValue: onValueChanged,
  };
};

export default useInputValue;
