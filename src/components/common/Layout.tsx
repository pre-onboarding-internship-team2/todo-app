import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <header>
      <h1>Header</h1>
      <Outlet />
    </header>
  );
};

export default Layout;
