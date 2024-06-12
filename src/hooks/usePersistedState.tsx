import { Dispatch, SetStateAction, useEffect, useLayoutEffect, useState } from 'react';

const usePersistedState = <S,>(
  key: string,
  initialState?: S,
): [S | undefined, Dispatch<SetStateAction<S | undefined>>] => {
  const [state, setState] = useState<S | undefined>(initialState);

  useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      const data = localStorage.getItem(key);
      if (data) {
        localStorage.removeItem(key);
        setState(JSON.parse(data));
      }
    }
  }, []);

  useEffect(() => {
    const onBlue = () => {
      localStorage.setItem(key, JSON.stringify(state));
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('beforeunload', onBlue);
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('beforeunload', onBlue);
      }
    };
  }, [state]);

  return [state, setState];
};

export default usePersistedState;
