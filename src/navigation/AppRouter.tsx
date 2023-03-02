import AwbListView from '../pages/AwbList/AwbListView';
import NotFoundView from '../pages/NotFound/NotFoundView';
import { Route, Routes } from 'react-router-dom';

const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<AwbListView />} />
      <Route path="*" element={<NotFoundView />} />
    </Routes>
  );
};

export default AppRouter;
