import { Suspense } from 'react';
import loadable from '@loadable/component';
import { Outlet } from 'react-router-dom';
import { Navigation } from '@/molecule/Header';
import { Content, LayoutWrapper } from './Layout.styled';

const Header = loadable(() => import('@/molecule/Header').then((res) => res.Header), {
  ssr: false,
});

export const Layout = () => {
  return (
    <LayoutWrapper>
      <Suspense fallback={<Navigation />}>
        <Header />
      </Suspense>
      <Content>
        <Outlet />
      </Content>
    </LayoutWrapper>
  );
};
