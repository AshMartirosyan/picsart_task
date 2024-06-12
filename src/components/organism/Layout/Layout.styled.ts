import styled from 'styled-components';
import { VStack } from '@/atom/Base';
import { devices } from '@/theme/globalStyles';

export const Content = styled(VStack)`
  height: 100%;
  padding: 84px 48px 36px;

  @media ${devices.mobile} {
    padding: 84px 18px;
  }
`;

export const LayoutWrapper = styled(VStack)`
  min-height: 100vh;
`;
