import { Route, Routes } from 'react-router-dom';
import AwbListView from '../pages/AwbList/AwbListView';
import AwbDetailView from '../pages/AwbDetail/AwbDetailView';
import NotFoundView from '../pages/NotFound/NotFoundView';

const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<AwbListView />} />
      <Route path="detail/:courier/:awb" element={<AwbDetailView />} />
      <Route path="*" element={<NotFoundView />} />
    </Routes>
  );
};

export default AppRouter;
