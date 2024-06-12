import { Route, Routes } from 'react-router-dom';
import PageTransition from '@/molecule/PageTransition/PageTransition';
import { Layout } from '@/organism/Layout';
import Details from './Details';
import Home from './Home';
import UsersList from './Users';

const AppRoutes = () => {
  return (
    <PageTransition>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UsersList />} />
          <Route index path="/details/:userId" element={<Details />} />
        </Route>
      </Routes>
    </PageTransition>
  );
};

export default AppRoutes;
