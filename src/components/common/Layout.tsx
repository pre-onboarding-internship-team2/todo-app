import { Outlet } from "react-router-dom";
import NavigationBar from "./NavigationBar";

const Layout = () => {
  return (
    <main className="h-screen flex justify-center items-center">
      <NavigationBar />
      <Outlet />
    </main>
  );
};

export default Layout;
