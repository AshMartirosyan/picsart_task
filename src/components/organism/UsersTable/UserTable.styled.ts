import styled from 'styled-components';
import { HStack } from '@/atom/Base';
import { Button } from '@/atom/Button';

export const BaseComponent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const TableWrapper = styled.div`
  overflow-x: scroll;
`;

export const ActionContainer = styled(HStack)`
  justify-content: center;
`;

export const ActionButton = styled(Button)`
  white-space: nowrap;
`;
