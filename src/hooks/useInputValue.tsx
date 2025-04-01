import { useState } from 'react';

const useInputValue = (callback?: () => void) => {
  const [inputValue, setInputValue] = useState('');

  const onValueChanged = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setInputValue(e.target.value);
    if (!!callback) callback();
  };

  return {
    inputValue,
    setInputValue: onValueChanged,
  };
};

export default useInputValue;
