import { useEffect, useRef, useState, useCallback } from 'react';

type CallBackType<T> = (updatedValue: T) => void;
type SetStateType<T> = T | ((prev: T) => T);
type ReturnType<T> = [
  T,
  (newValue: SetStateType<T>, callback?: CallBackType<T>) => void,
];

function useCallbackState<T>(initialValue: T | (() => T)): ReturnType<T> {
  const [state, _setState] = useState<T>(initialValue);
  const callbackQueue = useRef<CallBackType<T>[]>([]);

  useEffect(() => {
    callbackQueue.current.forEach((cb) => cb(state));
    callbackQueue.current = [];
  }, [state]);

  const setState = useCallback(
    (newValue: SetStateType<T>, callback?: CallBackType<T>) => {
      _setState(newValue);
      if (typeof callback === 'function') {
        callbackQueue.current.push(callback);
      }
    },
    [],
  );

  return [state, setState];
}

export default useCallbackState;
