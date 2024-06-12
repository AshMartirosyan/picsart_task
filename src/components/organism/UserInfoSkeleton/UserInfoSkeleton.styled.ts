import styled, { css, keyframes } from 'styled-components';
import { HStack, VStack } from '@/atom/Base';
import { devices } from '@/theme/globalStyles';

export const pulseAnimation = (color?: string) => keyframes`
  0% { 
    background-color: #eee; 
  }
  50% { 
    background-color: ${color || '#c2c2c2'}
  }
  100% { 
    background-color: #eee; 
  }
`;

export const SkeletonWrapper = styled(HStack)`
  flex: 1;
  gap: 48px;
  padding: 12px 24px;
  padding: 12px 24px;
  border-radius: 8px;
  @media ${devices.tablet} {
    flex-direction: column;
    justify-content: center;
  }
  animation: ${css`
    ${pulseAnimation('#f1f1f1')} 1.5s ease-in-out infinite
  `};
`;

export const ProfileImageSkeleton = styled.span`
  width: 240px;
  height: 240px;
  border-radius: 50%;

  animation: ${css`
    ${pulseAnimation()} 1.5s ease-in-out infinite
  `};

  @media ${devices.tablet} {
    width: 120px;
    height: 120px;
  }

  @media ${devices.mobile} {
    width: 64px;
    height: 64px;
  }
`;

export const InfoContainerSkeleton = styled(VStack)`
  flex: 1;
  align-self: flex-start;
  width: 100%;
  gap: 12px;
`;
export const Heading1Skeleton = styled.span`
  width: 100%;
  height: 54px;
  border-radius: 12px;
  animation: ${css`
    ${pulseAnimation()} 1.5s ease-in-out infinite
  `};

  @media ${devices.tablet} {
    height: 48px;
  }

  @media ${devices.mobile} {
    height: 36px;
  }
`;

export const Heading4Skeleton = styled.span`
  width: 100%;
  height: 24px;
  border-radius: 12px;
  animation: ${css`
    ${pulseAnimation()} 1.5s ease-in-out infinite
  `};

  @media ${devices.tablet} {
    height: 18px;
  }

  @media ${devices.mobile} {
    height: 12px;
  }
`;
