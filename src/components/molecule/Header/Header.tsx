import { useCallback } from 'react';
import { Switch } from '@/components/atom/Switch';
import { useTheme } from '@/contexts/ThemeProvider';
import { LinkContainer, StyledNavLink } from './Header.styled';
import { Navigation } from '../Header';

export const Header = () => {
  const { setTheme, theme } = useTheme();
  const handleSwitchChange = useCallback((value: boolean) => {
    setTheme(value ? 'dark' : 'light');
  }, []);

  return (
    <Navigation>
      <LinkContainer>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/users">Users</StyledNavLink>
      </LinkContainer>
      <Switch defaultValue={theme === 'dark'} onChange={handleSwitchChange} />
    </Navigation>
  );
};
