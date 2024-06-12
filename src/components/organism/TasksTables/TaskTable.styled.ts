import styled from 'styled-components';
import { Button } from '@/atom/Button';

export const BaseComponent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const TableWrapper = styled.div`
  overflow-x: scroll;
`;
export const ActionsContainer = styled.span`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 20px;
  row-gap: 6px;
`;

export const ActionButton = styled(Button)`
  white-space: nowrap;
  flex-grow: 1;
`;
