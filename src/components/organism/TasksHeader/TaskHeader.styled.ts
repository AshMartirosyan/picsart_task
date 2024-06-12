import styled from 'styled-components';
import { HStack } from '@/atom/Base';
import { Button } from '@/atom/Button';

export const BaseComponent = styled(HStack)`
  justify-content: flex-end;
  flex-wrap: wrap;
  padding: 16px 0;
  gap: 20px;
`;

export const NewTaskButton = styled(Button)`
  font-size: 18px;
  padding: 12px 24px;
`;
