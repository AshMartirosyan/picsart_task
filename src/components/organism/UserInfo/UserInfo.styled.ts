import styled from 'styled-components';
import { HStack, VStack } from '@/atom/Base';
import { devices } from '@/theme/globalStyles';

export const BaseComponent = styled(HStack)`
  flex: 1;
  gap: 48px;
  padding: 12px 24px;
  background-color: ${({ theme }) => theme.card};
  padding: 12px 24px;
  border-radius: 8px;
  @media ${devices.tablet} {
    flex-direction: column;
    justify-content: center;
  }
`;

export const ProfileImage = styled.img`
  width: 240px;
  height: 240px;
  border-radius: 50%;
  object-fit: cover;

  @media ${devices.tablet} {
    width: 120px;
    height: 120px;
  }

  @media ${devices.mobile} {
    width: 64px;
    height: 64px;
  }
`;

export const InfoContainer = styled(VStack)`
  flex: 1;
  align-self: flex-start;
  gap: 12px;
`;
