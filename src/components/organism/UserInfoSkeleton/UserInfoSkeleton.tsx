import {
  Heading1Skeleton,
  Heading4Skeleton,
  InfoContainerSkeleton,
  ProfileImageSkeleton,
  SkeletonWrapper,
} from './UserInfoSkeleton.styled';

export const UserInfoSkeleton = () => {
  return (
    <SkeletonWrapper>
      <ProfileImageSkeleton />
      <InfoContainerSkeleton>
        <Heading1Skeleton />
        <Heading4Skeleton />
        <Heading4Skeleton />
        <Heading4Skeleton />
      </InfoContainerSkeleton>
    </SkeletonWrapper>
  );
};
