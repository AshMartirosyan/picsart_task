import styled, { keyframes } from 'styled-components';
import { TableRow } from '../Table';
import { TableDataCell } from '../Table';

export const pulseAnimation = keyframes`
  0% { 
    background-color: #eee; 
  }
  50% { 
    background-color: #c2c2c2; 
  }
  100% { 
    background-color: #eee; 
  }
`;

export const SkeletonRow = styled(TableRow)`
  animation: ${pulseAnimation} 1.5s ease-in-out infinite;
`;

export const SkeletonCell = styled(TableDataCell)`
  background-color: transparent !important;
`;

export const FakeData = styled.div`
  width: 100%;
  height: 10px;
  border-radius: 4px;
`;
