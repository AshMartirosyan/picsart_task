import styled from 'styled-components';
import { devices } from '@/theme/globalStyles';

export const VStack = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HStack = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Heading1 = styled.h1`
  font-size: 54px;

  @media ${devices.tablet} {
    font-size: 48px;
  }

  @media ${devices.mobile} {
    font-size: 36px;
  }
`;

export const Heading2 = styled.h1`
  font-size: 38px;

  @media ${devices.tablet} {
    font-size: 36px;
  }

  @media ${devices.mobile} {
    font-size: 24px;
  }
`;

export const Heading4 = styled.h4`
  font-size: 24px;

  @media ${devices.tablet} {
    font-size: 18px;
  }

  @media ${devices.mobile} {
    font-size: 12px;
  }
`;
