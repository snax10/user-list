import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserList } from '../views/UserList/UserList';
import { UserDetail } from '../views/UserDetail/UserDetail';

export function Router() {
  return (
    <BrowserRouter basename='/'>
      <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/user/:id" element={<UserDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
