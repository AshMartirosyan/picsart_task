import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { HStack } from '@/components/atom/Base';
import { devices } from '@/theme/globalStyles';

export const Navigation = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 24px 48px;
  background: ${({ theme }) => theme.nav};
  box-shadow:
    rgba(0, 0, 0, 0.09) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px;

  @media ${devices.mobile} {
    padding: 12px 18px;
    gap: 10px;
  }
`;

export const LinkContainer = styled(HStack)`
  gap: 20px;
  align-items: center;
`;

export const StyledNavLink = styled(NavLink)`
  font-size: 16px;
  font-weight: 600;
  text-decoration-line: none;
  color: ${({ theme }) => theme.navLink};
  &.active {
    color: ${({ theme }) => theme.navLinkActive};
  }
  &:hover {
    color: ${({ theme }) => theme.navLinkHover};
  }
`;
