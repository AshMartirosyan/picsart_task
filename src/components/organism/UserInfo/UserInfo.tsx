import { useParams } from 'react-router';
import { useUserDetails } from '@/api/users';
import { Heading1, Heading4 } from '@/atom/Base';
import { BaseComponent, InfoContainer, ProfileImage } from './UserInfo.styled';
import { UserInfoSkeleton } from '../UserInfoSkeleton';

export const UserInfo = () => {
  const params = useParams();
  const { data, isLoading } = useUserDetails(params.userId);

  if (isLoading) {
    return <UserInfoSkeleton />;
  }

  return (
    <BaseComponent>
      <ProfileImage src={data?.image} loading="lazy" />
      <InfoContainer>
        <Heading1>{[data?.firstName, data?.lastName].join(' ')}</Heading1>
        <Heading4>{`Email: ${data?.email}`}</Heading4>
        <Heading4>{`Age: ${data?.age}`}</Heading4>
        <Heading4>{`Address: ${data?.address?.address}`}</Heading4>
      </InfoContainer>
    </BaseComponent>
  );
};
