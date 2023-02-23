import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <Outlet />
    </div>
  );
}
