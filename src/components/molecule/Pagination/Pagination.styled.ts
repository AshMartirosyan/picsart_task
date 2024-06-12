import styled from 'styled-components';
import { IconButton } from '@/components/atom/Button';

export const List = styled.ul`
  display: flex;
  justify-content: flex-end;
  gap: 4px;
  text: 16px;
  font-weight: 500;
  list-style-type: none;
`;

export const PageItem = styled(IconButton)`
  text-align: center;
  font-size: 16px;
  padding-left: 12px;
  padding-right: 12px;
`;
