import { FC, PropsWithChildren, createContext, useContext } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import usePersistedState from '@/hooks/usePersistedState';
import { darkTheme, lightTheme } from '@/theme/globalStyles';

export type Theme = 'light' | 'dark';

interface ThemeState {
  theme?: Theme;
  setTheme: (item: Theme) => void;
}

const ThemeContext = createContext({} as ThemeState);

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, setState] = usePersistedState<Theme>('theme', 'light');

  return (
    <ThemeContext.Provider value={{ theme: state || 'light', setTheme: setState }}>
      <StyledThemeProvider theme={state === 'light' ? lightTheme : darkTheme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
export default ThemeProvider;

export const useTheme = () => useContext(ThemeContext);
