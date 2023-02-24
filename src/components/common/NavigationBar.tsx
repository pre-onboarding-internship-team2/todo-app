import { useContext, useCallback } from "react";
import { AuthContext } from "context/AuthContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ShareBtn from "./ShareBtn";

const NavigationBar = () => {
  const { access_token } = useContext(AuthContext);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const currentPath = pathname === "/signup" ? "로그인" : "회원가입";
  const pathRoute = pathname === "/signup" ? "/signin" : "signup";

  const logoutHandler = useCallback(() => {
    localStorage.removeItem("token");
    navigate("/signin", { replace: true });
  }, [navigate]);

  return (
    <header className="p-4 absolute top-0 right-0 left-0 bg-orange-300">
      <nav className="flex justify-between">
        <Link to="/todo" className="nav_btn">
          홈
        </Link>
        {access_token ? (
          <ShareBtn
            className="nav_btn"
            type="button"
            text="로그아웃"
            onClick={logoutHandler}
          />
        ) : (
          <Link className="nav_btn" to={pathRoute}>
            {currentPath}
          </Link>
        )}
      </nav>
    </header>
  );
};

export default NavigationBar;
