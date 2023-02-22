import { useAuth } from "context/authContext";
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <div className="flex flex-col items-center mt-12">
        <div className="w-80">
          <Header />
          <Outlet />
        </div>
      </div>
    </>
  );
}

const Header = () => {
  const { hasAuth, signOut } = useAuth();

  return (
    <>
      <div className="self-stretch flex justify-between items-center h-32">
        <h1 className="text-2xl">Todo App</h1>
        {!hasAuth ? (
          <>
            <Link to="/signin">로그인</Link>
            <Link to="/signup">회원가입</Link>
          </>
        ) : (
          <button
            onClick={() => {
              signOut();
            }}
            className={"w-20"}
          >
            로그아웃
          </button>
        )}
      </div>
    </>
  );
};
