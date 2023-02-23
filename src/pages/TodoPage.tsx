import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const TodoPage = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/signin");
    }
  }, [token, navigate]);

  return <div>3</div>;
};
