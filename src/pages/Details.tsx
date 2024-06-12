import { Suspense } from 'react';
import loadable from '@loadable/component';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import ArrowLeft from '@/assets/icons/arrowLeft.svg';
import { HStack } from '@/atom/Base';
import { IconButton } from '@/atom/Button';
import { UserInfoSkeleton } from '@/organism/UserInfoSkeleton';

const UserInfo = loadable(
  () => import('@/components/organism/UserInfo').then((res) => res.UserInfo),
  { ssr: false },
);

const Base = styled(HStack)`
  gap: 20px;
  align-items: flex-start;
`;

const BackButton = styled(IconButton)`
  position: sticky;
  top: 84px;
  height: calc(100vh - (73px + 36px + 12px));
`;

const Details = () => {
  const navigate = useNavigate();

  return (
    <Base>
      <BackButton icon={<ArrowLeft />} onClick={() => navigate(-1)} />
      <Suspense fallback={<UserInfoSkeleton />}>
        <UserInfo />
      </Suspense>
    </Base>
  );
};

export default Details;
